var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_TRATAMIENTO2020_2 = new ol.format.GeoJSON();
var features_TRATAMIENTO2020_2 = format_TRATAMIENTO2020_2.readFeatures(json_TRATAMIENTO2020_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TRATAMIENTO2020_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TRATAMIENTO2020_2.addFeatures(features_TRATAMIENTO2020_2);
var lyr_TRATAMIENTO2020_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TRATAMIENTO2020_2, 
                style: style_TRATAMIENTO2020_2,
                interactive: false,
                title: '<img src="styles/legend/TRATAMIENTO2020_2.png" /> TRATAMIENTO 2020'
            });
var format_ESTACIONESCONTROL3JULIO_3 = new ol.format.GeoJSON();
var features_ESTACIONESCONTROL3JULIO_3 = format_ESTACIONESCONTROL3JULIO_3.readFeatures(json_ESTACIONESCONTROL3JULIO_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESTACIONESCONTROL3JULIO_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTACIONESCONTROL3JULIO_3.addFeatures(features_ESTACIONESCONTROL3JULIO_3);
var lyr_ESTACIONESCONTROL3JULIO_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ESTACIONESCONTROL3JULIO_3, 
                style: style_ESTACIONESCONTROL3JULIO_3,
                interactive: true,
    title: 'ESTACIONES CONTROL 3 JULIO<br />\
    <img src="styles/legend/ESTACIONESCONTROL3JULIO_3_0.png" /> 0 - 1<br />\
    <img src="styles/legend/ESTACIONESCONTROL3JULIO_3_1.png" /> 1 - 2<br />\
    <img src="styles/legend/ESTACIONESCONTROL3JULIO_3_2.png" /> 2 - 3<br />\
    <img src="styles/legend/ESTACIONESCONTROL3JULIO_3_3.png" /> 3 - 4<br />\
    <img src="styles/legend/ESTACIONESCONTROL3JULIO_3_4.png" /> >4<br />'
        });
var format_LIMITESCATASTRAL_4 = new ol.format.GeoJSON();
var features_LIMITESCATASTRAL_4 = format_LIMITESCATASTRAL_4.readFeatures(json_LIMITESCATASTRAL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LIMITESCATASTRAL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LIMITESCATASTRAL_4.addFeatures(features_LIMITESCATASTRAL_4);
var lyr_LIMITESCATASTRAL_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LIMITESCATASTRAL_4, 
                style: style_LIMITESCATASTRAL_4,
                interactive: true,
                title: '<img src="styles/legend/LIMITESCATASTRAL_4.png" /> LIMITES CATASTRAL'
            });
var format_ZONAEXCLUSION_5 = new ol.format.GeoJSON();
var features_ZONAEXCLUSION_5 = format_ZONAEXCLUSION_5.readFeatures(json_ZONAEXCLUSION_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZONAEXCLUSION_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZONAEXCLUSION_5.addFeatures(features_ZONAEXCLUSION_5);
var lyr_ZONAEXCLUSION_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ZONAEXCLUSION_5, 
                style: style_ZONAEXCLUSION_5,
                interactive: true,
                title: '<img src="styles/legend/ZONAEXCLUSION_5.png" /> ZONA EXCLUSION'
            });
