#      This is an example event object from AWS Cognito 
#      when it is configured to do a PostConfirmation_ConfirmSignUp hook

#      This is just a hook that calls an AWS Lambda function
#      immediately after a new user confirms their e-mail

#      When Cognito calls the Lambda function it passes an event object
#      We can then get info from the event such as:
#        sub  - a unique user ID created by Cognito
#        email, name, phone number, etc.

#      From the same Lambda, we can then insert this info into a database
#      This lets us be able to track user information in a database
#      but never have the responsibility of tracking their password
```py
{
    'version': '1', 
    'region': 'us-east-1', 
    'userPoolId': 'us-east-1_CeeY234whVOJ', 
    'userName': 'google_104583464473234234639058902', # if using social signin 
    'callerContext': {
        'awsSdkVersion': 'aws-sdk-unknown-unknown', 
        'clientId': '6314tkgik4au345aglubfkrj'
    },
    'triggerSource': 'PostConfirmation_ConfirmSignUp',
    'request': {
        'userAttributes': {
            'sub': '948804c8-00b1-70a4-86bf-c2087ed9dd8e',
             'email_verified': 'false', 
             'identities': '[{
                "dateCreated":"1742856533259",
                "userId":"108335554644735639058902",
                "providerName":"Google",
                "providerType":"Google",
                "issuer":null,
                "primary":"true"}]', 
             'cognito:user_status': 'EXTERNAL_PROVIDER', 
             'email': 'valegfhfgh9@gmail.com'
             'first_name': 'bob',
             'phone_number': '17043001111'
             }}, 
             'response': {}
}
```