let today = "http://www.poptens.com/wp-content/uploads/2012/06/fix-date.jpg";

let references = [ 
  { // 24 FEB -- TWIN PEAKS
    cond : "moment().month() == 1 && moment().date() == 24",
    src  : "http://i.imgur.com/P3zirTt.jpg"
  },
  { // 3 OCT -- MEAN GIRLS
    cond : "moment().month() == 9 && moment().date() == 3", 
    src  : "https://media.giphy.com/media/l9YGE1phK6Sk0/giphy.gif" 
  },
  { // 20 Thurs -- SIMPSONS 
    cond : "moment().day() == 4 && moment().date() == 20",
	  src  : "http://i0.kym-cdn.com/entries/icons/original/000/022/767/7gC3Knz.jpg"
  },
  { // 06 MAR -- SPONGEBOB SQUAREPANTS
	  cond : "moment().month == 2 && moment().date == 6",
	  src : "https://i.redditmedia.com/XWw6eV8IxIvgO4XfIbq0_ZcUMMYmbfoDv0vHkNe50xE.png"
  },
];

$( document ).ready(function() {
  var any_matches = false;
	for (i=0; i<references.length; i++) {
		if (eval(references[i].cond)) {
			$("#today").attr("src",references[i].src);
      any_matches = true;
		}
	}
  if (!any_matches) {
      $("#today").attr("src",today);
  } 
});

