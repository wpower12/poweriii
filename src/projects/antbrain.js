import Experiment from './antbrain/gp_experiment.js';

var exp = new Experiment();

exp.run();
var cnv = document.getElementById('antcanvas');
exp.simulate_best(cnv);

