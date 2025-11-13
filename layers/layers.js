var wms_layers = [];

var format_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIKECAMATAN_AR_50K_0 = format_ADMINISTRASIKECAMATAN_AR_50K_0.readFeatures(json_ADMINISTRASIKECAMATAN_AR_50K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0.addFeatures(features_ADMINISTRASIKECAMATAN_AR_50K_0);
var lyr_ADMINISTRASIKECAMATAN_AR_50K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIKECAMATAN_AR_50K_0, 
                style: style_ADMINISTRASIKECAMATAN_AR_50K_0,
                popuplayertitle: 'ADMINISTRASIKECAMATAN_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIKECAMATAN_AR_50K_0.png" /> ADMINISTRASIKECAMATAN_AR_50K'
            });

        var lyr_googleearthsatelite_1 = new ol.layer.Tile({
            'title': 'google earth satelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_BUDIDAYAikan_2 = new ol.format.GeoJSON();
var features_BUDIDAYAikan_2 = format_BUDIDAYAikan_2.readFeatures(json_BUDIDAYAikan_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUDIDAYAikan_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUDIDAYAikan_2.addFeatures(features_BUDIDAYAikan_2);
var lyr_BUDIDAYAikan_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUDIDAYAikan_2, 
                style: style_BUDIDAYAikan_2,
                popuplayertitle: 'BUDI DAYA ikan ',
                interactive: true,
    title: 'BUDI DAYA ikan <br />\
    <img src="styles/legend/BUDIDAYAikan_2_0.png" /> Pembenihan<br />\
    <img src="styles/legend/BUDIDAYAikan_2_1.png" /> Pembesaran<br />\
    <img src="styles/legend/BUDIDAYAikan_2_2.png" /> Pembesaran <br />\
    <img src="styles/legend/BUDIDAYAikan_2_3.png" /> <br />' });
var format_ADMINISTRASI_LN_50K_3 = new ol.format.GeoJSON();
var features_ADMINISTRASI_LN_50K_3 = format_ADMINISTRASI_LN_50K_3.readFeatures(json_ADMINISTRASI_LN_50K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASI_LN_50K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASI_LN_50K_3.addFeatures(features_ADMINISTRASI_LN_50K_3);
var lyr_ADMINISTRASI_LN_50K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASI_LN_50K_3, 
                style: style_ADMINISTRASI_LN_50K_3,
                popuplayertitle: 'ADMINISTRASI_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASI_LN_50K_3.png" /> ADMINISTRASI_LN_50K'
            });
var format_SUNGAI_LN_50K_4 = new ol.format.GeoJSON();
var features_SUNGAI_LN_50K_4 = format_SUNGAI_LN_50K_4.readFeatures(json_SUNGAI_LN_50K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_50K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_50K_4.addFeatures(features_SUNGAI_LN_50K_4);
var lyr_SUNGAI_LN_50K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_50K_4, 
                style: style_SUNGAI_LN_50K_4,
                popuplayertitle: 'SUNGAI_LN_50K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_50K_4.png" /> SUNGAI_LN_50K'
            });
var format_EMPANG_AR_50K_5 = new ol.format.GeoJSON();
var features_EMPANG_AR_50K_5 = format_EMPANG_AR_50K_5.readFeatures(json_EMPANG_AR_50K_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EMPANG_AR_50K_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EMPANG_AR_50K_5.addFeatures(features_EMPANG_AR_50K_5);
var lyr_EMPANG_AR_50K_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EMPANG_AR_50K_5, 
                style: style_EMPANG_AR_50K_5,
                popuplayertitle: 'EMPANG_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/EMPANG_AR_50K_5.png" /> EMPANG_AR_50K'
            });
var format_RAWA_AR_50K_6 = new ol.format.GeoJSON();
var features_RAWA_AR_50K_6 = format_RAWA_AR_50K_6.readFeatures(json_RAWA_AR_50K_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RAWA_AR_50K_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RAWA_AR_50K_6.addFeatures(features_RAWA_AR_50K_6);
var lyr_RAWA_AR_50K_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RAWA_AR_50K_6, 
                style: style_RAWA_AR_50K_6,
                popuplayertitle: 'RAWA_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/RAWA_AR_50K_6.png" /> RAWA_AR_50K'
            });
var format_SUNGAI_AR_50K_7 = new ol.format.GeoJSON();
var features_SUNGAI_AR_50K_7 = format_SUNGAI_AR_50K_7.readFeatures(json_SUNGAI_AR_50K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_50K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_50K_7.addFeatures(features_SUNGAI_AR_50K_7);
var lyr_SUNGAI_AR_50K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_50K_7, 
                style: style_SUNGAI_AR_50K_7,
                popuplayertitle: 'SUNGAI_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_50K_7.png" /> SUNGAI_AR_50K'
            });
var format_DANAU_AR_50K_8 = new ol.format.GeoJSON();
var features_DANAU_AR_50K_8 = format_DANAU_AR_50K_8.readFeatures(json_DANAU_AR_50K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DANAU_AR_50K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DANAU_AR_50K_8.addFeatures(features_DANAU_AR_50K_8);
var lyr_DANAU_AR_50K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DANAU_AR_50K_8, 
                style: style_DANAU_AR_50K_8,
                popuplayertitle: 'DANAU_AR_50K',
                interactive: true,
                title: '<img src="styles/legend/DANAU_AR_50K_8.png" /> DANAU_AR_50K'
            });

