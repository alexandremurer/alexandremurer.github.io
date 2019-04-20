ol.proj.get("EPSG:102748").setExtent([-122.439183, 47.422011, -122.051902, 47.783427]);
var wms_layers = [];
var format_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0 = new ol.format.GeoJSON();
var features_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0 = format_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0.readFeatures(json_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:102748'});
var jsonSource_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0.addFeatures(features_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0);var lyr_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0, 
                style: style_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0,
    title: 'ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent<br />\
    <img src="styles/legend/ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0_0.png" />  402.0000 - 1021.6000 <br />\
    <img src="styles/legend/ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0_1.png" />  1021.6000 - 1641.2000 <br />\
    <img src="styles/legend/ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0_2.png" />  1641.2000 - 2260.8000 <br />\
    <img src="styles/legend/ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0_3.png" />  2260.8000 - 2880.4000 <br />\
    <img src="styles/legend/ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0_4.png" />  2880.4000 - 3500.0000 <br />'
        });var format_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1 = new ol.format.GeoJSON();
var features_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1 = format_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1.readFeatures(json_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:102748'});
var jsonSource_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1.addFeatures(features_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1);var lyr_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1, 
                style: style_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1,
    title: 'ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent<br />\
    <img src="styles/legend/ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1_0.png" />  14.4000 - 21.5200 <br />\
    <img src="styles/legend/ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1_1.png" />  21.5200 - 28.6400 <br />\
    <img src="styles/legend/ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1_2.png" />  28.6400 - 35.7600 <br />\
    <img src="styles/legend/ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1_3.png" />  35.7600 - 42.8800 <br />\
    <img src="styles/legend/ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1_4.png" />  42.8800 - 50.0000 <br />'
        });var format_Median_Household_Income_2 = new ol.format.GeoJSON();
var features_Median_Household_Income_2 = format_Median_Household_Income_2.readFeatures(json_Median_Household_Income_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:102748'});
var jsonSource_Median_Household_Income_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Median_Household_Income_2.addFeatures(features_Median_Household_Income_2);var lyr_Median_Household_Income_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Median_Household_Income_2, 
                style: style_Median_Household_Income_2,
    title: 'Median_Household_Income<br />\
    <img src="styles/legend/Median_Household_Income_2_0.png" />  10865 - 25554 <br />\
    <img src="styles/legend/Median_Household_Income_2_1.png" />  25554 - 40242 <br />\
    <img src="styles/legend/Median_Household_Income_2_2.png" />  40242 - 54931 <br />\
    <img src="styles/legend/Median_Household_Income_2_3.png" />  54931 - 69620 <br />\
    <img src="styles/legend/Median_Household_Income_2_4.png" />  69620 - 84308 <br />\
    <img src="styles/legend/Median_Household_Income_2_5.png" />  84308 - 98997 <br />\
    <img src="styles/legend/Median_Household_Income_2_6.png" />  98997 - 113686 <br />\
    <img src="styles/legend/Median_Household_Income_2_7.png" />  113686 - 128375 <br />\
    <img src="styles/legend/Median_Household_Income_2_8.png" />  128375 - 143063 <br />\
    <img src="styles/legend/Median_Household_Income_2_9.png" />  143063 - 157752 <br />\
    <img src="styles/legend/Median_Household_Income_2_10.png" />  157752 - 172441 <br />\
    <img src="styles/legend/Median_Household_Income_2_11.png" />  172441 - 187129 <br />\
    <img src="styles/legend/Median_Household_Income_2_12.png" />  187129 - 201818 <br />'
        });

lyr_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0.setVisible(true);lyr_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1.setVisible(true);lyr_Median_Household_Income_2.setVisible(true);
var layersList = [lyr_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0,lyr_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1,lyr_Median_Household_Income_2];
lyr_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEO_ID_TRT': 'GEO_ID_TRT', 'TRACT_LBL': 'TRACT_LBL', 'E25058232': 'E25058232', 'M25058232': 'M25058232', });
lyr_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEO_ID_TRT': 'GEO_ID_TRT', 'TRACT_LBL': 'TRACT_LBL', 'E25071112': 'E25071112', 'M25071112': 'M25071112', });
lyr_Median_Household_Income_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GEO_ID_TRT': 'GEO_ID_TRT', 'MHHI1': 'MHHI1', });
lyr_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'GEO_ID_TRT': 'TextEdit', 'TRACT_LBL': 'TextEdit', 'E25058232': 'TextEdit', 'M25058232': 'TextEdit', });
lyr_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'GEO_ID_TRT': 'TextEdit', 'TRACT_LBL': 'TextEdit', 'E25071112': 'TextEdit', 'M25071112': 'TextEdit', });
lyr_Median_Household_Income_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'GEO_ID_TRT': 'TextEdit', 'MHHI1': 'TextEdit', });
lyr_ACS_Median_Contract_Rent_Dollars__acs_b25058_mediancontractrent_0.set('fieldLabels', {'OBJECTID': 'no label', 'GEO_ID_TRT': 'no label', 'TRACT_LBL': 'no label', 'E25058232': 'no label', 'M25058232': 'no label', });
lyr_ACS_Median_Gross_Rent_As_A_Percentage_Of_Household_Income_In_The_Past_12_Months_Dollars__acs_b25071_mediangrossrentpercent_1.set('fieldLabels', {'OBJECTID': 'no label', 'GEO_ID_TRT': 'no label', 'TRACT_LBL': 'no label', 'E25071112': 'no label', 'M25071112': 'no label', });
lyr_Median_Household_Income_2.set('fieldLabels', {'OBJECTID': 'no label', 'GEO_ID_TRT': 'no label', 'MHHI1': 'no label', });
lyr_Median_Household_Income_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});