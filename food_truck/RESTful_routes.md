# RESTful Routes

| NAME | PATH | VERB | PURPOSE | MONGOOSE METHOD |
| --- | --- | --- | --- | --- |
| INDEX | /api/foodTrucks | GET | list all food trucks | .find() |
| CREATE | /api/foodtrucks/ | POST | create new food truck | .create() |
| SHOW | /api/foodTrucks/:id | GET | show info about food truck | .findById() |
| UPDATE | /api/foodtrucks/:id | PUT | update food truck | .findOneAndUpdate() |
| DESTROY | /api/foodTrucks/:id | DELETE | delete food truck | .remove() |
