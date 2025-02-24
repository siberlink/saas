
const awsConfig = {
    Auth: {
        region: "us-east-1", // Replace with your AWS region
        userPoolId: "us-east-1_HmgOv68Ge", // Replace with your Cognito User Pool ID
        userPoolWebClientId: "2b3k463800choin8kt344mjbri", // Replace with your Cognito App Client ID
        identityPoolId: "us-east-1:7934e29e-d6fe-4958-a05c-9deeb9ba76a2", // Replace with your Identity Pool ID
        authenticationFlowType: "USER_PASSWORD_AUTH",
    },
};

export default awsConfig;