const data = [
    {
        group: "Tofu",
        variable: "Tofu",
        value: 100
    },
    {
        group: "Tofu",
        variable: "Kimchi",
        value: 80
    },
    {
        group: "Tofu",
        variable: "Beef",
        value: 30
    },
    {
        group: "Tofu",
        variable: "Egg",
        value: 55
    }, {
        group: "Tofu",
        variable: "Onion",
        value: 20

    }, {
        group: "Tofu",
        variable: "Scallion",
        value: 47

    }, {
        group: "Kimchi",
        variable: "Tofu",
        value: 90
    }, {
        group: "Kimchi",
        variable: "Kimchi",
        value: 100
    }, {
        group: "Kimchi",
        variable: "Beef",
        value: 78
    }, {
        group: "Kimchi",
        variable: "Egg",
        value: 25
    }, {
        group: "Kimchi",
        variable: "Onion",
        value: 60
    }, {
        group: "Kimchi",
        variable: "Scallion",
        value: 70
    }, {
        group: "Beef",
        variable: "Tofu",
        value: 30
    }, {
        group: "Beef",
        variable: "Kimchi",
        value: 78
    }, {
        group: "Beef",
        variable: "Beef",
        value: 100
    }, {
        group: "Beef",
        variable: "Egg",
        value: 25
    }, {
        group: "Beef",
        variable: "Onion",
        value: 40
    }, {
        group: "Beef",
        variable: "Scallion",
        value: 67
    }, {
        group: "Egg",
        variable: "Tofu",
        value: 55
    }, {
        group: "Egg",
        variable: "Kimchi",
        value: 20
    }, {
        group: "Egg",
        variable: "Beef",
        value: 25
    }, {
        group: "Egg",
        variable: "Egg",
        value: 100
    }, {
        group: "Egg",
        variable: "Onion",
        value: 8
    }, {
        group: "Egg",
        variable: "Scallion",
        value: 70
    }, {
        group: "Onion",
        variable: "Tofu",
        value: 20
    }, {
        group: "Onion",
        variable: "Kimchi",
        value: 60
    }, {
        group: "Onion",
        variable: "Beef",
        value: 40
    }, {
        group: "Onion",
        variable: "Egg",
        value: 8
    }, {
        group: "Onion",
        variable: "Onion",
        value: 100
    }, {
        group: "Onion",
        variable: "Scallion",
        value: 38
    }, {
        group: "Scallion",
        variable: "Tofu",
        value: 47
    }, {
        group: "Scallion",
        variable: "Kimchi",
        value: 70
    }, {
        group: "Scallion",
        variable: "Beef",
        value: 67
    }, {
        group: "Scallion",
        variable: "Egg",
        value: 70
    }, {
        group: "Scallion",
        variable: "Onion",
        value: 38
    }, {
        group: "Scallion",
        variable: "Scallion",
        value: 100
    }
];

const margin = {
        top: 100,
        right: 100,
        bottom: 100,
        left: 100
    },
    width = 600 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;


const svg = d3.select(".d3-container").append("svg").attr("width", width + margin.left + margin.right).attr("height", height + margin.top + margin.bottom).append("g").attr("transform", `translate(${

    margin.left
},${
    margin.top
})`);

const myGroups = [
    "Tofu",
    "Kimchi",
    "Beef",
    "Egg",
    "Onion",
    "Scallion",
]
const myVars = [
    "Tofu",
    "Kimchi",
    "Beef",
    "Egg",
    "Onion",
    "Scallion",
]

var mouseover = function (d) {
    d3.select(this).style("stroke", "#302c23").style("opacity", 1)
}

var mouseleave = function (d) {
    d3.select(this).style("stroke", "none").style("opacity", 1)
}

const x = d3.scaleBand().range([0, width]).domain(myGroups).padding(0.01);
svg.append("g").attr("transform", `translate(0, ${height})`).call(d3.axisBottom(x))

const y = d3.scaleBand().range([height, 0]).domain(myVars).padding(0.01);
svg.append("g").call(d3.axisLeft(y));

const myColor = d3.scaleLinear().range(["white", "#db965d"]).domain([1, 100])

svg.selectAll().data(data, function (d) {
    return d.group + ':' + d.variable;
}).join("rect").attr("x", function (d) {
    return x(d.group)
}).attr("y", function (d) {
    return y(d.variable)
}).attr("width", x.bandwidth()).attr("height", y.bandwidth()).style("fill", function (d) {
    return myColor(d.value)
}).style("opacity", 0.4).on("mouseover", mouseover).on("mouseleave", mouseleave)
