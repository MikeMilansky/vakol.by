import { Component, ViewEncapsulation } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3shape from 'd3-shape';

@Component({
	selector: 'stats',
	templateUrl: 'stats.component.html',
	styleUrls: ['./stats.component.scss'],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class StatsComponent {
	constructor() {

	}

	ngOnInit() {
		this.initChart();
	}

	public initChart() {
		var width = 250,
			height = 250,
			radius = Math.min(width, height) / 2,
			innerRadius = 0.2 * radius;

		var pie = d3shape.pie()
			.sort(null)
			.value(function(d: any) { return d.width; });

		// var tip = d3tip.tip()
		// 	.attr('class', 'd3-tip')
		// 	.offset([0, 0])
		// 	.html(function(d) {
		// 		return d.data.label + ": <span style='color:orangered'>" + d.data.score + "</span>";
		// 	});

		var arc: any = d3shape.arc()
			.innerRadius(innerRadius)
			.outerRadius(function (d: any) {
				return (radius - innerRadius) * (d.data.score / 100.0) + innerRadius;
			});

		// var outlineArc = d3shape.arc()
		// 	.innerRadius(innerRadius)
		// 	.outerRadius(radius);

		var svg = d3.select("#stats").append("svg")
			.attr("width", width)
			.attr("height", height)
			.append("g")
			.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

		// svg.call(tip);

		var data: any = [
			{
				"id": "FIS",
				"order": 1.1,
				"score": 59,
				"weight": 0.5,
				"color": "#9E0041",
				"label": "Fisheries"
			},
			{
				"id": "NP",
				"order": 3,
				"score": 60,
				"weight": 1,
				"color": "#F47245",
				"label": "Natural Products"
			},
			{
				"id": "CP",
				"order": 5,
				"score": 70,
				"weight": 1,
				"color": "#FEC574",
				"label": "Coastal Protection"
			},
			{
				"id": "LIV",
				"order": 7.1,
				"score": 77,
				"weight": 0.5,
				"color": "#EAF195",
				"label": "Livelihoods"
			},
			{
				"id": "ECO",
				"order": 7.3,
				"score": 88,
				"weight": 0.5,
				"color": "#C7E89E",
				"label": "Economies"
			},
			{
				"id": "ICO",
				"order": 8.1,
				"score": 60,
				"weight": 0.5,
				"color": "#9CD6A4",
				"label": "Iconic Species"
			},

			{
				"id": "CW",
				"order": 9,
				"score": 71,
				"weight": 1,
				"color": "#4D9DB4",
				"label": "Clean Waters"
			},
			{
				"id": "HAB",
				"order": 10.1,
				"score": 88,
				"weight": 0.5,
				"color": "#4776B4",
				"label": "Habitats"
			},
			{
				"id": "SPP",
				"order": 10.3,
				"score": 83,
				"weight": 0.5,
				"color": "#5E4EA1",
				"label": "Species"
			}
		];

		data.forEach(function(d: any) {
			d.id     =  d.id;
			d.order  = +d.order;
			d.color  =  d.color;
			d.weight = +d.weight;
			d.score  = +d.score;
			d.width  = +d.weight;
			d.label  =  d.label;
		});
		// for (var i = 0; i < data.score; i++) { console.log(data[i].id) }

		var path = svg.selectAll(".solidArc")
			.data(pie(data))
			.enter().append("path")
			.attr("fill", function(d: any) { return d.data.color; })
			.attr("class", "solidArc")
			.attr("stroke", "gray")
			.attr("d", arc);
			// .on('mouseover', tip.show)
			// .on('mouseout', tip.hide);

		var outerPath = svg.selectAll(".outlineArc")
			.data(pie(data))
			.enter().append("path")
			.attr("fill", "none")
			.attr("stroke", "gray")
			.attr("class", "outlineArc");
			// .attr("d", outlineArc);


		// calculate the weighted mean score
		var score =
			data.reduce(function(a, b) {
				//console.log('a:' + a + ', b.score: ' + b.score + ', b.weight: ' + b.weight);
				return a + (b.score * b.weight);
			}, 0) /
			data.reduce(function(a, b) {
				return a + b.weight;
			}, 0);

		svg.append("svg:text")
			.attr("class", "aster-score")
			.attr("dy", ".35em")
			.attr("text-anchor", "middle") // text-align: right
			.text(Math.round(score));

	}
}
