
var margin = {top: 20, right: 30, bottom: 40, left: 90},
  width = 460 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("bar")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

const url = "samples.json"
d3.json(url).then(function(data) {
    console.log(data)
});

var x = d3.scaleLinear()
    .domain([0, 150])
    .range([ 0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))
    .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");


var y = d3.scaleBand()
    .range([ 0, height ])
    .domain(data.map(function(d) { return d.samples.otu_ids; }))
    .padding(.1);

svg.append("g")
    .call(d3.axisLeft(y))

 svg.selectAll("bar")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", function(d){return x (d.sample_values);})
    .attr("y", function(d) { return y(d.otu_ids); })
    .attr("width", x.bandwidth())
    .attr("height", y.bandwidth() )
    .attr("fill", "#69b3a2")

var margin = {top: 10, right: 20, bottom: 30, left: 50},
    width = 500 - margin.left - margin.right,
    height = 420 - margin.top - margin.bottom;

    var svg = d3.select("bubble")
    .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");
            var x = d3.scaleLinear()
            .domain([0, 3500])
            .range([ 0, width ]);
      svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));
       
      var y = d3.scaleLinear()
            .domain([0, 200])
            .range([ height, 0]);
      svg.append("g")
            .call(d3.axisLeft(y));
        
         
      
        
      
     svg.append('g')
        .selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return x(d.otu_ids); } )
        .attr("cy", function (d) { return y(d.sample_values); } )
        .style("opacity", "0.7")
        .attr("stroke", "black")
  