import json
import boto3

dynamodb = boto3.resource('dynamodb')
table_name = 'diet_recipe_app'
table = dynamodb.Table(table_name)


def lambda_handler(event, context):
    # TODO implement
    if event['triggerSource'] == 'PostConfirmation_ConfirmSignUp':
        user_email = event['request']['userAttributes']['email']
        sub = event['request']['userAttributes']['sub']
    
        try:
            table.put_item(
                Item={
                    'pk': user_email,
                    'sk': sub,
                    'spices': 2,
                    'refigerator': 0,
                    'cabinet': 0,
                    'freezer': 0,
                    'shopping_list': 0,
                    'goals': ['None']
                    }
            )
        except dynamodb.meta.client.exceptions as err:
            print(err)
            raise err

  
    return event
