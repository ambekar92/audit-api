var config = {
    app: {
        host:'0.0.0.0',
        port: process.env.PORT || 3000
    },
    qtest: {
        access_token: '9f38d1f4-b4a1-4d3b-9219-d18fa162fb1f',
        user: 'NXF65900',
        password: 'Praveen@123',
        project_name: 'GES_AutomationIntegration_Trial',
        baseURL: 'https://qtest.tulip.nxp.com',
        root_module: 'Automation'
    }
}

module.exports = config;