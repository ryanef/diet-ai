Create a new user in DynamoDB
with a primary key as email, Cognito sub id from event object as sort key

pk: email
sk: sub
spices: 2
refigerator: 0
cabinet: 0
freezer: 0
shopping_list: 0
goals: ['Weight Loss', 'Type 1 Diabetes', 'Type 2 Diabetes', 'Chronic Kidney Disease']



Create lists for refigerator, cabinet, freezer, shopping_list
by adding new DynamoDB items modeled like
pk: email#refigerator
sk: sub
name: 'brand',
size: weight/volume