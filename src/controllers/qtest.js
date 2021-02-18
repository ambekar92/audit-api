const config = require('../config.js');
const axios = require('axios').default;
const https = require('https');
const path = require('path');
const rootCas = require('ssl-root-cas').create();
const _ = require('underscore');


rootCas.addFile(path.resolve(__dirname,  '../tls-ca-bundle.pem'));
const httpsAgent = new https.Agent({ ca: rootCas });

console.log('Checking Connection');
console.log('Access Token --', `Bearer ${config.qtest.access_token}`);

const getUsers = async(req, res) => {
    try {
        // let testUrl = "https://qtest.tulip.nxp.com/api/v3/projects";
        let users = "/api/v3/projects/55/users"
        let resData = await qtestGetMethod(users);
        //  console.log('resData --', resData);
        res.json(resData.data);
    } catch (err) {
        console.log('\nError in Catch --\n', err)
    }
}

const getProjects = async(req, res) => {
    try {
        let prj = "/api/v3/projects"
        let resData = await qtestGetMethod(prj);
        //  console.log('resData --', resData);
        var filteredGoal = _.where(resData.data, { name: config.qtest.project_name });


        var ID_TO_FIND = 'AP-CHAN-PRFM-TP';
        // var data = [{
        //     "id": 100,
        //     "title": "Tlt1",
        //     "tax": [{
        //         "name": "Tax1",
        //         "id": 15
        //     }, {
        //         "name": "Tax1",
        //         "id": 17
        //     }]
        // }, {
        //     "id": 101,
        //     "title": "Tlt2",
        //     "tax": [{
        //         "name": "Tax2",
        //         "id": 16
        //     }]
        // }, {
        //     "id": 102,
        //     "title": "Tlt3",
        //     "tax": [{
        //         "name": "Tax3",
        //         "id": 17
        //     }, {
        //         "name": "Tax3",
        //         "id": 18
        //     }]
        // }];

        var data = [{
                "links": [{
                        "rel": "self",
                        "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19375"
                    },
                    {
                        "rel": "module",
                        "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19374"
                    }
                ],
                "id": 19375,
                "name": "Testbed1",
                "order": 1,
                "pid": "MD-3",
                "created_date": "2021-01-19T13:30:20+05:30",
                "last_modified_date": "2021-01-19T13:30:28+05:30",
                "parent_id": 19374,
                "description": "",
                "children": [{
                    "links": [{
                            "rel": "self",
                            "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19376"
                        },
                        {
                            "rel": "module",
                            "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19375"
                        }
                    ],
                    "id": 19376,
                    "name": "Build1",
                    "order": 1,
                    "pid": "MD-4",
                    "created_date": "2021-01-19T13:30:55+05:30",
                    "last_modified_date": "2021-01-19T13:31:01+05:30",
                    "parent_id": 19375,
                    "description": "",
                    "recursive": false
                }],
                "recursive": false
            },
            {
                "links": [{
                        "rel": "self",
                        "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19421"
                    },
                    {
                        "rel": "module",
                        "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19374"
                    }
                ],
                "id": 19421,
                "name": "WLAN_AP_CHAN_SWEEP_TP.xls",
                "order": 6,
                "pid": "MD-49",
                "created_date": "2021-01-28T11:21:04+05:30",
                "last_modified_date": "2021-01-28T11:21:04+05:30",
                "parent_id": 19374,
                "description": "WLAN_AP_CHAN_SWEEP_TP.xls",
                "children": [{
                    "links": [{
                            "rel": "self",
                            "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19422"
                        },
                        {
                            "rel": "module",
                            "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19421"
                        }
                    ],
                    "id": 19422,
                    "name": "AP-CHAN-PRFM-TP1",
                    "order": 1,
                    "pid": "MD-50",
                    "created_date": "2021-01-28T11:21:06+05:30",
                    "last_modified_date": "2021-01-28T11:21:06+05:30",
                    "parent_id": 19421,
                    "description": "AP-CHAN-PRFM-TP",
                    "recursive": false
                }],
                "recursive": false
            },
            {
                "links": [{
                        "rel": "self",
                        "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19419"
                    },
                    {
                        "rel": "module",
                        "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19374"
                    }
                ],
                "id": 19419,
                "name": "WLAN_AP_CHAN_SWEEP_TP.xls",
                "order": 5,
                "pid": "MD-47",
                "created_date": "2021-01-28T11:17:17+05:30",
                "last_modified_date": "2021-01-28T11:17:17+05:30",
                "parent_id": 19374,
                "description": "WLAN_AP_CHAN_SWEEP_TP.xls",
                "children": [{
                    "links": [{
                            "rel": "self",
                            "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19420"
                        },
                        {
                            "rel": "module",
                            "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19419"
                        }
                    ],
                    "id": 19420,
                    "name": "AP-CHAN-PRFM-TP1",
                    "order": 1,
                    "pid": "MD-48",
                    "created_date": "2021-01-28T11:17:18+05:30",
                    "last_modified_date": "2021-01-28T11:17:18+05:30",
                    "parent_id": 19419,
                    "description": "AP-CHAN-PRFM-TP1",
                    "recursive": false
                }],
                "recursive": false
            },
            {
                "links": [{
                        "rel": "self",
                        "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19407"
                    },
                    {
                        "rel": "module",
                        "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19374"
                    }
                ],
                "id": 19407,
                "name": "WLAN_AP_CHAN_SWEEP_TP.xls",
                "order": 3,
                "pid": "MD-35",
                "created_date": "2021-01-26T20:55:49+05:30",
                "last_modified_date": "2021-01-26T20:55:49+05:30",
                "parent_id": 19374,
                "description": "WLAN_AP_CHAN_SWEEP_TP.xls",
                "children": [{
                    "links": [{
                            "rel": "self",
                            "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19408"
                        },
                        {
                            "rel": "module",
                            "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19407"
                        }
                    ],
                    "id": 19408,
                    "name": "AP-CHAN-PRFM-TP",
                    "order": 1,
                    "pid": "MD-36",
                    "created_date": "2021-01-26T20:55:51+05:30",
                    "last_modified_date": "2021-01-26T20:55:51+05:30",
                    "parent_id": 19407,
                    "description": "AP-CHAN-PRFM-TP",
                    "recursive": false
                }],
                "recursive": false
            },
            {
                "links": [{
                        "rel": "self",
                        "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19417"
                    },
                    {
                        "rel": "module",
                        "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19374"
                    }
                ],
                "id": 19417,
                "name": "WLAN_AP_FIXEDRATE_TP.xls",
                "order": 4,
                "pid": "MD-45",
                "created_date": "2021-01-28T08:52:31+05:30",
                "last_modified_date": "2021-01-28T08:52:31+05:30",
                "parent_id": 19374,
                "description": "WLAN_AP_FIXEDRATE_TP.xls",
                "children": [{
                    "links": [{
                            "rel": "self",
                            "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19418"
                        },
                        {
                            "rel": "module",
                            "href": "https://qtest.tulip.nxp.com/api/v3/projects/55/modules/19417"
                        }
                    ],
                    "id": 19418,
                    "name": "AP-FIXERATE-TP",
                    "order": 1,
                    "pid": "MD-46",
                    "created_date": "2021-01-28T08:52:32+05:30",
                    "last_modified_date": "2021-01-28T08:52:32+05:30",
                    "parent_id": 19417,
                    "description": "AP-FIXERATE-TP",
                    "recursive": false
                }],
                "recursive": false
            }
        ];

        var arr = _.filter(data, function(obj) {
            return _.some(obj.children, { name: ID_TO_FIND });
        });

        console.log(arr);
        res.json(arr);
        //res.json(filteredGoal);

    } catch (err) {
        console.log('\nError in Catch --\n', err)
    }
}


