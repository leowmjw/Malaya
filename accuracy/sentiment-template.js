option = {
    xAxis: {
        type: 'category',
        axisLabel: {
            interval: 0,
            rotate: 30
        },
        data: ['bahdanau','fast-text-char', 'luong', 'multinomial',
        'self-attention', 'xgboost', 'BERT']
    },
    yAxis: {
        type: 'value',
        min:0.75,
        max:0.82
    },
    backgroundColor:'rgb(252,252,252)',
    series: [{
        data: [0.79, 0.76, 0.79, 0.79, 0.78, 0.80, 0.82],
        type: 'bar',
        label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
    }]
};
