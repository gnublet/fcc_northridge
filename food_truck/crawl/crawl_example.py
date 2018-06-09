import requests
from lxml import html
import csv
import traceback

# there's a better way of doing this, but this is just for simplicity
# an improvement is to use a dictionary to configure 
# all the field names you want with the corresponding xpaths, indices, and other info

def crawl_page(output_filename):
    try:
        with open(output_filename, 'w') as csv_output_file:
            fieldnames = ['day', 'time', 'location', 'address', 'truck_type']
            writer = csv.DictWriter(csv_output_file, fieldnames = fieldnames, dialect='unix')
            writer.writeheader()

            page = requests.get("http://kogibbq.com/")
            tree = html.fromstring(page.content)

            day_xpath = "//div[@id='home-schedule']//div[contains(@class,'schedule-day')]"
            type_xpath = "./div[contains(@class,'truck-col') and not(contains(@class,'content'))]"
            day_results = tree.xpath(day_xpath)

            for day_result in day_results:
                try:
                    day = day_result.xpath(".//h3[1]/text()")[0]
                except:
                    print('days were not found')
                    quit()

                for type_element in day_result.xpath(type_xpath):
                    try:
                        type_text = type_element.xpath("./div[1]/text()")[0]
                    except:
                        print('food truck types were not found')
                        quit()

                    contents = type_element.xpath("./div[@class='truck-col-content']")
                    for content in contents:
                        # times = content.xpath(".//h4/text()")
                        time_elements = content.xpath(".//h4")
                        for t in time_elements:
                            output_row_dict = {}
                            output_row_dict = dict.fromkeys(fieldnames, '')
                            try:
                                time_text = t.xpath("./text()")[0]
                                location = t.xpath("./following-sibling::p[@class='location']/text()")[0]
                                address = t.xpath("./following-sibling::p[@class='address']/a/text()")[0]
                                
                                output_row_dict['day'] = day
                                output_row_dict['time'] = time_text
                                output_row_dict['location'] = location
                                output_row_dict['address'] = address
                                output_row_dict['truck_type'] = type_text

                                writer.writerow(output_row_dict)
                            except:
                                print(traceback.print_exc())
                                writer.writerow(output_row_dict)
    except:
        print(traceback.print_exc())
        quit()

crawl_page('crawl_output.csv')