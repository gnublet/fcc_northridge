# RESTful Routes

| NAME | PATH | VERB | PURPOSE | MONGOOSE METHOD |
| --- | --- | --- | --- | --- |
| INDEX | /api/foodTrucks | GET | list all food trucks | .find() |
| NEW | /api/foodTrucks/new | GET | show new food truck form | n/a |
| CREATE | /api/foodtrucks/ | POST | create new food truck and redir | .create() |
| SHOW | /api/foodTrucks/:id | GET | show info about food truck | .findById() |
| EDIT | /api/foodtrucks/:id/edit | GET | show edit form for food truck | .findById() |
| UPDATE | /api/foodtrucks/:id | PUT | update food truck and redir | .findOneAndUpdate() |
| DESTROY | /api/foodTrucks/:id | DELETE | delete food truck and redir | .remove() |
