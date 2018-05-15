console.log("hello");

(function(w,d,s,g,js,fs){
  g=w.gapi||(w.gapi={});g.analytics={q:[],ready:function(f){this.q.push(f);}};
  js=d.createElement(s);fs=d.getElementsByTagName(s)[0];
  js.src='https://apis.google.com/js/platform.js';
  fs.parentNode.insertBefore(js,fs);js.onload=function(){g.load('analytics');};
}(window,document,'script'));


gapi.analytics.ready(function() {

//Auth
  gapi.analytics.auth.authorize({
    container: 'embed-api-auth-container',
    clientid: '759238990855-igjcd55mdvrui12ot1dru4v0saksb3uf.apps.googleusercontent.com'
  });

//VIEWSELECTOR - for multiple account

var viewSelector1 = new gapi.analytics.ViewSelector({
  container: 'view-selector-1-container'
});

viewSelector1.execute();




//DATE CHART
var dataChart1 = new gapi.analytics.googleCharts.DataChart({
  query: {
    metrics: 'ga:sessions',
    dimensions: 'ga:date',
    'start-date': '7daysAgo',
    'end-date': 'yesterday',
  },

  chart: {
    container: 'chart-1-container',
    type: 'LINE',
    options: {
      width: '100%'
    }
  }
});


var dataChart2 = new gapi.analytics.googleCharts.DataChart({
  query: {
    metrics: 'ga:sessions',
    dimensions: 'ga:country',
    'start-date': '7daysAgo',
    'end-date': 'yesterday',
    'max-results': 6,
    sort: '-ga:sessions'
  },
  chart: {
    container: 'chart-2-container',
    type: 'PIE',
    options: {
      width: '100%',
      pieHole: 4/9
    }
  }
});

var dataChart3 = new gapi.analytics.googleCharts.DataChart({
  query: {
    'dimensions': 'ga:source',
    'metrics': 'ga:sessions',
    'start-date': '7daysAgo',
    'end-date': 'yesterday',
    'sort': '-ga:sessions',
    'max-results': '6'
  },
  chart: {
    type: 'TABLE',
    container: 'chart-3-container',
    options: {
      width: '100%'
    }
  }
});




/**
 * Update the first dataChart when the first view selecter is changed.
 */
viewSelector1.on('change', function(ids) {
  dataChart1.set({query: {ids: ids}}).execute();
});

/**
 * Update the second dataChart when the second view selecter is changed.
 */
viewSelector1.on('change', function(ids) {
  dataChart2.set({query: {ids: ids}}).execute();
});

viewSelector1.on('change', function(ids) {
  dataChart3.set({query: {ids: ids}}).execute();
});





});