const getModules = async(req, res) => {
    try {
        let project_id = await getProjectID();
        console.log('project_id --', project_id[0].id);
        let id = project_id[0].id;

        let getModules = "/api/v3/projects/" + id + "/test-cycles?expand=descendants";
        let resData = await qtestGetMethod(getModules);
        //  console.log('resData --', resData);

        res.json(resData.data);
    } catch (err) {
        console.log('\nError in Catch --\n', err)
    }
}


const createModules = async(req, res) => {
    try {

        let resData = await createQtestModules();
        res.json(resData.data);
    } catch (err) {
        console.log('\nError in Catch --\n', err)
    }
}

async function createQtestModules() {

    let project_id = await getProjectID(); //id
    let id = project_id[0].id;

    let test = await getModuleDetails(config.qtest.root_module, id); // id, name, pid
    console.log('test --', test);

    let createModuleAPI = "/api/v3/projects/" + id + "/modules";

    let pramas1 = {
        "name": "New Qtest 1001",
        "parent_id": test[0].id,
        "description": "GES Testing 1"
    };

    let resData = await qtestPostMethod(createModuleAPI, pramas1); // id, name, pid

    let pramas2 = {
        "name": "New Sub 1001",
        "parent_id": resData.data.id,
        "description": "GES Testing 2"
    };

    let resData2 = await qtestPostMethod(createModuleAPI, pramas2); // id, name, pid

    let pramas3 = {
        "name": "New Sub 1001",
        "parent_id": resData2.data.id,
        "description": "GES Testing 3"
    };

    let resData3 = await qtestPostMethod(createModuleAPI, pramas3); // id, name, pid

    return resData;

}

/* Get Default Project ID */
async function getProjectID() {
    try {
        let projAPI = "/api/v3/projects"
        let resData = await qtestGetMethod(projAPI); //qtest GET Method
        let result = _.where(resData.data, { name: config.qtest.project_name }); // project name configured in config.js
        return result;


    } catch (err) {
        console.log('\nError in Catch --\n', err)
    }
}

/* Get Module Details */
async function getModuleDetails(module_name, project_id) {
    try {
        //let project_id = await getProjectID();

        let getModules = "/api/v3/projects/" + project_id + "/modules"; //?expand=descendants
        let resData = await qtestGetMethod(getModules);

        var result = _.where(resData.data, { name: module_name }); // project name configured in config.js
        return result;

    } catch (err) {
        console.log('\nError in Catch --\n', err)
    }
}


/* Axio Generic Function to call Qtest GET APIs*/
async function qtestGetMethod(url) {
    try {

        const qtestURL = config.qtest.baseURL + url
        console.log('URL --', qtestURL);

        const axiosConfig = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.qtest.access_token}`
        }
        const response = await axios.get(qtestURL, {
            headers: axiosConfig
        }, { httpsAgent })

        return response;

    } catch (err) {
        console.log('\nError in Catch --\n', err)
    }

}


/* Axio Generic Function to call Qtest POST APIs*/
async function qtestPostMethod(url, param) {
    try {

        const qtestURL = config.qtest.baseURL + url
        console.log('URL --', qtestURL);
        console.log('Param --', JSON.stringify(param));

        const axiosConfig = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${config.qtest.access_token}`
        }
        const response = await axios.post(qtestURL, JSON.stringify(param), {
            headers: axiosConfig
        }, { httpsAgent })

        return response;

    } catch (err) {
        console.log('\nPost Error in Catch --\n', err)
    }
}


module.exports = {
    getUsers,
    getProjects,
    getModules,
    createModules
}