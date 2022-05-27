importScripts('grid.js');

onmessage = function(message) {
  if (message.data.type === 'COMPUTE') {
    createModule().then(({computeLkhdWeb}) => {
      const N0 =  message.data.payload.N0;
      const dt =  message.data.payload.dt;
      const h = message.data.payload.hh;
      const flag_age = message.data.payload.flagAge;
      const lkhd_cutoff_ratio = message.data.payload.lkhdCutoffRatio;
      const n_sub_steps = message.data.payload.nSubSteps;
      const sel = message.data.payload.sel;
      const file_str1 = message.data.payload.fileStr1;
      const counts = message.data.payload.counts;
      const res = computeLkhdWeb(N0, dt, h, flag_age, lkhd_cutoff_ratio, n_sub_steps, counts[0], counts[1], counts[2], sel, false);
      const summary = [res.get(0), res.get(1), res.get(2), res.get(3)]
      var res1 = [];
      for (var i = 4; i < res.size(); i++) {
        res1.push(res.get(i));
      }
      postMessage({
          type: 'RESULT',
          payload: {
            summary: summary,
            res: res1,
          }
      });
    })   
  }
};

/*
if (message.data.type === 'CALCULATE') {
  createModule().then(({KBE}) => {
    const N0 = 2500;
    const dt = 0.0001;
    const h = 0.5;
    const flag_age = 0;
    const lkhd_cutoff_ratio = 5.0;
    const n_sub_steps = 20;
    const grid_option = 2;
    const kbe = new KBE(N0, dt, h, flag_age, lkhd_cutoff_ratio, n_sub_steps, grid_option);
    const sel = message.data.payload.sel;
    const root = kbe.evolve_test(sel);
    console.log(root);
    var rootSize = root.size();
    console.log("size=", rootSize);
    console.log("item 0=", root.get(0));
    console.log("item 1=", root.get(1));
    res = [root.get(0), root.get(1)];
    console.log(res);
    postMessage({
        type: 'RESULT',
        payload: {
            res: res,
        }
    });
  });

  */