var format_POLIGONOSDOP_6 = new ol.format.GeoJSON();
var features_POLIGONOSDOP_6 = format_POLIGONOSDOP_6.readFeatures(json_POLIGONOSDOP_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIGONOSDOP_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIGONOSDOP_6.addFeatures(features_POLIGONOSDOP_6);
var lyr_POLIGONOSDOP_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLIGONOSDOP_6, 
                style: style_POLIGONOSDOP_6,
                interactive: true,
                title: '<img src="styles/legend/POLIGONOSDOP_6.png" /> POLIGONOS DOP'
            });

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenTopoMap_1.setVisible(true);lyr_TRATAMIENTO2020_2.setVisible(true);lyr_ESTACIONESCONTROL3JULIO_3.setVisible(true);lyr_LIMITESCATASTRAL_4.setVisible(true);lyr_ZONAEXCLUSION_5.setVisible(true);lyr_POLIGONOSDOP_6.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenTopoMap_1,lyr_TRATAMIENTO2020_2,lyr_ESTACIONESCONTROL3JULIO_3,lyr_LIMITESCATASTRAL_4,lyr_ZONAEXCLUSION_5,lyr_POLIGONOSDOP_6];
lyr_TRATAMIENTO2020_2.set('fieldAliases', {'ID_RECINTO': 'ID_RECINTO', 'CD_PROV': 'CD_PROV', 'CD_MUN': 'CD_MUN', 'CD_POL': 'CD_POL', 'CD_PARCELA': 'CD_PARCELA', 'CD_RECINTO': 'CD_RECINTO', 'CD_USO': 'CD_USO', 'NU_AREA': 'NU_AREA', 'PC_PASTOS': 'PC_PASTOS', 'COEF_REG': 'COEF_REG', 'PDTE_MEDIA': 'PDTE_MEDIA', 'INCIDENCIA': 'INCIDENCIA', 'REGION': 'REGION', 'GC': 'GC', 'VER': 'VER', 'layer': 'layer', 'path': 'path', 'AREA': 'AREA', });
lyr_ESTACIONESCONTROL3JULIO_3.set('fieldAliases', {'ID_RECINTO': 'ID_RECINTO', 'CD_PROV': 'CD_PROV', 'CD_MUN': 'CD_MUN', 'CD_POL': 'CD_POL', 'CD_PARCELA': 'CD_PARCELA', 'CD_RECINTO': 'CD_RECINTO', 'CD_USO': 'CD_USO', 'NU_AREA': 'NU_AREA', 'PC_PASTOS': 'PC_PASTOS', 'COEF_REG': 'COEF_REG', 'PDTE_MEDIA': 'PDTE_MEDIA', 'INCIDENCIA': 'INCIDENCIA', 'REGION': 'REGION', 'GC': 'GC', 'VER': 'VER', 'LAYER': 'LAYER', 'PATH': 'PATH', 'EST_CONTRO': 'EST_CONTRO', 'CONTROL': 'CONTROL', 'PARAJE': 'PARAJE', 'N1': 'N1', 'N2': 'N2', 'N3': 'N3', 'N4': 'N4', 'N5': 'N5', 'N6': 'N6', 'N7': 'N7', 'N8': 'N8', 'N9': 'N9', 'N10': 'N10', 'N11': 'N11', 'N12': 'N12', 'N13': 'N13', 'N14': 'N14', 'N15': 'N15', 'N16': 'N16', 'N17': 'N17', 'N18': 'N18', 'N19': 'N19', 'N20': 'N20', 'N21': 'N21', 'N22': 'N22', 'N23': 'N23', });
lyr_LIMITESCATASTRAL_4.set('fieldAliases', {'MAPA': 'MAPA', 'TTGGSS': 'TTGGSS', 'NUMSYMBOL': 'NUMSYMBOL', 'FECHAALTA': 'FECHAALTA', 'FECHABAJA': 'FECHABAJA', 'NINTERNO': 'NINTERNO', 'REFCAT': 'REFCAT', 'layer': 'layer', 'path': 'path', });
lyr_ZONAEXCLUSION_5.set('fieldAliases', {'id': 'id', });
lyr_POLIGONOSDOP_6.set('fieldAliases', {'ID_POLIGON': 'ID_POLIGON', 'CD_PROVINC': 'CD_PROVINC', 'CD_MUNICIP': 'CD_MUNICIP', 'CD_POLIGON': 'CD_POLIGON', });
lyr_TRATAMIENTO2020_2.set('fieldImages', {'ID_RECINTO': 'TextEdit', 'CD_PROV': 'Range', 'CD_MUN': 'Range', 'CD_POL': 'Range', 'CD_PARCELA': 'TextEdit', 'CD_RECINTO': 'TextEdit', 'CD_USO': 'TextEdit', 'NU_AREA': 'TextEdit', 'PC_PASTOS': 'Range', 'COEF_REG': 'Range', 'PDTE_MEDIA': 'TextEdit', 'INCIDENCIA': 'TextEdit', 'REGION': 'TextEdit', 'GC': 'TextEdit', 'VER': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'AREA': 'TextEdit', });
lyr_ESTACIONESCONTROL3JULIO_3.set('fieldImages', {'ID_RECINTO': 'TextEdit', 'CD_PROV': 'Range', 'CD_MUN': 'Range', 'CD_POL': 'Range', 'CD_PARCELA': 'TextEdit', 'CD_RECINTO': 'TextEdit', 'CD_USO': 'TextEdit', 'NU_AREA': 'TextEdit', 'PC_PASTOS': 'Range', 'COEF_REG': 'Range', 'PDTE_MEDIA': 'TextEdit', 'INCIDENCIA': 'TextEdit', 'REGION': 'TextEdit', 'GC': 'TextEdit', 'VER': 'TextEdit', 'LAYER': 'TextEdit', 'PATH': 'TextEdit', 'EST_CONTRO': 'TextEdit', 'CONTROL': 'TextEdit', 'PARAJE': 'TextEdit', 'N1': 'TextEdit', 'N2': 'TextEdit', 'N3': 'TextEdit', 'N4': 'TextEdit', 'N5': 'TextEdit', 'N6': 'TextEdit', 'N7': 'TextEdit', 'N8': 'TextEdit', 'N9': 'TextEdit', 'N10': 'TextEdit', 'N11': 'TextEdit', 'N12': 'TextEdit', 'N13': 'TextEdit', 'N14': 'TextEdit', 'N15': 'TextEdit', 'N16': 'TextEdit', 'N17': 'TextEdit', 'N18': 'TextEdit', 'N19': 'TextEdit', 'N20': 'TextEdit', 'N21': 'TextEdit', 'N22': 'TextEdit', 'N23': 'TextEdit', });
lyr_LIMITESCATASTRAL_4.set('fieldImages', {'MAPA': 'Range', 'TTGGSS': 'TextEdit', 'NUMSYMBOL': 'Range', 'FECHAALTA': 'Range', 'FECHABAJA': 'Range', 'NINTERNO': 'TextEdit', 'REFCAT': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ZONAEXCLUSION_5.set('fieldImages', {'id': 'TextEdit', });
lyr_POLIGONOSDOP_6.set('fieldImages', {'ID_POLIGON': 'TextEdit', 'CD_PROVINC': 'TextEdit', 'CD_MUNICIP': 'TextEdit', 'CD_POLIGON': 'TextEdit', });
lyr_TRATAMIENTO2020_2.set('fieldLabels', {'ID_RECINTO': 'no label', 'CD_PROV': 'no label', 'CD_MUN': 'no label', 'CD_POL': 'no label', 'CD_PARCELA': 'no label', 'CD_RECINTO': 'no label', 'CD_USO': 'no label', 'NU_AREA': 'no label', 'PC_PASTOS': 'no label', 'COEF_REG': 'no label', 'PDTE_MEDIA': 'no label', 'INCIDENCIA': 'no label', 'REGION': 'no label', 'GC': 'no label', 'VER': 'no label', 'layer': 'no label', 'path': 'no label', 'AREA': 'no label', });
lyr_ESTACIONESCONTROL3JULIO_3.set('fieldLabels', {'ID_RECINTO': 'no label', 'CD_PROV': 'no label', 'CD_MUN': 'no label', 'CD_POL': 'no label', 'CD_PARCELA': 'no label', 'CD_RECINTO': 'no label', 'CD_USO': 'no label', 'NU_AREA': 'no label', 'PC_PASTOS': 'no label', 'COEF_REG': 'no label', 'PDTE_MEDIA': 'no label', 'INCIDENCIA': 'no label', 'REGION': 'no label', 'GC': 'no label', 'VER': 'no label', 'LAYER': 'no label', 'PATH': 'no label', 'EST_CONTRO': 'no label', 'CONTROL': 'no label', 'PARAJE': 'no label', 'N1': 'no label', 'N2': 'no label', 'N3': 'no label', 'N4': 'no label', 'N5': 'no label', 'N6': 'no label', 'N7': 'no label', 'N8': 'no label', 'N9': 'no label', 'N10': 'no label', 'N11': 'no label', 'N12': 'no label', 'N13': 'no label', 'N14': 'no label', 'N15': 'no label', 'N16': 'no label', 'N17': 'no label', 'N18': 'no label', 'N19': 'no label', 'N20': 'no label', 'N21': 'no label', 'N22': 'no label', 'N23': 'inline label', });
lyr_LIMITESCATASTRAL_4.set('fieldLabels', {'MAPA': 'no label', 'TTGGSS': 'no label', 'NUMSYMBOL': 'no label', 'FECHAALTA': 'no label', 'FECHABAJA': 'no label', 'NINTERNO': 'no label', 'REFCAT': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ZONAEXCLUSION_5.set('fieldLabels', {'id': 'no label', });
lyr_POLIGONOSDOP_6.set('fieldLabels', {'ID_POLIGON': 'no label', 'CD_PROVINC': 'no label', 'CD_MUNICIP': 'no label', 'CD_POLIGON': 'no label', });
lyr_POLIGONOSDOP_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});