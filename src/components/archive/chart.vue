<template>
    <div class="chart">
        <canvas ref="chart" :graphType="graphType" :data="data" :labels="labels" :colors="colors" :borderColors="borderColors"></canvas>
    </div>
</template>

<script>
    export default {
        name: "chart",
        data(){
            return{

            }
        },
        methods: {

        },
        mounted() {
            var location = this.$refs.chart;
            var ctx = location.getContext("2d");
            var labels = location.getAttribute('labels').split(",");
            var data = location.getAttribute('data').split(",");
            var colors = location.getAttribute('colors').split(",");
            var borders = location.getAttribute('borderColors').split(",");

            var chart = new Chart(ctx, {
                type: location.getAttribute('graphType'),
                data: {
                    labels: labels,
                    datasets: [{
                        label: '# of Votes',
                        data: data,
                        backgroundColor: colors,
                        //borderColor: borders,
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                stepSize: 100
                            }
                        }],
                        xAxes: [{
                            barPercentage: 0.5
                        }]
                    }
                }
            });
        },
        props : {
            title : {
                type: String,
                default: "Traffic Overview",
            },
            graphType : {
                type: String,
                default: "bar",
            },
            labels : {
                default: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            },
            data : {
                default: [1000, 500, 300, 800, 100, 800, 1500],
            },
            colors : {
                default: ["#FF6384", "#36A2EB", "#FFCE56","#4BC0C0", "#9966FF","#FF9F40", "#00ff9f"],
            },
            borderColors : {
                default: ["#FF6384", "#36A2EB", "#FFCE56","#4BC0C0", "#9966FF","#FF9F40", "#00ff9f"],
            },
        }
    }
</script>

<style scoped>

</style>