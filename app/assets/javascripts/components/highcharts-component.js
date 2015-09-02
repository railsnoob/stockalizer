App.HighChartsComponent = Ember.Component.extend(App.HighchartsThemeMixin, {
	classNames:   [ 'highcharts-wrapper' ],
	content:      undefined,
	chartOptions: undefined,
	chart:        null,
  
  buildOptions: Ember.computed('content.@each.isLoaded','chartOptions', function() {
    var chartContent, chartOptions, defaults;

	  chartOptions = this.getWithDefault('chartOptions', {});

    chartContent = this.get('content.length') ? this.get('content') : [
      {
        id: 'noData',
        data: [1,2,3],
        color: '#aaaaaa'
      }
    ];
    defaults = {
      series: chartContent
    };
    return Ember.merge(defaults, chartOptions);
  }),
  
  _renderChart: (function() {
    this.drawLater();
    this.buildTheme();
  }).on('didInsertElement'),

  variablesChanged: Ember.observer('content.@each.isLoaded', 'chartOptions','content','buildOptions' ,function() {
    Ember.run.once(this, 'contentDidChange');
  }).on('init'),

  contentDidChange:  function() {
    var chart;
    if (!(this.get('content') && this.get('chart'))) {
      return;
    }
	  var boptions = this.get('buildOptions').title.text;

      chart = this.get('chart');
    return this.get('content').forEach(function(series, idx) {
      var _ref;
      if ((_ref = chart.get('noData')) != null) {
        _ref.remove();
      }
	  chart.setTitle({text:boptions});
      if (chart.series[idx]) {
        return chart.series[idx].setData(series.data);
      } else {
        return chart.addSeries(series);
      }
    });
	  }.observes('content.@each.isLoaded')
												 ,
  
  drawLater: function() {
    Ember.run.scheduleOnce('afterRender', this, 'draw');
  },
  
  draw: function() {
    var options;
    options = this.get('buildOptions');
    this.set('chart', this.$().highcharts(options).highcharts());
  },
  
  _destroyChart: (function() {
    this._super();
    this.get('chart').destroy();
  }).on('willDestroyElement')
});
