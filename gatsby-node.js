const axios = require('axios');

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions;

  // fetch raw data from the randomuser api
  const fetchNvData = () =>
    axios.get(
      `https://content-sheets.googleapis.com/v4/spreadsheets/18tLUhGC8iBlCk6ZLHk9PVoC-fr6oK_A7x4DOk7BCj2k/values/sheet1?key=AIzaSyAEBrpd_6C5WITKUWMA2UV4VbcYC3ym1dE`
    );
  // await for results
  const res = await fetchNvData();
  console.log(res);

  // map into these results and create nodes
  let arrayOfItems = res.data.valueRanges[0].values;

  let rows = [];
  for (let i = 1; i < arrayOfItems.length; i++) {
    let rowObject = {};
    for (var j = 0; j < arrayOfItems[i].length; j++) {
      rowObject[arrayOfItems[0][j]] = arrayOfItems[i][j];
    }
    rows.push(rowObject);
  }

  // Create your node object
  res.data.results.map((item, i) => {
    const itemNode = {
      id: createNodeId(`${i}`),
      parent: `__SOURCE__`,
      internal: {
        type: `gSheetsData`, // name of the graphQL query --> allItem {}
        contentDigest: createContentDigest(item),
      },
      children: [],
      nvDate: item.nvDate,
      nvCases: item.nvCases,
      nvDeaths: item.nvDeaths,
      ccCases: item.ccCases,
      ccDeaths: item.ccDeaths,
    };

    // Create node with the gatsby createNode() API
    createNode(itemNode);
  });
  resolve();
};
return;
