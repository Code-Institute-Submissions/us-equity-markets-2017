// File & Data Loading

queue()
    .defer(d3.csv, "data/Equities.csv")
    .await(makeGraphs);

function makeGraphs(error, equityData) {
    var ndx = crossfilter(equityData);

    equityData.forEach(function(d) {
        d.avgvol = parseInt(d.avgvol);
        d.price = parseInt(d["price"]);
    })

    show_industry_selector(ndx);
    show_equities_traded(ndx);
    show_marketcap_sector(ndx);
    show_marketcap_country(ndx);
    show_avgvol_sector(ndx);
    show_avgvol_country(ndx);
    show_sector_balance(ndx);
    show_price_marketcap(ndx);

    dc.renderAll();
}

// Drop Down Selector

function show_industry_selector(ndx) {
    dim = ndx.dimension(dc.pluck('industry'));
    group = dim.group()

    dc.selectMenu("#industry-selector")
        .dimension(dim)
        .group(group);
}

// Number of Equities by Sector BarChart

function show_sector_balance(ndx) {
    var dim = ndx.dimension(dc.pluck('sector'));
    var group = dim.group();

    dc.barChart("#sector-balance")
        .width(1700)
        .height(275)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .yAxis().ticks(10);
}

// Market Capitalisation by Sector PieChart

function show_marketcap_sector(ndx) {
    var sector_dim = ndx.dimension(dc.pluck('sector'));
    var marketcap_per_sector = sector_dim.group().reduceSum(dc.pluck('marketcap'));

    dc.pieChart('#marketcap-sector')
        .height(300)
        .radius(150)
        .transitionDuration(1500)
        .dimension(sector_dim)
        .group(marketcap_per_sector);
}

// Market Capitalisation by Country PieChart

function show_marketcap_country(ndx) {
    var country_dim = ndx.dimension(dc.pluck('country'));
    var marketcap_per_country = country_dim.group().reduceSum(dc.pluck('marketcap'));

    dc.pieChart('#marketcap-country')
        .height(300)
        .radius(150)
        .transitionDuration(1500)
        .dimension(country_dim)
        .group(marketcap_per_country);
}

// Average Daily Volume by Sector PieChart

function show_avgvol_sector(ndx) {
    var sector_dim = ndx.dimension(dc.pluck('sector'));
    var avgvol_per_sector = sector_dim.group().reduceSum(dc.pluck('avgvol'));

    dc.pieChart('#avgvol-sector')
        .height(300)
        .radius(150)
        .transitionDuration(1500)
        .dimension(sector_dim)
        .group(avgvol_per_sector);
}

// Average Daily Volume by Country PieChart

function show_avgvol_country(ndx) {
    var country_dim = ndx.dimension(dc.pluck('country'));
    var avgvol_per_country = country_dim.group().reduceSum(dc.pluck('avgvol'));

    dc.pieChart('#avgvol-country')
        .height(300)
        .radius(150)
        .transitionDuration(1500)
        .dimension(country_dim)
        .group(avgvol_per_country);
}

// Average Volume per Equity by Sector BarChart

function show_equities_traded(ndx) {
    var dim = ndx.dimension(dc.pluck('sector'));

    function add_item(p, v) {
        p.count++;
        p.total += v.avgvol;
        p.average = p.total / p.count;
        return p;
    }

    function remove_item(p, v) {
        p.count--;
        if (p.count == 0) {
            p.total = 0;
            p.average = 0;
        }
        else {
            p.total -= v.avgvol;
            p.average = p.total / p.count;
        }
        return p;
    }

    function initialise() {
        return { count: 0, total: 0, average: 0 };
    }

    var averageEquityBySector = dim.group().reduce(add_item, remove_item, initialise);

    dc.barChart("#equities-traded")
        .width(1700)
        .height(275)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(averageEquityBySector)
        .valueAccessor(function(d) {
            return Math.round(d.value.average);
        })
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .elasticY(true)
        .yAxis().ticks(10);
}

// Average Volume correlation to Price per Equity ScatterPlot

function show_price_marketcap(ndx) {
    var sectorColors = d3.scale.ordinal()
        .domain(["Basic Materials", "Conglomerates", "Consumer Goods", "Financial", "Healthcare", "Industrial Goods", "Services", "Technology", "Utilities"])
        .range(["cornflowerblue", "lightskyblue", "lightblue", "tomato", "lightsalmon", "orange", "steelblue", "lightyellow", "papayawhip"]);

    var pDim = ndx.dimension(dc.pluck("price"));
    var priceDim = ndx.dimension(function(d) {
        return [d.price, d.avgvol, d.sector];
    });
    var priceAvgvolGroup = priceDim.group();

    var minPrice = pDim.bottom(1)[0].price;
    var maxPrice = pDim.top(1)[0].price;

    dc.scatterPlot("#price-avgvol")
        .width(1700)
        .height(275)
        .x(d3.scale.linear().domain([minPrice, maxPrice]))
        .brushOn(false)
        .symbolSize(8)
        .clipPadding(10)
        .xAxisLabel("Price")
        .title(function(d) {
            return d.key[2] + ", Average Volume, " + d.key[1];
        })
        .colorAccessor(function(d) {
            return d.key[2];
        })
        .colors(sectorColors)
        .dimension(priceDim)
        .group(priceAvgvolGroup)
        .margins({ top: 10, right: 50, bottom: 50, left: 75 });
};
