

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

var dataChartSessions = new gapi.analytics.googleCharts.DataChart({
  query: {
    metrics: 'ga:sessions',
    dimensions: 'ga:date',
    'start-date': '14daysAgo',
    'end-date': '7daysAgo',
  },

  chart: {
    container: 'chart-sessions-container',
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

var dataChartCountry = new gapi.analytics.googleCharts.DataChart({
  query: {
    metrics: 'ga:sessions',
    dimensions: 'ga:country',
    'start-date': '14daysAgo',
    'end-date': '7daysAgo',
    'max-results': 6,
    sort: '-ga:sessions'
  },
  chart: {
    container: 'chart-country-container',
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

//timeline chart
var breakdownChart = new gapi.analytics.googleCharts.DataChart({
  query: {
    'dimensions': 'ga:date',
    'metrics': 'ga:sessions',
    'start-date': '7daysAgo',
    'end-date': 'yesterday'
  },
  chart: {
    type: 'LINE',
    container: 'breakdown-chart-container',
    options: {
      width: '100%'
    }
  }
});
var mainChartRowClickListener;


var dataChartSource = new gapi.analytics.googleCharts.DataChart({
  query: {
    'dimensions': 'ga:source',
    'metrics': 'ga:sessions',
    'start-date': '14daysAgo',
    'end-date': '7daysAgo',
    'sort': '-ga:sessions',
    'max-results': '6'
  },
  chart: {
    type: 'TABLE',
    container: 'chart-source-container',
    options: {
      width: '100%'
    }
  }
});

var breakdownChart2 = new gapi.analytics.googleCharts.DataChart({
  query: {
    'dimensions': 'ga:date',
    'metrics': 'ga:sessions',
    'start-date': '14daysAgo',
    'end-date': '7daysAgo'
  },
  chart: {
    type: 'LINE',
    container: 'breakdown-chart-container-2',
    options: {
      width: '100%'
    }
  }
});
var mainChartRowClickListener2;



var dataChart4 = new gapi.analytics.googleCharts.DataChart({
  query: {
    'dimensions': 'ga:pagePath',
    'metrics': 'ga:pageviews',
    'start-date': '7daysAgo',
    'end-date': 'yesterday',
    'sort': '-ga:pageviews',
    'max-results': '6'
  },
  chart: {
    type: 'TABLE',
    container: 'chart-4-container',
    options: {
      width: '100%'
    }
  }
});

var dataChartPage = new gapi.analytics.googleCharts.DataChart({
  query: {
    'dimensions': 'ga:pagePath',
    'metrics': 'ga:pageviews',
    'start-date': '14daysAgo',
    'end-date': '7daysAgo',
    'sort': '-ga:pageviews',
    'max-results': '6'
  },
  chart: {
    type: 'TABLE',
    container: 'chart-page-container',
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

viewSelector1.on('change', function(ids) {
  dataChart2.set({query: {ids: ids}}).execute();
});

// viewSelector1.on('change', function(ids) {
//   dataChart3.set({query: {ids: ids}}).execute();
// });

viewSelector1.on('change', function(ids) {
  dataChart4.set({query: {ids: ids}}).execute();
});

viewSelector1.on('change', function(ids) {
  dataChartSessions.set({query: {ids: ids}}).execute();
});

viewSelector1.on('change', function(ids) {
  dataChartCountry.set({query: {ids: ids}}).execute();
});

// viewSelector1.on('change', function(ids) {
//   dataChartSource.set({query: {ids: ids}}).execute();
// });

viewSelector1.on('change', function(ids) {
  dataChartPage.set({query: {ids: ids}}).execute();
});

//new viewSelector
viewSelector1.on('change', function(ids) {
  var options = {query: {ids: ids}};

  // Clean up any event listeners registered on the main chart before
  // rendering a new one.
  if (mainChartRowClickListener) {
    google.visualization.events.removeListener(mainChartRowClickListener);
  }

  dataChart3.set(options).execute();
  breakdownChart.set(options);

  // Only render the breakdown chart if a browser filter has been set.
  if (breakdownChart.get().query.filters) breakdownChart.execute();
});


/**
 * Each time the main chart is rendered, add an event listener to it so
 * that when the user clicks on a row, the line chart is updated with
 * the data from the browser in the clicked row.
 */
dataChart3.on('success', function(response) {

  var chart = response.chart;
  var dataTable = response.dataTable;

  // Store a reference to this listener so it can be cleaned up later.
  mainChartRowClickListener = google.visualization.events
      .addListener(chart, 'select', function(event) {

    // When you unselect a row, the "select" event still fires
    // but the selection is empty. Ignore that case.
    if (!chart.getSelection().length) return;

    var row =  chart.getSelection()[0].row;
    var browser =  dataTable.getValue(row, 0);
    var options = {
      query: {
        filters: 'ga:source==' + browser
      },
      chart: {
        options: {
          title: browser
        }
      }
    };

    breakdownChart.set(options).execute();
  });
});


viewSelector1.on('change', function(ids) {
  var options = {query: {ids: ids}};

  // Clean up any event listeners registered on the main chart before
  // rendering a new one.
  if (mainChartRowClickListener2) {
    google.visualization.events.removeListener(mainChartRowClickListener2);
  }

  dataChartSource.set(options).execute();
  breakdownChart2.set(options);

  // Only render the breakdown chart if a browser filter has been set.
  if (breakdownChart2.get().query.filters) breakdownChart2.execute();
});


/**
 * Each time the main chart is rendered, add an event listener to it so
 * that when the user clicks on a row, the line chart is updated with
 * the data from the browser in the clicked row.
 */
dataChartSource.on('success', function(response) {

  var chart = response.chart;
  var dataTable = response.dataTable;

  // Store a reference to this listener so it can be cleaned up later.
  mainChartRowClickListener2 = google.visualization.events
      .addListener(chart, 'select', function(event) {

    // When you unselect a row, the "select" event still fires
    // but the selection is empty. Ignore that case.
    if (!chart.getSelection().length) return;

    var row =  chart.getSelection()[0].row;
    var browser =  dataTable.getValue(row, 0);
    var options = {
      query: {
        filters: 'ga:source==' + browser
      },
      chart: {
        options: {
          title: browser
        }
      }
    };

    breakdownChart2.set(options).execute();
  });
});


});