lyr_ADMINISTRASIKECAMATAN_AR_50K_0.setVisible(true);lyr_googleearthsatelite_1.setVisible(true);lyr_BUDIDAYAikan_2.setVisible(true);lyr_ADMINISTRASI_LN_50K_3.setVisible(true);lyr_SUNGAI_LN_50K_4.setVisible(true);lyr_EMPANG_AR_50K_5.setVisible(true);lyr_RAWA_AR_50K_6.setVisible(true);lyr_SUNGAI_AR_50K_7.setVisible(true);lyr_DANAU_AR_50K_8.setVisible(true);
var layersList = [lyr_ADMINISTRASIKECAMATAN_AR_50K_0,lyr_googleearthsatelite_1,lyr_BUDIDAYAikan_2,lyr_ADMINISTRASI_LN_50K_3,lyr_SUNGAI_LN_50K_4,lyr_EMPANG_AR_50K_5,lyr_RAWA_AR_50K_6,lyr_SUNGAI_AR_50K_7,lyr_DANAU_AR_50K_8];
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_BUDIDAYAikan_2.set('fieldAliases', {'id': 'id', 'jenis': 'jenis', 'Jumlah': 'Jumlah', });
lyr_ADMINISTRASI_LN_50K_3.set('fieldAliases', {'KARKTR': 'KARKTR', 'STSBTS': 'STSBTS', 'FCODE': 'FCODE', 'KELAS': 'KELAS', 'UUPP': 'UUPP', 'LOKASI': 'LOKASI', 'REMARK': 'REMARK', 'NAMOBJ': 'NAMOBJ', 'ADMIN1': 'ADMIN1', 'ADMIN2': 'ADMIN2', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'WAKLD1': 'WAKLD1', 'WAKLD2': 'WAKLD2', 'WADKC1': 'WADKC1', 'WADKC2': 'WADKC2', 'WAKBK1': 'WAKBK1', 'WAKBK2': 'WAKBK2', 'WAPRO1': 'WAPRO1', 'WAPRO2': 'WAPRO2', 'TIPTBT': 'TIPTBT', 'PJGBTS': 'PJGBTS', 'KLBADM': 'KLBADM', 'TIPLOK': 'TIPLOK', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_SUNGAI_LN_50K_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_EMPANG_AR_50K_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_RAWA_AR_50K_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TPRAWA': 'TPRAWA', 'TPGNGN': 'TPGNGN', 'TPAIR': 'TPAIR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_SUNGAI_AR_50K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_DANAU_AR_50K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_BUDIDAYAikan_2.set('fieldImages', {'id': 'TextEdit', 'jenis': 'TextEdit', 'Jumlah': 'TextEdit', });
lyr_ADMINISTRASI_LN_50K_3.set('fieldImages', {'KARKTR': '', 'STSBTS': '', 'FCODE': '', 'KELAS': '', 'UUPP': '', 'LOKASI': '', 'REMARK': '', 'NAMOBJ': '', 'ADMIN1': '', 'ADMIN2': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'WAKLD1': '', 'WAKLD2': '', 'WADKC1': '', 'WADKC2': '', 'WAKBK1': '', 'WAKBK2': '', 'WAPRO1': '', 'WAPRO2': '', 'TIPTBT': '', 'PJGBTS': '', 'KLBADM': '', 'TIPLOK': '', 'SHAPE_Leng': '', });
lyr_SUNGAI_LN_50K_4.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_EMPANG_AR_50K_5.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_RAWA_AR_50K_6.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TPRAWA': '', 'TPGNGN': '', 'TPAIR': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_SUNGAI_AR_50K_7.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_DANAU_AR_50K_8.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_ADMINISTRASIKECAMATAN_AR_50K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_BUDIDAYAikan_2.set('fieldLabels', {'id': 'no label', 'jenis': 'no label', 'Jumlah': 'no label', });
lyr_ADMINISTRASI_LN_50K_3.set('fieldLabels', {'KARKTR': 'no label', 'STSBTS': 'no label', 'FCODE': 'no label', 'KELAS': 'no label', 'UUPP': 'no label', 'LOKASI': 'no label', 'REMARK': 'no label', 'NAMOBJ': 'no label', 'ADMIN1': 'no label', 'ADMIN2': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'WAKLD1': 'no label', 'WAKLD2': 'no label', 'WADKC1': 'no label', 'WADKC2': 'no label', 'WAKBK1': 'no label', 'WAKBK2': 'no label', 'WAPRO1': 'no label', 'WAPRO2': 'no label', 'TIPTBT': 'no label', 'PJGBTS': 'no label', 'KLBADM': 'no label', 'TIPLOK': 'no label', 'SHAPE_Leng': 'no label', });
lyr_SUNGAI_LN_50K_4.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_EMPANG_AR_50K_5.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_RAWA_AR_50K_6.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TPRAWA': 'no label', 'TPGNGN': 'no label', 'TPAIR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_SUNGAI_AR_50K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DANAU_AR_50K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_DANAU_AR_50K_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});