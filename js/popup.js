!function() {
    function p(E, D, Z) {
        function k(F, P) {
            if (!D[F]) {
                if (!E[F]) {
                    var M = "function" == typeof require && require;
                    if (!P && M) return M(F, !0);
                    if (C) return C(F, !0);
                    var B = new Error("Cannot find module '" + F + "'");
                    throw B.code = "MODULE_NOT_FOUND", B;
                }
                var Q = D[F] = {
                    exports: {}
                };
                E[F][0].call(Q.exports, (function(p) {
                    var D;
                    return k(E[F][1][p] || p);
                }), Q, Q.exports, p, E, D, Z);
            }
            return D[F].exports;
        }
        for (var C = "function" == typeof require && require, F = 0; F < Z.length; F++) k(Z[F]);
        return k;
    }
    return p;
}()({
    1: [ function(p, E, D) {
        "use strict";
        D.remove = M;
        for (var Z = [ {
            base: " ",
            chars: " "
        }, {
            base: "0",
            chars: "߀"
        }, {
            base: "A",
            chars: "ⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
        }, {
            base: "AA",
            chars: "Ꜳ"
        }, {
            base: "AE",
            chars: "ÆǼǢ"
        }, {
            base: "AO",
            chars: "Ꜵ"
        }, {
            base: "AU",
            chars: "Ꜷ"
        }, {
            base: "AV",
            chars: "ꜸꜺ"
        }, {
            base: "AY",
            chars: "Ꜽ"
        }, {
            base: "B",
            chars: "ⒷＢḂḄḆɃƁ"
        }, {
            base: "C",
            chars: "ⒸＣꜾḈĆCĈĊČÇƇȻ"
        }, {
            base: "D",
            chars: "ⒹＤḊĎḌḐḒḎĐƊƉᴅꝹ"
        }, {
            base: "Dh",
            chars: "Ð"
        }, {
            base: "DZ",
            chars: "ǱǄ"
        }, {
            base: "Dz",
            chars: "ǲǅ"
        }, {
            base: "E",
            chars: "ɛⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎᴇ"
        }, {
            base: "F",
            chars: "ꝼⒻＦḞƑꝻ"
        }, {
            base: "G",
            chars: "ⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾɢ"
        }, {
            base: "H",
            chars: "ⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
        }, {
            base: "I",
            chars: "ⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
        }, {
            base: "J",
            chars: "ⒿＪĴɈȷ"
        }, {
            base: "K",
            chars: "ⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
        }, {
            base: "L",
            chars: "ⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
        }, {
            base: "LJ",
            chars: "Ǉ"
        }, {
            base: "Lj",
            chars: "ǈ"
        }, {
            base: "M",
            chars: "ⓂＭḾṀṂⱮƜϻ"
        }, {
            base: "N",
            chars: "ꞤȠⓃＮǸŃÑṄŇṆŅṊṈƝꞐᴎ"
        }, {
            base: "NJ",
            chars: "Ǌ"
        }, {
            base: "Nj",
            chars: "ǋ"
        }, {
            base: "O",
            chars: "ⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
        }, {
            base: "OE",
            chars: "Œ"
        }, {
            base: "OI",
            chars: "Ƣ"
        }, {
            base: "OO",
            chars: "Ꝏ"
        }, {
            base: "OU",
            chars: "Ȣ"
        }, {
            base: "P",
            chars: "ⓅＰṔṖƤⱣꝐꝒꝔ"
        }, {
            base: "Q",
            chars: "ⓆＱꝖꝘɊ"
        }, {
            base: "R",
            chars: "ⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
        }, {
            base: "S",
            chars: "ⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
        }, {
            base: "T",
            chars: "ⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
        }, {
            base: "Th",
            chars: "Þ"
        }, {
            base: "TZ",
            chars: "Ꜩ"
        }, {
            base: "U",
            chars: "ⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
        }, {
            base: "V",
            chars: "ⓋＶṼṾƲꝞɅ"
        }, {
            base: "VY",
            chars: "Ꝡ"
        }, {
            base: "W",
            chars: "ⓌＷẀẂŴẆẄẈⱲ"
        }, {
            base: "X",
            chars: "ⓍＸẊẌ"
        }, {
            base: "Y",
            chars: "ⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
        }, {
            base: "Z",
            chars: "ⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
        }, {
            base: "a",
            chars: "ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐɑ"
        }, {
            base: "aa",
            chars: "ꜳ"
        }, {
            base: "ae",
            chars: "æǽǣ"
        }, {
            base: "ao",
            chars: "ꜵ"
        }, {
            base: "au",
            chars: "ꜷ"
        }, {
            base: "av",
            chars: "ꜹꜻ"
        }, {
            base: "ay",
            chars: "ꜽ"
        }, {
            base: "b",
            chars: "ⓑｂḃḅḇƀƃɓƂ"
        }, {
            base: "c",
            chars: "ｃⓒćĉċčçḉƈȼꜿↄ"
        }, {
            base: "d",
            chars: "ⓓｄḋďḍḑḓḏđƌɖɗƋᏧԁꞪ"
        }, {
            base: "dh",
            chars: "ð"
        }, {
            base: "dz",
            chars: "ǳǆ"
        }, {
            base: "e",
            chars: "ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇǝ"
        }, {
            base: "f",
            chars: "ⓕｆḟƒ"
        }, {
            base: "ff",
            chars: "ﬀ"
        }, {
            base: "fi",
            chars: "ﬁ"
        }, {
            base: "fl",
            chars: "ﬂ"
        }, {
            base: "ffi",
            chars: "ﬃ"
        }, {
            base: "ffl",
            chars: "ﬄ"
        }, {
            base: "g",
            chars: "ⓖｇǵĝḡğġǧģǥɠꞡꝿᵹ"
        }, {
            base: "h",
            chars: "ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
        }, {
            base: "hv",
            chars: "ƕ"
        }, {
            base: "i",
            chars: "ⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
        }, {
            base: "j",
            chars: "ⓙｊĵǰɉ"
        }, {
            base: "k",
            chars: "ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
        }, {
            base: "l",
            chars: "ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇɭ"
        }, {
            base: "lj",
            chars: "ǉ"
        }, {
            base: "m",
            chars: "ⓜｍḿṁṃɱɯ"
        }, {
            base: "n",
            chars: "ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥлԉ"
        }, {
            base: "nj",
            chars: "ǌ"
        }, {
            base: "o",
            chars: "ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿꝋꝍɵɔᴑ"
        }, {
            base: "oe",
            chars: "œ"
        }, {
            base: "oi",
            chars: "ƣ"
        }, {
            base: "oo",
            chars: "ꝏ"
        }, {
            base: "ou",
            chars: "ȣ"
        }, {
            base: "p",
            chars: "ⓟｐṕṗƥᵽꝑꝓꝕρ"
        }, {
            base: "q",
            chars: "ⓠｑɋꝗꝙ"
        }, {
            base: "r",
            chars: "ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
        }, {
            base: "s",
            chars: "ⓢｓśṥŝṡšṧṣṩșşȿꞩꞅẛʂ"
        }, {
            base: "ss",
            chars: "ß"
        }, {
            base: "t",
            chars: "ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
        }, {
            base: "th",
            chars: "þ"
        }, {
            base: "tz",
            chars: "ꜩ"
        }, {
            base: "u",
            chars: "ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
        }, {
            base: "v",
            chars: "ⓥｖṽṿʋꝟʌ"
        }, {
            base: "vy",
            chars: "ꝡ"
        }, {
            base: "w",
            chars: "ⓦｗẁẃŵẇẅẘẉⱳ"
        }, {
            base: "x",
            chars: "ⓧｘẋẍ"
        }, {
            base: "y",
            chars: "ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
        }, {
            base: "z",
            chars: "ⓩｚźẑżžẓẕƶȥɀⱬꝣ"
        } ], k = {}, C = 0; C < Z.length; C += 1) for (var F = Z[C].chars, P = 0; P < F.length; P += 1) k[F[P]] = Z[C].base;
        function M(p) {
            return p.replace(/[^\u0000-\u007e]/g, (function(p) {
                return k[p] || p;
            }));
        }
        D.replacementList = Z, D.diacriticsMap = k;
    }, {} ],
    2: [ function(p, E, D) {
        E.exports = [ [ "AF", "AFG", "004", "ISO 3166-2:AF" ], [ "AL", "ALB", "008", "ISO 3166-2:AL" ], [ "DZ", "DZA", "012", "ISO 3166-2:DZ" ], [ "AS", "ASM", "016", "ISO 3166-2:AS" ], [ "AD", "AND", "020", "ISO 3166-2:AD" ], [ "AO", "AGO", "024", "ISO 3166-2:AO" ], [ "AI", "AIA", "660", "ISO 3166-2:AI" ], [ "AQ", "ATA", "010", "ISO 3166-2:AQ" ], [ "AG", "ATG", "028", "ISO 3166-2:AG" ], [ "AR", "ARG", "032", "ISO 3166-2:AR" ], [ "AM", "ARM", "051", "ISO 3166-2:AM" ], [ "AW", "ABW", "533", "ISO 3166-2:AW" ], [ "AU", "AUS", "036", "ISO 3166-2:AU" ], [ "AT", "AUT", "040", "ISO 3166-2:AT" ], [ "AZ", "AZE", "031", "ISO 3166-2:AZ" ], [ "BS", "BHS", "044", "ISO 3166-2:BS" ], [ "BH", "BHR", "048", "ISO 3166-2:BH" ], [ "BD", "BGD", "050", "ISO 3166-2:BD" ], [ "BB", "BRB", "052", "ISO 3166-2:BB" ], [ "BY", "BLR", "112", "ISO 3166-2:BY" ], [ "BE", "BEL", "056", "ISO 3166-2:BE" ], [ "BZ", "BLZ", "084", "ISO 3166-2:BZ" ], [ "BJ", "BEN", "204", "ISO 3166-2:BJ" ], [ "BM", "BMU", "060", "ISO 3166-2:BM" ], [ "BT", "BTN", "064", "ISO 3166-2:BT" ], [ "BO", "BOL", "068", "ISO 3166-2:BO" ], [ "BA", "BIH", "070", "ISO 3166-2:BA" ], [ "BW", "BWA", "072", "ISO 3166-2:BW" ], [ "BV", "BVT", "074", "ISO 3166-2:BV" ], [ "BR", "BRA", "076", "ISO 3166-2:BR" ], [ "IO", "IOT", "086", "ISO 3166-2:IO" ], [ "BN", "BRN", "096", "ISO 3166-2:BN" ], [ "BG", "BGR", "100", "ISO 3166-2:BG" ], [ "BF", "BFA", "854", "ISO 3166-2:BF" ], [ "BI", "BDI", "108", "ISO 3166-2:BI" ], [ "KH", "KHM", "116", "ISO 3166-2:KH" ], [ "CM", "CMR", "120", "ISO 3166-2:CM" ], [ "CA", "CAN", "124", "ISO 3166-2:CA" ], [ "CV", "CPV", "132", "ISO 3166-2:CV" ], [ "KY", "CYM", "136", "ISO 3166-2:KY" ], [ "CF", "CAF", "140", "ISO 3166-2:CF" ], [ "TD", "TCD", "148", "ISO 3166-2:TD" ], [ "CL", "CHL", "152", "ISO 3166-2:CL" ], [ "CN", "CHN", "156", "ISO 3166-2:CN" ], [ "CX", "CXR", "162", "ISO 3166-2:CX" ], [ "CC", "CCK", "166", "ISO 3166-2:CC" ], [ "CO", "COL", "170", "ISO 3166-2:CO" ], [ "KM", "COM", "174", "ISO 3166-2:KM" ], [ "CG", "COG", "178", "ISO 3166-2:CG" ], [ "CD", "COD", "180", "ISO 3166-2:CD" ], [ "CK", "COK", "184", "ISO 3166-2:CK" ], [ "CR", "CRI", "188", "ISO 3166-2:CR" ], [ "CI", "CIV", "384", "ISO 3166-2:CI" ], [ "HR", "HRV", "191", "ISO 3166-2:HR" ], [ "CU", "CUB", "192", "ISO 3166-2:CU" ], [ "CY", "CYP", "196", "ISO 3166-2:CY" ], [ "CZ", "CZE", "203", "ISO 3166-2:CZ" ], [ "DK", "DNK", "208", "ISO 3166-2:DK" ], [ "DJ", "DJI", "262", "ISO 3166-2:DJ" ], [ "DM", "DMA", "212", "ISO 3166-2:DM" ], [ "DO", "DOM", "214", "ISO 3166-2:DO" ], [ "EC", "ECU", "218", "ISO 3166-2:EC" ], [ "EG", "EGY", "818", "ISO 3166-2:EG" ], [ "SV", "SLV", "222", "ISO 3166-2:SV" ], [ "GQ", "GNQ", "226", "ISO 3166-2:GQ" ], [ "ER", "ERI", "232", "ISO 3166-2:ER" ], [ "EE", "EST", "233", "ISO 3166-2:EE" ], [ "ET", "ETH", "231", "ISO 3166-2:ET" ], [ "FK", "FLK", "238", "ISO 3166-2:FK" ], [ "FO", "FRO", "234", "ISO 3166-2:FO" ], [ "FJ", "FJI", "242", "ISO 3166-2:FJ" ], [ "FI", "FIN", "246", "ISO 3166-2:FI" ], [ "FR", "FRA", "250", "ISO 3166-2:FR" ], [ "GF", "GUF", "254", "ISO 3166-2:GF" ], [ "PF", "PYF", "258", "ISO 3166-2:PF" ], [ "TF", "ATF", "260", "ISO 3166-2:TF" ], [ "GA", "GAB", "266", "ISO 3166-2:GA" ], [ "GM", "GMB", "270", "ISO 3166-2:GM" ], [ "GE", "GEO", "268", "ISO 3166-2:GE" ], [ "DE", "DEU", "276", "ISO 3166-2:DE" ], [ "GH", "GHA", "288", "ISO 3166-2:GH" ], [ "GI", "GIB", "292", "ISO 3166-2:GI" ], [ "GR", "GRC", "300", "ISO 3166-2:GR" ], [ "GL", "GRL", "304", "ISO 3166-2:GL" ], [ "GD", "GRD", "308", "ISO 3166-2:GD" ], [ "GP", "GLP", "312", "ISO 3166-2:GP" ], [ "GU", "GUM", "316", "ISO 3166-2:GU" ], [ "GT", "GTM", "320", "ISO 3166-2:GT" ], [ "GN", "GIN", "324", "ISO 3166-2:GN" ], [ "GW", "GNB", "624", "ISO 3166-2:GW" ], [ "GY", "GUY", "328", "ISO 3166-2:GY" ], [ "HT", "HTI", "332", "ISO 3166-2:HT" ], [ "HM", "HMD", "334", "ISO 3166-2:HM" ], [ "VA", "VAT", "336", "ISO 3166-2:VA" ], [ "HN", "HND", "340", "ISO 3166-2:HN" ], [ "HK", "HKG", "344", "ISO 3166-2:HK" ], [ "HU", "HUN", "348", "ISO 3166-2:HU" ], [ "IS", "ISL", "352", "ISO 3166-2:IS" ], [ "IN", "IND", "356", "ISO 3166-2:IN" ], [ "ID", "IDN", "360", "ISO 3166-2:ID" ], [ "IR", "IRN", "364", "ISO 3166-2:IR" ], [ "IQ", "IRQ", "368", "ISO 3166-2:IQ" ], [ "IE", "IRL", "372", "ISO 3166-2:IE" ], [ "IL", "ISR", "376", "ISO 3166-2:IL" ], [ "IT", "ITA", "380", "ISO 3166-2:IT" ], [ "JM", "JAM", "388", "ISO 3166-2:JM" ], [ "JP", "JPN", "392", "ISO 3166-2:JP" ], [ "JO", "JOR", "400", "ISO 3166-2:JO" ], [ "KZ", "KAZ", "398", "ISO 3166-2:KZ" ], [ "KE", "KEN", "404", "ISO 3166-2:KE" ], [ "KI", "KIR", "296", "ISO 3166-2:KI" ], [ "KP", "PRK", "408", "ISO 3166-2:KP" ], [ "KR", "KOR", "410", "ISO 3166-2:KR" ], [ "KW", "KWT", "414", "ISO 3166-2:KW" ], [ "KG", "KGZ", "417", "ISO 3166-2:KG" ], [ "LA", "LAO", "418", "ISO 3166-2:LA" ], [ "LV", "LVA", "428", "ISO 3166-2:LV" ], [ "LB", "LBN", "422", "ISO 3166-2:LB" ], [ "LS", "LSO", "426", "ISO 3166-2:LS" ], [ "LR", "LBR", "430", "ISO 3166-2:LR" ], [ "LY", "LBY", "434", "ISO 3166-2:LY" ], [ "LI", "LIE", "438", "ISO 3166-2:LI" ], [ "LT", "LTU", "440", "ISO 3166-2:LT" ], [ "LU", "LUX", "442", "ISO 3166-2:LU" ], [ "MO", "MAC", "446", "ISO 3166-2:MO" ], [ "MG", "MDG", "450", "ISO 3166-2:MG" ], [ "MW", "MWI", "454", "ISO 3166-2:MW" ], [ "MY", "MYS", "458", "ISO 3166-2:MY" ], [ "MV", "MDV", "462", "ISO 3166-2:MV" ], [ "ML", "MLI", "466", "ISO 3166-2:ML" ], [ "MT", "MLT", "470", "ISO 3166-2:MT" ], [ "MH", "MHL", "584", "ISO 3166-2:MH" ], [ "MQ", "MTQ", "474", "ISO 3166-2:MQ" ], [ "MR", "MRT", "478", "ISO 3166-2:MR" ], [ "MU", "MUS", "480", "ISO 3166-2:MU" ], [ "YT", "MYT", "175", "ISO 3166-2:YT" ], [ "MX", "MEX", "484", "ISO 3166-2:MX" ], [ "FM", "FSM", "583", "ISO 3166-2:FM" ], [ "MD", "MDA", "498", "ISO 3166-2:MD" ], [ "MC", "MCO", "492", "ISO 3166-2:MC" ], [ "MN", "MNG", "496", "ISO 3166-2:MN" ], [ "MS", "MSR", "500", "ISO 3166-2:MS" ], [ "MA", "MAR", "504", "ISO 3166-2:MA" ], [ "MZ", "MOZ", "508", "ISO 3166-2:MZ" ], [ "MM", "MMR", "104", "ISO 3166-2:MM" ], [ "NA", "NAM", "516", "ISO 3166-2:NA" ], [ "NR", "NRU", "520", "ISO 3166-2:NR" ], [ "NP", "NPL", "524", "ISO 3166-2:NP" ], [ "NL", "NLD", "528", "ISO 3166-2:NL" ], [ "NC", "NCL", "540", "ISO 3166-2:NC" ], [ "NZ", "NZL", "554", "ISO 3166-2:NZ" ], [ "NI", "NIC", "558", "ISO 3166-2:NI" ], [ "NE", "NER", "562", "ISO 3166-2:NE" ], [ "NG", "NGA", "566", "ISO 3166-2:NG" ], [ "NU", "NIU", "570", "ISO 3166-2:NU" ], [ "NF", "NFK", "574", "ISO 3166-2:NF" ], [ "MP", "MNP", "580", "ISO 3166-2:MP" ], [ "MK", "MKD", "807", "ISO 3166-2:MK" ], [ "NO", "NOR", "578", "ISO 3166-2:NO" ], [ "OM", "OMN", "512", "ISO 3166-2:OM" ], [ "PK", "PAK", "586", "ISO 3166-2:PK" ], [ "PW", "PLW", "585", "ISO 3166-2:PW" ], [ "PS", "PSE", "275", "ISO 3166-2:PS" ], [ "PA", "PAN", "591", "ISO 3166-2:PA" ], [ "PG", "PNG", "598", "ISO 3166-2:PG" ], [ "PY", "PRY", "600", "ISO 3166-2:PY" ], [ "PE", "PER", "604", "ISO 3166-2:PE" ], [ "PH", "PHL", "608", "ISO 3166-2:PH" ], [ "PN", "PCN", "612", "ISO 3166-2:PN" ], [ "PL", "POL", "616", "ISO 3166-2:PL" ], [ "PT", "PRT", "620", "ISO 3166-2:PT" ], [ "PR", "PRI", "630", "ISO 3166-2:PR" ], [ "QA", "QAT", "634", "ISO 3166-2:QA" ], [ "RE", "REU", "638", "ISO 3166-2:RE" ], [ "RO", "ROU", "642", "ISO 3166-2:RO" ], [ "RU", "RUS", "643", "ISO 3166-2:RU" ], [ "RW", "RWA", "646", "ISO 3166-2:RW" ], [ "SH", "SHN", "654", "ISO 3166-2:SH" ], [ "KN", "KNA", "659", "ISO 3166-2:KN" ], [ "LC", "LCA", "662", "ISO 3166-2:LC" ], [ "PM", "SPM", "666", "ISO 3166-2:PM" ], [ "VC", "VCT", "670", "ISO 3166-2:VC" ], [ "WS", "WSM", "882", "ISO 3166-2:WS" ], [ "SM", "SMR", "674", "ISO 3166-2:SM" ], [ "ST", "STP", "678", "ISO 3166-2:ST" ], [ "SA", "SAU", "682", "ISO 3166-2:SA" ], [ "SN", "SEN", "686", "ISO 3166-2:SN" ], [ "SC", "SYC", "690", "ISO 3166-2:SC" ], [ "SL", "SLE", "694", "ISO 3166-2:SL" ], [ "SG", "SGP", "702", "ISO 3166-2:SG" ], [ "SK", "SVK", "703", "ISO 3166-2:SK" ], [ "SI", "SVN", "705", "ISO 3166-2:SI" ], [ "SB", "SLB", "090", "ISO 3166-2:SB" ], [ "SO", "SOM", "706", "ISO 3166-2:SO" ], [ "ZA", "ZAF", "710", "ISO 3166-2:ZA" ], [ "GS", "SGS", "239", "ISO 3166-2:GS" ], [ "ES", "ESP", "724", "ISO 3166-2:ES" ], [ "LK", "LKA", "144", "ISO 3166-2:LK" ], [ "SD", "SDN", "729", "ISO 3166-2:SD" ], [ "SR", "SUR", "740", "ISO 3166-2:SR" ], [ "SJ", "SJM", "744", "ISO 3166-2:SJ" ], [ "SZ", "SWZ", "748", "ISO 3166-2:SZ" ], [ "SE", "SWE", "752", "ISO 3166-2:SE" ], [ "CH", "CHE", "756", "ISO 3166-2:CH" ], [ "SY", "SYR", "760", "ISO 3166-2:SY" ], [ "TW", "TWN", "158", "ISO 3166-2:TW" ], [ "TJ", "TJK", "762", "ISO 3166-2:TJ" ], [ "TZ", "TZA", "834", "ISO 3166-2:TZ" ], [ "TH", "THA", "764", "ISO 3166-2:TH" ], [ "TL", "TLS", "626", "ISO 3166-2:TL" ], [ "TG", "TGO", "768", "ISO 3166-2:TG" ], [ "TK", "TKL", "772", "ISO 3166-2:TK" ], [ "TO", "TON", "776", "ISO 3166-2:TO" ], [ "TT", "TTO", "780", "ISO 3166-2:TT" ], [ "TN", "TUN", "788", "ISO 3166-2:TN" ], [ "TR", "TUR", "792", "ISO 3166-2:TR" ], [ "TM", "TKM", "795", "ISO 3166-2:TM" ], [ "TC", "TCA", "796", "ISO 3166-2:TC" ], [ "TV", "TUV", "798", "ISO 3166-2:TV" ], [ "UG", "UGA", "800", "ISO 3166-2:UG" ], [ "UA", "UKR", "804", "ISO 3166-2:UA" ], [ "AE", "ARE", "784", "ISO 3166-2:AE" ], [ "GB", "GBR", "826", "ISO 3166-2:GB" ], [ "US", "USA", "840", "ISO 3166-2:US" ], [ "UM", "UMI", "581", "ISO 3166-2:UM" ], [ "UY", "URY", "858", "ISO 3166-2:UY" ], [ "UZ", "UZB", "860", "ISO 3166-2:UZ" ], [ "VU", "VUT", "548", "ISO 3166-2:VU" ], [ "VE", "VEN", "862", "ISO 3166-2:VE" ], [ "VN", "VNM", "704", "ISO 3166-2:VN" ], [ "VG", "VGB", "092", "ISO 3166-2:VG" ], [ "VI", "VIR", "850", "ISO 3166-2:VI" ], [ "WF", "WLF", "876", "ISO 3166-2:WF" ], [ "EH", "ESH", "732", "ISO 3166-2:EH" ], [ "YE", "YEM", "887", "ISO 3166-2:YE" ], [ "ZM", "ZMB", "894", "ISO 3166-2:ZM" ], [ "ZW", "ZWE", "716", "ISO 3166-2:ZW" ], [ "AX", "ALA", "248", "ISO 3166-2:AX" ], [ "BQ", "BES", "535", "ISO 3166-2:BQ" ], [ "CW", "CUW", "531", "ISO 3166-2:CW" ], [ "GG", "GGY", "831", "ISO 3166-2:GG" ], [ "IM", "IMN", "833", "ISO 3166-2:IM" ], [ "JE", "JEY", "832", "ISO 3166-2:JE" ], [ "ME", "MNE", "499", "ISO 3166-2:ME" ], [ "BL", "BLM", "652", "ISO 3166-2:BL" ], [ "MF", "MAF", "663", "ISO 3166-2:MF" ], [ "RS", "SRB", "688", "ISO 3166-2:RS" ], [ "SX", "SXM", "534", "ISO 3166-2:SX" ], [ "SS", "SSD", "728", "ISO 3166-2:SS" ], [ "XK", "XKX", "983", "ISO 3166-2:XK" ] ];
    }, {} ],
    3: [ function(p, E, D) {
        "use strict";
        const Z = p("./codes.json"), k = p("diacritics").remove, C = {}, F = {}, P = {}, M = {}, B = {};
        function Q(p) {
            return String("000" + (p || "")).slice(-3);
        }
        function x(p, E) {
            return Object.prototype.hasOwnProperty.call(p, E);
        }
        function U(p, E) {
            return Object.keys(p).reduce((function(D, Z) {
                const k = p[Z];
                return D[Z] = E(k, Z), D;
            }), {});
        }
        function N(p, E) {
            switch (p) {
              case "official":
                return Array.isArray(E) ? E[0] : E;

              case "all":
                return "string" == typeof E ? [ E ] : E;

              case "alias":
                return Array.isArray(E) ? E[1] || E[0] : E;

              default:
                throw new TypeError("LocaleNameType must be one of these: all, official, alias!");
            }
        }
        function l(p) {
            return P[p];
        }
        function z(p) {
            return F[p];
        }
        function J(p) {
            return B[l(p)];
        }
        function S(p) {
            return B[p];
        }
        function h(p) {
            const E = Q(p);
            return z(M[E]);
        }
        function o(p) {
            const E = Q(p);
            return M[E];
        }
        function O(p) {
            if ("string" == typeof p) {
                if (/^[0-9]*$/.test(p)) return h(p);
                if (2 === p.length) return z(p.toUpperCase());
                if (3 === p.length) return p.toUpperCase();
            }
            if ("number" == typeof p) return h(p);
        }
        function q(p) {
            if ("string" == typeof p) {
                if (/^[0-9]*$/.test(p)) return o(p);
                if (2 === p.length) return p.toUpperCase();
                if (3 === p.length) return l(p.toUpperCase());
            }
            if ("number" == typeof p) return o(p);
        }
        Z.forEach((function(p) {
            const E = p;
            F[E[0]] = E[1], P[E[1]] = E[0], M[E[2]] = E[0], B[E[0]] = E[2];
        })), D.registerLocale = function(p) {
            if (!p.locale) throw new TypeError("Missing localeData.locale");
            if (!p.countries) throw new TypeError("Missing localeData.countries");
            C[p.locale] = p.countries;
        }, D.alpha3ToAlpha2 = l, D.alpha2ToAlpha3 = z, D.alpha3ToNumeric = J, D.alpha2ToNumeric = S,
        D.numericToAlpha3 = h, D.numericToAlpha2 = o, D.toAlpha3 = O, D.toAlpha2 = q, D.getName = function(p, E, D = {}) {
            "select" in D || (D.select = "official");
            try {
                const Z = undefined, k = C[E.toLowerCase()][q(p)];
                return N(D.select, k);
            } catch (p) {
                return;
            }
        }, D.getNames = function(p, E = {}) {
            "select" in E || (E.select = "official");
            const D = C[p.toLowerCase()];
            return void 0 === D ? {} : U(D, (function(p) {
                return N(E.select, p);
            }));
        }, D.getAlpha2Code = function(p, E) {
            const D = p => p.toLowerCase(), Z = (p, E) => D(p) === D(E);
            try {
                const D = C[E.toLowerCase()];
                for (const E in D) if (x(D, E)) {
                    if ("string" == typeof D[E] && Z(D[E], p)) return E;
                    if (Array.isArray(D[E])) for (const k of D[E]) if (Z(k, p)) return E;
                }
                return;
            } catch (p) {
                return;
            }
        }, D.getSimpleAlpha2Code = function(p, E) {
            const D = p => k(p.toLowerCase()), Z = (p, E) => D(p) === D(E);
            try {
                const D = C[E.toLowerCase()];
                for (const E in D) if (x(D, E)) {
                    if ("string" == typeof D[E] && Z(D[E], p)) return E;
                    if (Array.isArray(D[E])) for (const k of D[E]) if (Z(k, p)) return E;
                }
                return;
            } catch (p) {
                return;
            }
        }, D.getAlpha2Codes = function() {
            return F;
        }, D.getAlpha3Code = function(p, E) {
            const Z = D.getAlpha2Code(p, E);
            return Z ? D.toAlpha3(Z) : void 0;
        }, D.getSimpleAlpha3Code = function(p, E) {
            const Z = D.getSimpleAlpha2Code(p, E);
            return Z ? D.toAlpha3(Z) : void 0;
        }, D.getAlpha3Codes = function() {
            return P;
        }, D.getNumericCodes = function() {
            return M;
        }, D.langs = function() {
            return Object.keys(C);
        }, D.isValid = function(p) {
            if (!p) return !1;
            const E = p.toString().toUpperCase();
            return x(P, E) || x(F, E) || x(M, E);
        };
    }, {
        "./codes.json": 2,
        diacritics: 1
    } ],
    4: [ function(p, E, D) {
        E.exports = {
            locale: "en",
            countries: {
                AF: "Afghanistan",
                AL: "Albania",
                DZ: "Algeria",
                AS: "American Samoa",
                AD: "Andorra",
                AO: "Angola",
                AI: "Anguilla",
                AQ: "Antarctica",
                AG: "Antigua and Barbuda",
                AR: "Argentina",
                AM: "Armenia",
                AW: "Aruba",
                AU: "Australia",
                AT: "Austria",
                AZ: "Azerbaijan",
                BS: "Bahamas",
                BH: "Bahrain",
                BD: "Bangladesh",
                BB: "Barbados",
                BY: "Belarus",
                BE: "Belgium",
                BZ: "Belize",
                BJ: "Benin",
                BM: "Bermuda",
                BT: "Bhutan",
                BO: "Bolivia",
                BA: "Bosnia and Herzegovina",
                BW: "Botswana",
                BV: "Bouvet Island",
                BR: "Brazil",
                IO: "British Indian Ocean Territory",
                BN: "Brunei Darussalam",
                BG: "Bulgaria",
                BF: "Burkina Faso",
                BI: "Burundi",
                KH: "Cambodia",
                CM: "Cameroon",
                CA: "Canada",
                CV: "Cape Verde",
                KY: "Cayman Islands",
                CF: "Central African Republic",
                TD: "Chad",
                CL: "Chile",
                CN: "China",
                CX: "Christmas Island",
                CC: "Cocos (Keeling) Islands",
                CO: "Colombia",
                KM: "Comoros",
                CG: "Congo",
                CD: "Congo, the Democratic Republic of the",
                CK: "Cook Islands",
                CR: "Costa Rica",
                CI: "Cote D'Ivoire",
                HR: "Croatia",
                CU: "Cuba",
                CY: "Cyprus",
                CZ: "Czech Republic",
                DK: "Denmark",
                DJ: "Djibouti",
                DM: "Dominica",
                DO: "Dominican Republic",
                EC: "Ecuador",
                EG: "Egypt",
                SV: "El Salvador",
                GQ: "Equatorial Guinea",
                ER: "Eritrea",
                EE: "Estonia",
                ET: "Ethiopia",
                FK: "Falkland Islands (Malvinas)",
                FO: "Faroe Islands",
                FJ: "Fiji",
                FI: "Finland",
                FR: "France",
                GF: "French Guiana",
                PF: "French Polynesia",
                TF: "French Southern Territories",
                GA: "Gabon",
                GM: "Gambia",
                GE: "Georgia",
                DE: "Germany",
                GH: "Ghana",
                GI: "Gibraltar",
                GR: "Greece",
                GL: "Greenland",
                GD: "Grenada",
                GP: "Guadeloupe",
                GU: "Guam",
                GT: "Guatemala",
                GN: "Guinea",
                GW: "Guinea-Bissau",
                GY: "Guyana",
                HT: "Haiti",
                HM: "Heard Island and McDonald Islands",
                VA: "Holy See (Vatican City State)",
                HN: "Honduras",
                HK: "Hong Kong",
                HU: "Hungary",
                IS: "Iceland",
                IN: "India",
                ID: "Indonesia",
                IR: "Iran, Islamic Republic of",
                IQ: "Iraq",
                IE: "Ireland",
                IL: "Israel",
                IT: "Italy",
                JM: "Jamaica",
                JP: "Japan",
                JO: "Jordan",
                KZ: "Kazakhstan",
                KE: "Kenya",
                KI: "Kiribati",
                KP: "North Korea",
                KR: "South Korea",
                KW: "Kuwait",
                KG: "Kyrgyzstan",
                LA: "Lao People's Democratic Republic",
                LV: "Latvia",
                LB: "Lebanon",
                LS: "Lesotho",
                LR: "Liberia",
                LY: "Libya",
                LI: "Liechtenstein",
                LT: "Lithuania",
                LU: "Luxembourg",
                MO: "Macao",
                MG: "Madagascar",
                MW: "Malawi",
                MY: "Malaysia",
                MV: "Maldives",
                ML: "Mali",
                MT: "Malta",
                MH: "Marshall Islands",
                MQ: "Martinique",
                MR: "Mauritania",
                MU: "Mauritius",
                YT: "Mayotte",
                MX: "Mexico",
                FM: "Micronesia, Federated States of",
                MD: "Moldova, Republic of",
                MC: "Monaco",
                MN: "Mongolia",
                MS: "Montserrat",
                MA: "Morocco",
                MZ: "Mozambique",
                MM: "Myanmar",
                NA: "Namibia",
                NR: "Nauru",
                NP: "Nepal",
                NL: "Netherlands",
                NC: "New Caledonia",
                NZ: "New Zealand",
                NI: "Nicaragua",
                NE: "Niger",
                NG: "Nigeria",
                NU: "Niue",
                NF: "Norfolk Island",
                MK: "North Macedonia, Republic of",
                MP: "Northern Mariana Islands",
                NO: "Norway",
                OM: "Oman",
                PK: "Pakistan",
                PW: "Palau",
                PS: [ "State of Palestine", "Palestine" ],
                PA: "Panama",
                PG: "Papua New Guinea",
                PY: "Paraguay",
                PE: "Peru",
                PH: "Philippines",
                PN: "Pitcairn",
                PL: "Poland",
                PT: "Portugal",
                PR: "Puerto Rico",
                QA: "Qatar",
                RE: "Reunion",
                RO: "Romania",
                RU: [ "Russian Federation", "Russia" ],
                RW: "Rwanda",
                SH: "Saint Helena",
                KN: "Saint Kitts and Nevis",
                LC: "Saint Lucia",
                PM: "Saint Pierre and Miquelon",
                VC: "Saint Vincent and the Grenadines",
                WS: "Samoa",
                SM: "San Marino",
                ST: "Sao Tome and Principe",
                SA: "Saudi Arabia",
                SN: "Senegal",
                SC: "Seychelles",
                SL: "Sierra Leone",
                SG: "Singapore",
                SK: "Slovakia",
                SI: "Slovenia",
                SB: "Solomon Islands",
                SO: "Somalia",
                ZA: "South Africa",
                GS: "South Georgia and the South Sandwich Islands",
                ES: "Spain",
                LK: "Sri Lanka",
                SD: "Sudan",
                SR: "Suriname",
                SJ: "Svalbard and Jan Mayen",
                SZ: "Eswatini",
                SE: "Sweden",
                CH: "Switzerland",
                SY: "Syrian Arab Republic",
                TW: [ "Taiwan, Province of China", "Taiwan" ],
                TJ: "Tajikistan",
                TZ: "Tanzania, United Republic of",
                TH: "Thailand",
                TL: "Timor-Leste",
                TG: "Togo",
                TK: "Tokelau",
                TO: "Tonga",
                TT: "Trinidad and Tobago",
                TN: "Tunisia",
                TR: "Turkey",
                TM: "Turkmenistan",
                TC: "Turks and Caicos Islands",
                TV: "Tuvalu",
                UG: "Uganda",
                UA: "Ukraine",
                AE: "United Arab Emirates",
                GB: [ "United Kingdom", "UK", "Great Britain" ],
                US: [ "United States of America", "USA" ],
                UM: "United States Minor Outlying Islands",
                UY: "Uruguay",
                UZ: "Uzbekistan",
                VU: "Vanuatu",
                VE: "Venezuela",
                VN: "Vietnam",
                VG: "Virgin Islands, British",
                VI: "Virgin Islands, U.S.",
                WF: "Wallis and Futuna",
                EH: "Western Sahara",
                YE: "Yemen",
                ZM: "Zambia",
                ZW: "Zimbabwe",
                AX: "Åland Islands",
                BQ: "Bonaire, Sint Eustatius and Saba",
                CW: "Curaçao",
                GG: "Guernsey",
                IM: "Isle of Man",
                JE: "Jersey",
                ME: "Montenegro",
                BL: "Saint Barthélemy",
                MF: "Saint Martin (French part)",
                RS: "Serbia",
                SX: "Sint Maarten (Dutch part)",
                SS: "South Sudan",
                XK: "Kosovo"
            }
        };
    }, {} ],
    5: [ function(p, E, D) {
        "use strict";
        !function(p, D) {
            "object" == typeof E && "object" == typeof E.exports ? E.exports = p.document ? D(p, !0) : function(p) {
                if (!p.document) throw new Error("jQuery requires a window with a document");
                return D(p);
            } : D(p);
        }("undefined" != typeof window ? window : void 0, (function(p, E) {
            var D = [], Z = Object.getPrototypeOf, k = D.slice, C = D.flat ? function(p) {
                return D.flat.call(p);
            } : function(p) {
                return D.concat.apply([], p);
            }, F = D.push, P = D.indexOf, M = {}, B = M.toString, Q = M.hasOwnProperty, x = Q.toString, U = x.call(Object), N = {}, l = function p(E) {
                return "function" == typeof E && "number" != typeof E.nodeType && "function" != typeof E.item;
            }, z = function p(E) {
                return null != E && E === E.window;
            }, J = p.document, S = {
                type: !0,
                src: !0,
                nonce: !0,
                noModule: !0
            };
            function h(p, E, D) {
                var Z, k, C = (D = D || J).createElement("script");
                if (C.text = p, E) for (Z in S) (k = E[Z] || E.getAttribute && E.getAttribute(Z)) && C.setAttribute(Z, k);
                D.head.appendChild(C).parentNode.removeChild(C);
            }
            function o(p) {
                return null == p ? p + "" : "object" == typeof p || "function" == typeof p ? M[B.call(p)] || "object" : typeof p;
            }
            var O = "3.6.0", q = function(p, E) {
                return new q.fn.init(p, E);
            };
            function e(p) {
                var E = !!p && "length" in p && p.length, D = o(p);
                return !l(p) && !z(p) && ("array" === D || 0 === E || "number" == typeof E && E > 0 && E - 1 in p);
            }
            q.fn = q.prototype = {
                jquery: O,
                constructor: q,
                length: 0,
                toArray: function() {
                    return k.call(this);
                },
                get: function(p) {
                    return null == p ? k.call(this) : p < 0 ? this[p + this.length] : this[p];
                },
                pushStack: function(p) {
                    var E = q.merge(this.constructor(), p);
                    return E.prevObject = this, E;
                },
                each: function(p) {
                    return q.each(this, p);
                },
                map: function(p) {
                    return this.pushStack(q.map(this, (function(E, D) {
                        return p.call(E, D, E);
                    })));
                },
                slice: function() {
                    return this.pushStack(k.apply(this, arguments));
                },
                first: function() {
                    return this.eq(0);
                },
                last: function() {
                    return this.eq(-1);
                },
                even: function() {
                    return this.pushStack(q.grep(this, (function(p, E) {
                        return (E + 1) % 2;
                    })));
                },
                odd: function() {
                    return this.pushStack(q.grep(this, (function(p, E) {
                        return E % 2;
                    })));
                },
                eq: function(p) {
                    var E = this.length, D = +p + (p < 0 ? E : 0);
                    return this.pushStack(D >= 0 && D < E ? [ this[D] ] : []);
                },
                end: function() {
                    return this.prevObject || this.constructor();
                },
                push: F,
                sort: D.sort,
                splice: D.splice
            }, q.extend = q.fn.extend = function() {
                var p, E, D, Z, k, C, F = arguments[0] || {}, P = 1, M = arguments.length, B = !1;
                for ("boolean" == typeof F && (B = F, F = arguments[P] || {}, P++), "object" == typeof F || l(F) || (F = {}),
                P === M && (F = this, P--); P < M; P++) if (null != (p = arguments[P])) for (E in p) Z = p[E],
                "__proto__" !== E && F !== Z && (B && Z && (q.isPlainObject(Z) || (k = Array.isArray(Z))) ? (D = F[E],
                C = k && !Array.isArray(D) ? [] : k || q.isPlainObject(D) ? D : {}, k = !1, F[E] = q.extend(B, C, Z)) : void 0 !== Z && (F[E] = Z));
                return F;
            }, q.extend({
                expando: "jQuery" + (O + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function(p) {
                    throw new Error(p);
                },
                noop: function() {},
                isPlainObject: function(p) {
                    var E, D;
                    return !(!p || "[object Object]" !== B.call(p)) && (!(E = Z(p)) || "function" == typeof (D = Q.call(E, "constructor") && E.constructor) && x.call(D) === U);
                },
                isEmptyObject: function(p) {
                    var E;
                    for (E in p) return !1;
                    return !0;
                },
                globalEval: function(p, E, D) {
                    h(p, {
                        nonce: E && E.nonce
                    }, D);
                },
                each: function(p, E) {
                    var D, Z = 0;
                    if (e(p)) for (D = p.length; Z < D && !1 !== E.call(p[Z], Z, p[Z]); Z++) ; else for (Z in p) if (!1 === E.call(p[Z], Z, p[Z])) break;
                    return p;
                },
                makeArray: function(p, E) {
                    var D = E || [];
                    return null != p && (e(Object(p)) ? q.merge(D, "string" == typeof p ? [ p ] : p) : F.call(D, p)),
                    D;
                },
                inArray: function(p, E, D) {
                    return null == E ? -1 : P.call(E, p, D);
                },
                merge: function(p, E) {
                    for (var D = +E.length, Z = 0, k = p.length; Z < D; Z++) p[k++] = E[Z];
                    return p.length = k, p;
                },
                grep: function(p, E, D) {
                    for (var Z, k = [], C = 0, F = p.length, P = !D; C < F; C++) (Z = !E(p[C], C)) !== P && k.push(p[C]);
                    return k;
                },
                map: function(p, E, D) {
                    var Z, k, F = 0, P = [];
                    if (e(p)) for (Z = p.length; F < Z; F++) null != (k = E(p[F], F, D)) && P.push(k); else for (F in p) null != (k = E(p[F], F, D)) && P.push(k);
                    return C(P);
                },
                guid: 1,
                support: N
            }), "function" == typeof Symbol && (q.fn[Symbol.iterator] = D[Symbol.iterator]),
            q.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), (function(p, E) {
                M["[object " + E + "]"] = E.toLowerCase();
            }));
            var H =
            function(p) {
                var E, D, Z, k, C, F, P, M, B, Q, x, U, N, l, z, J, S, h, o, O = "sizzle" + 1 * new Date, q = p.document, e = 0, H = 0, m = ss(), R = ss(), i = ss(), Y = ss(), K = function(p, E) {
                    return p === E && (x = !0), 0;
                }, b = {}.hasOwnProperty, A = [], v = A.pop, T = A.push, a = A.push, j = A.slice, c = function(p, E) {
                    for (var D = 0, Z = p.length; D < Z; D++) if (p[D] === E) return D;
                    return -1;
                }, u = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" + "ismap|loop|multiple|open|readonly|required|scoped", r = "[\\x20\\t\\r\\n\\f]", d = "(?:\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", L = "\\[" + r + "*(" + d + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + d + "))|)" + r + "*\\]", s = ":(" + d + ")(?:\\((" + "('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" + "((?:\\\\.|[^\\\\()[\\]]|" + L + ")*)|" + ".*" + ")\\)|)", n = new RegExp(r + "+", "g"), w = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"), y = new RegExp("^" + r + "*," + r + "*"), t = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"), W = new RegExp(r + "|>"), g = new RegExp(s), f = new RegExp("^" + d + "$"), G = {
                    ID: new RegExp("^#(" + d + ")"),
                    CLASS: new RegExp("^\\.(" + d + ")"),
                    TAG: new RegExp("^(" + d + "|[*])"),
                    ATTR: new RegExp("^" + L),
                    PSEUDO: new RegExp("^" + s),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + u + ")$", "i"),
                    needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
                }, I = /HTML$/i, X = /^(?:input|select|textarea|button)$/i, V = /^h\d$/i, wW = /^[^{]+\{\s*\[native \w/, uQ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, hu = /[+~]/, hI = new RegExp("\\\\[\\da-fA-F]{1,6}" + r + "?|\\\\([^\\r\\n\\f])", "g"), JX = function(p, E) {
                    var D = "0x" + p.slice(1) - 65536;
                    return E || (D < 0 ? String.fromCharCode(D + 65536) : String.fromCharCode(D >> 10 | 55296, 1023 & D | 56320));
                }, oX = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, Wj = function(p, E) {
                    return E ? "\0" === p ? "�" : p.slice(0, -1) + "\\" + p.charCodeAt(p.length - 1).toString(16) + " " : "\\" + p;
                }, Gx = function() {
                    U();
                }, mw = BL((function(p) {
                    return !0 === p.disabled && "fieldset" === p.nodeName.toLowerCase();
                }), {
                    dir: "parentNode",
                    next: "legend"
                });
                try {
                    a.apply(A = j.call(q.childNodes), q.childNodes), A[q.childNodes.length].nodeType;
                } catch (p) {
                    a = {
                        apply: A.length ? function(p, E) {
                            T.apply(p, j.call(E));
                        } : function(p, E) {
                            for (var D = p.length, Z = 0; p[D++] = E[Z++]; ) ;
                            p.length = D - 1;
                        }
                    };
                }
                function el(p, E, Z, k) {
                    var C, P, B, Q, x, l, S, h = E && E.ownerDocument, q = E ? E.nodeType : 9;
                    if (Z = Z || [], "string" != typeof p || !p || 1 !== q && 9 !== q && 11 !== q) return Z;
                    if (!k && (U(E), E = E || N, z)) {
                        if (11 !== q && (x = uQ.exec(p))) if (C = x[1]) {
                            if (9 === q) {
                                if (!(B = E.getElementById(C))) return Z;
                                if (B.id === C) return Z.push(B), Z;
                            } else if (h && (B = h.getElementById(C)) && o(E, B) && B.id === C) return Z.push(B),
                            Z;
                        } else {
                            if (x[2]) return a.apply(Z, E.getElementsByTagName(p)), Z;
                            if ((C = x[3]) && D.getElementsByClassName && E.getElementsByClassName) return a.apply(Z, E.getElementsByClassName(C)),
                            Z;
                        }
                        if (D.qsa && !Y[p + " "] && (!J || !J.test(p)) && (1 !== q || "object" !== E.nodeName.toLowerCase())) {
                            if (S = p, h = E, 1 === q && (W.test(p) || t.test(p))) {
                                for ((h = hu.test(p) && Su(E.parentNode) || E) === E && D.scope || ((Q = E.getAttribute("id")) ? Q = Q.replace(oX, Wj) : E.setAttribute("id", Q = O)),
                                P = (l = F(p)).length; P--; ) l[P] = (Q ? "#" + Q : ":scope") + " " + fa(l[P]);
                                S = l.join(",");
                            }
                            try {
                                return a.apply(Z, h.querySelectorAll(S)), Z;
                            } catch (E) {
                                Y(p, !0);
                            } finally {
                                Q === O && E.removeAttribute("id");
                            }
                        }
                    }
                    return M(p.replace(w, "$1"), E, Z, k);
                }
                function ss() {
                    var p = [];
                    function E(D, k) {
                        return p.push(D + " ") > Z.cacheLength && delete E[p.shift()], E[D + " "] = k;
                    }
                    return E;
                }
                function VM(p) {
                    return p[O] = !0, p;
                }
                function tN(p) {
                    var E = N.createElement("fieldset");
                    try {
                        return !!p(E);
                    } catch (p) {
                        return !1;
                    } finally {
                        E.parentNode && E.parentNode.removeChild(E), E = null;
                    }
                }
                function TF(p, E) {
                    for (var D = p.split("|"), k = D.length; k--; ) Z.attrHandle[D[k]] = E;
                }
                function ys(p, E) {
                    var D = E && p, Z = D && 1 === p.nodeType && 1 === E.nodeType && p.sourceIndex - E.sourceIndex;
                    if (Z) return Z;
                    if (D) for (;D = D.nextSibling; ) if (D === E) return -1;
                    return p ? 1 : -1;
                }
                function Mg(p) {
                    return function(E) {
                        var D;
                        return "input" === E.nodeName.toLowerCase() && E.type === p;
                    };
                }
                function kL(p) {
                    return function(E) {
                        var D = E.nodeName.toLowerCase();
                        return ("input" === D || "button" === D) && E.type === p;
                    };
                }
                function Zk(p) {
                    return function(E) {
                        return "form" in E ? E.parentNode && !1 === E.disabled ? "label" in E ? "label" in E.parentNode ? E.parentNode.disabled === p : E.disabled === p : E.isDisabled === p || E.isDisabled !== !p && mw(E) === p : E.disabled === p : "label" in E && E.disabled === p;
                    };
                }
                function sv(p) {
                    return VM((function(E) {
                        return E = +E, VM((function(D, Z) {
                            for (var k, C = p([], D.length, E), F = C.length; F--; ) D[k = C[F]] && (D[k] = !(Z[k] = D[k]));
                        }));
                    }));
                }
                function Su(p) {
                    return p && void 0 !== p.getElementsByTagName && p;
                }
                for (E in D = el.support = {}, C = el.isXML = function(p) {
                    var E = p && p.namespaceURI, D = p && (p.ownerDocument || p).documentElement;
                    return !I.test(E || D && D.nodeName || "HTML");
                }, U = el.setDocument = function(p) {
                    var E, k, F = p ? p.ownerDocument || p : q;
                    return F != N && 9 === F.nodeType && F.documentElement ? (l = (N = F).documentElement,
                    z = !C(N), q != N && (k = N.defaultView) && k.top !== k && (k.addEventListener ? k.addEventListener("unload", Gx, !1) : k.attachEvent && k.attachEvent("onunload", Gx)),
                    D.scope = tN((function(p) {
                        return l.appendChild(p).appendChild(N.createElement("div")), void 0 !== p.querySelectorAll && !p.querySelectorAll(":scope fieldset div").length;
                    })), D.attributes = tN((function(p) {
                        return p.className = "i", !p.getAttribute("className");
                    })), D.getElementsByTagName = tN((function(p) {
                        return p.appendChild(N.createComment("")), !p.getElementsByTagName("*").length;
                    })), D.getElementsByClassName = wW.test(N.getElementsByClassName), D.getById = tN((function(p) {
                        return l.appendChild(p).id = O, !N.getElementsByName || !N.getElementsByName(O).length;
                    })), D.getById ? (Z.filter["ID"] = function(p) {
                        var E = p.replace(hI, JX);
                        return function(p) {
                            return p.getAttribute("id") === E;
                        };
                    }, Z.find["ID"] = function(p, E) {
                        if (void 0 !== E.getElementById && z) {
                            var D = E.getElementById(p);
                            return D ? [ D ] : [];
                        }
                    }) : (Z.filter["ID"] = function(p) {
                        var E = p.replace(hI, JX);
                        return function(p) {
                            var D = void 0 !== p.getAttributeNode && p.getAttributeNode("id");
                            return D && D.value === E;
                        };
                    }, Z.find["ID"] = function(p, E) {
                        if (void 0 !== E.getElementById && z) {
                            var D, Z, k, C = E.getElementById(p);
                            if (C) {
                                if ((D = C.getAttributeNode("id")) && D.value === p) return [ C ];
                                for (k = E.getElementsByName(p), Z = 0; C = k[Z++]; ) if ((D = C.getAttributeNode("id")) && D.value === p) return [ C ];
                            }
                            return [];
                        }
                    }), Z.find["TAG"] = D.getElementsByTagName ? function(p, E) {
                        return void 0 !== E.getElementsByTagName ? E.getElementsByTagName(p) : D.qsa ? E.querySelectorAll(p) : void 0;
                    } : function(p, E) {
                        var D, Z = [], k = 0, C = E.getElementsByTagName(p);
                        if ("*" === p) {
                            for (;D = C[k++]; ) 1 === D.nodeType && Z.push(D);
                            return Z;
                        }
                        return C;
                    }, Z.find["CLASS"] = D.getElementsByClassName && function(p, E) {
                        if (void 0 !== E.getElementsByClassName && z) return E.getElementsByClassName(p);
                    }, S = [], J = [], (D.qsa = wW.test(N.querySelectorAll)) && (tN((function(p) {
                        var E;
                        l.appendChild(p).innerHTML = "<a id='" + O + "'></a>" + "<select id='" + O + "-\r\\' msallowcapture=''>" + "<option selected=''></option></select>",
                        p.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + r + "*(?:''|\"\")"),
                        p.querySelectorAll("[selected]").length || J.push("\\[" + r + "*(?:value|" + u + ")"),
                        p.querySelectorAll("[id~=" + O + "-]").length || J.push("~="), (E = N.createElement("input")).setAttribute("name", ""),
                        p.appendChild(E), p.querySelectorAll("[name='']").length || J.push("\\[" + r + "*name" + r + "*=" + r + "*(?:''|\"\")"),
                        p.querySelectorAll(":checked").length || J.push(":checked"), p.querySelectorAll("a#" + O + "+*").length || J.push(".#.+[+~]"),
                        p.querySelectorAll("\\\f"), J.push("[\\r\\n\\f]");
                    })), tN((function(p) {
                        p.innerHTML = "<a href='' disabled='disabled'></a>" + "<select disabled='disabled'><option/></select>";
                        var E = N.createElement("input");
                        E.setAttribute("type", "hidden"), p.appendChild(E).setAttribute("name", "D"), p.querySelectorAll("[name=d]").length && J.push("name" + r + "*[*^$|!~]?="),
                        2 !== p.querySelectorAll(":enabled").length && J.push(":enabled", ":disabled"),
                        l.appendChild(p).disabled = !0, 2 !== p.querySelectorAll(":disabled").length && J.push(":enabled", ":disabled"),
                        p.querySelectorAll("*,:x"), J.push(",.*:");
                    }))), (D.matchesSelector = wW.test(h = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.oMatchesSelector || l.msMatchesSelector)) && tN((function(p) {
                        D.disconnectedMatch = h.call(p, "*"), h.call(p, "[s!='']:x"), S.push("!=", s);
                    })), J = J.length && new RegExp(J.join("|")), S = S.length && new RegExp(S.join("|")),
                    E = wW.test(l.compareDocumentPosition), o = E || wW.test(l.contains) ? function(p, E) {
                        var D = 9 === p.nodeType ? p.documentElement : p, Z = E && E.parentNode;
                        return p === Z || !(!Z || 1 !== Z.nodeType || !(D.contains ? D.contains(Z) : p.compareDocumentPosition && 16 & p.compareDocumentPosition(Z)));
                    } : function(p, E) {
                        if (E) for (;E = E.parentNode; ) if (E === p) return !0;
                        return !1;
                    }, K = E ? function(p, E) {
                        if (p === E) return x = !0, 0;
                        var Z = !p.compareDocumentPosition - !E.compareDocumentPosition;
                        return Z || (1 & (Z = (p.ownerDocument || p) == (E.ownerDocument || E) ? p.compareDocumentPosition(E) : 1) || !D.sortDetached && E.compareDocumentPosition(p) === Z ? p == N || p.ownerDocument == q && o(q, p) ? -1 : E == N || E.ownerDocument == q && o(q, E) ? 1 : Q ? c(Q, p) - c(Q, E) : 0 : 4 & Z ? -1 : 1);
                    } : function(p, E) {
                        if (p === E) return x = !0, 0;
                        var D, Z = 0, k = p.parentNode, C = E.parentNode, F = [ p ], P = [ E ];
                        if (!k || !C) return p == N ? -1 : E == N ? 1 : k ? -1 : C ? 1 : Q ? c(Q, p) - c(Q, E) : 0;
                        if (k === C) return ys(p, E);
                        for (D = p; D = D.parentNode; ) F.unshift(D);
                        for (D = E; D = D.parentNode; ) P.unshift(D);
                        for (;F[Z] === P[Z]; ) Z++;
                        return Z ? ys(F[Z], P[Z]) : F[Z] == q ? -1 : P[Z] == q ? 1 : 0;
                    }, N) : N;
                }, el.matches = function(p, E) {
                    return el(p, null, null, E);
                }, el.matchesSelector = function(p, E) {
                    if (U(p), D.matchesSelector && z && !Y[E + " "] && (!S || !S.test(E)) && (!J || !J.test(E))) try {
                        var Z = h.call(p, E);
                        if (Z || D.disconnectedMatch || p.document && 11 !== p.document.nodeType) return Z;
                    } catch (p) {
                        Y(E, !0);
                    }
                    return el(E, N, null, [ p ]).length > 0;
                }, el.contains = function(p, E) {
                    return (p.ownerDocument || p) != N && U(p), o(p, E);
                }, el.attr = function(p, E) {
                    (p.ownerDocument || p) != N && U(p);
                    var k = Z.attrHandle[E.toLowerCase()], C = k && b.call(Z.attrHandle, E.toLowerCase()) ? k(p, E, !z) : void 0;
                    return void 0 !== C ? C : D.attributes || !z ? p.getAttribute(E) : (C = p.getAttributeNode(E)) && C.specified ? C.value : null;
                }, el.escape = function(p) {
                    return (p + "").replace(oX, Wj);
                }, el.error = function(p) {
                    throw new Error("Syntax error, unrecognized expression: " + p);
                }, el.uniqueSort = function(p) {
                    var E, Z = [], k = 0, C = 0;
                    if (x = !D.detectDuplicates, Q = !D.sortStable && p.slice(0), p.sort(K), x) {
                        for (;E = p[C++]; ) E === p[C] && (k = Z.push(C));
                        for (;k--; ) p.splice(Z[k], 1);
                    }
                    return Q = null, p;
                }, k = el.getText = function(p) {
                    var E, D = "", Z = 0, C = p.nodeType;
                    if (C) {
                        if (1 === C || 9 === C || 11 === C) {
                            if ("string" == typeof p.textContent) return p.textContent;
                            for (p = p.firstChild; p; p = p.nextSibling) D += k(p);
                        } else if (3 === C || 4 === C) return p.nodeValue;
                    } else for (;E = p[Z++]; ) D += k(E);
                    return D;
                }, Z = el.selectors = {
                    cacheLength: 50,
                    createPseudo: VM,
                    match: G,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(p) {
                            return p[1] = p[1].replace(hI, JX), p[3] = (p[3] || p[4] || p[5] || "").replace(hI, JX),
                            "~=" === p[2] && (p[3] = " " + p[3] + " "), p.slice(0, 4);
                        },
                        CHILD: function(p) {
                            return p[1] = p[1].toLowerCase(), "nth" === p[1].slice(0, 3) ? (p[3] || el.error(p[0]),
                            p[4] = +(p[4] ? p[5] + (p[6] || 1) : 2 * ("even" === p[3] || "odd" === p[3])), p[5] = +(p[7] + p[8] || "odd" === p[3])) : p[3] && el.error(p[0]),
                            p;
                        },
                        PSEUDO: function(p) {
                            var E, D = !p[6] && p[2];
                            return G["CHILD"].test(p[0]) ? null : (p[3] ? p[2] = p[4] || p[5] || "" : D && g.test(D) && (E = F(D, !0)) && (E = D.indexOf(")", D.length - E) - D.length) && (p[0] = p[0].slice(0, E),
                            p[2] = D.slice(0, E)), p.slice(0, 3));
                        }
                    },
                    filter: {
                        TAG: function(p) {
                            var E = p.replace(hI, JX).toLowerCase();
                            return "*" === p ? function() {
                                return !0;
                            } : function(p) {
                                return p.nodeName && p.nodeName.toLowerCase() === E;
                            };
                        },
                        CLASS: function(p) {
                            var E = m[p + " "];
                            return E || (E = new RegExp("(^|" + r + ")" + p + "(" + r + "|$)")) && m(p, (function(p) {
                                return E.test("string" == typeof p.className && p.className || void 0 !== p.getAttribute && p.getAttribute("class") || "");
                            }));
                        },
                        ATTR: function(p, E, D) {
                            return function(Z) {
                                var k = el.attr(Z, p);
                                return null == k ? "!=" === E : !E || (k += "", "=" === E ? k === D : "!=" === E ? k !== D : "^=" === E ? D && 0 === k.indexOf(D) : "*=" === E ? D && k.indexOf(D) > -1 : "$=" === E ? D && k.slice(-D.length) === D : "~=" === E ? (" " + k.replace(n, " ") + " ").indexOf(D) > -1 : "|=" === E && (k === D || k.slice(0, D.length + 1) === D + "-"));
                            };
                        },
                        CHILD: function(p, E, D, Z, k) {
                            var C = "nth" !== p.slice(0, 3), F = "last" !== p.slice(-4), P = "of-type" === E;
                            return 1 === Z && 0 === k ? function(p) {
                                return !!p.parentNode;
                            } : function(E, D, M) {
                                var B, Q, x, U, N, l, z = C !== F ? "nextSibling" : "previousSibling", J = E.parentNode, S = P && E.nodeName.toLowerCase(), h = !M && !P, o = !1;
                                if (J) {
                                    if (C) {
                                        for (;z; ) {
                                            for (U = E; U = U[z]; ) if (P ? U.nodeName.toLowerCase() === S : 1 === U.nodeType) return !1;
                                            l = z = "only" === p && !l && "nextSibling";
                                        }
                                        return !0;
                                    }
                                    if (l = [ F ? J.firstChild : J.lastChild ], F && h) {
                                        for (o = (N = (B = (Q = (x = (U = J)[O] || (U[O] = {}))[U.uniqueID] || (x[U.uniqueID] = {}))[p] || [])[0] === e && B[1]) && B[2],
                                        U = N && J.childNodes[N]; U = ++N && U && U[z] || (o = N = 0) || l.pop(); ) if (1 === U.nodeType && ++o && U === E) {
                                            Q[p] = [ e, N, o ];
                                            break;
                                        }
                                    } else if (h && (o = N = (B = (Q = (x = (U = E)[O] || (U[O] = {}))[U.uniqueID] || (x[U.uniqueID] = {}))[p] || [])[0] === e && B[1]),
                                    !1 === o) for (;(U = ++N && U && U[z] || (o = N = 0) || l.pop()) && ((P ? U.nodeName.toLowerCase() !== S : 1 !== U.nodeType) || !++o || (h && ((Q = (x = U[O] || (U[O] = {}))[U.uniqueID] || (x[U.uniqueID] = {}))[p] = [ e, o ]),
                                    U !== E)); ) ;
                                    return (o -= k) === Z || o % Z == 0 && o / Z >= 0;
                                }
                            };
                        },
                        PSEUDO: function(p, E) {
                            var D, k = Z.pseudos[p] || Z.setFilters[p.toLowerCase()] || el.error("unsupported pseudo: " + p);
                            return k[O] ? k(E) : k.length > 1 ? (D = [ p, p, "", E ], Z.setFilters.hasOwnProperty(p.toLowerCase()) ? VM((function(p, D) {
                                for (var Z, C = k(p, E), F = C.length; F--; ) p[Z = c(p, C[F])] = !(D[Z] = C[F]);
                            })) : function(p) {
                                return k(p, 0, D);
                            }) : k;
                        }
                    },
                    pseudos: {
                        not: VM((function(p) {
                            var E = [], D = [], Z = P(p.replace(w, "$1"));
                            return Z[O] ? VM((function(p, E, D, k) {
                                for (var C, F = Z(p, null, k, []), P = p.length; P--; ) (C = F[P]) && (p[P] = !(E[P] = C));
                            })) : function(p, k, C) {
                                return E[0] = p, Z(E, null, C, D), E[0] = null, !D.pop();
                            };
                        })),
                        has: VM((function(p) {
                            return function(E) {
                                return el(p, E).length > 0;
                            };
                        })),
                        contains: VM((function(p) {
                            return p = p.replace(hI, JX), function(E) {
                                return (E.textContent || k(E)).indexOf(p) > -1;
                            };
                        })),
                        lang: VM((function(p) {
                            return f.test(p || "") || el.error("unsupported lang: " + p), p = p.replace(hI, JX).toLowerCase(),
                            function(E) {
                                var D;
                                do {
                                    if (D = z ? E.lang : E.getAttribute("xml:lang") || E.getAttribute("lang")) return (D = D.toLowerCase()) === p || 0 === D.indexOf(p + "-");
                                } while ((E = E.parentNode) && 1 === E.nodeType);
                                return !1;
                            };
                        })),
                        target: function(E) {
                            var D = p.location && p.location.hash;
                            return D && D.slice(1) === E.id;
                        },
                        root: function(p) {
                            return p === l;
                        },
                        focus: function(p) {
                            return p === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(p.type || p.href || ~p.tabIndex);
                        },
                        enabled: Zk(!1),
                        disabled: Zk(!0),
                        checked: function(p) {
                            var E = p.nodeName.toLowerCase();
                            return "input" === E && !!p.checked || "option" === E && !!p.selected;
                        },
                        selected: function(p) {
                            return p.parentNode && p.parentNode.selectedIndex, !0 === p.selected;
                        },
                        empty: function(p) {
                            for (p = p.firstChild; p; p = p.nextSibling) if (p.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function(p) {
                            return !Z.pseudos["empty"](p);
                        },
                        header: function(p) {
                            return V.test(p.nodeName);
                        },
                        input: function(p) {
                            return X.test(p.nodeName);
                        },
                        button: function(p) {
                            var E = p.nodeName.toLowerCase();
                            return "input" === E && "button" === p.type || "button" === E;
                        },
                        text: function(p) {
                            var E;
                            return "input" === p.nodeName.toLowerCase() && "text" === p.type && (null == (E = p.getAttribute("type")) || "text" === E.toLowerCase());
                        },
                        first: sv((function() {
                            return [ 0 ];
                        })),
                        last: sv((function(p, E) {
                            return [ E - 1 ];
                        })),
                        eq: sv((function(p, E, D) {
                            return [ D < 0 ? D + E : D ];
                        })),
                        even: sv((function(p, E) {
                            for (var D = 0; D < E; D += 2) p.push(D);
                            return p;
                        })),
                        odd: sv((function(p, E) {
                            for (var D = 1; D < E; D += 2) p.push(D);
                            return p;
                        })),
                        lt: sv((function(p, E, D) {
                            for (var Z = D < 0 ? D + E : D > E ? E : D; --Z >= 0; ) p.push(Z);
                            return p;
                        })),
                        gt: sv((function(p, E, D) {
                            for (var Z = D < 0 ? D + E : D; ++Z < E; ) p.push(Z);
                            return p;
                        }))
                    }
                }, Z.pseudos["nth"] = Z.pseudos["eq"], {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) Z.pseudos[E] = Mg(E);
                for (E in {
                    submit: !0,
                    reset: !0
                }) Z.pseudos[E] = kL(E);
                function IT() {}
                function fa(p) {
                    for (var E = 0, D = p.length, Z = ""; E < D; E++) Z += p[E].value;
                    return Z;
                }
                function BL(p, E, D) {
                    var Z = E.dir, k = E.next, C = k || Z, F = D && "parentNode" === C, P = H++;
                    return E.first ? function(E, D, k) {
                        for (;E = E[Z]; ) if (1 === E.nodeType || F) return p(E, D, k);
                        return !1;
                    } : function(E, D, M) {
                        var B, Q, x, U = [ e, P ];
                        if (M) {
                            for (;E = E[Z]; ) if ((1 === E.nodeType || F) && p(E, D, M)) return !0;
                        } else for (;E = E[Z]; ) if (1 === E.nodeType || F) if (Q = (x = E[O] || (E[O] = {}))[E.uniqueID] || (x[E.uniqueID] = {}),
                        k && k === E.nodeName.toLowerCase()) E = E[Z] || E; else {
                            if ((B = Q[C]) && B[0] === e && B[1] === P) return U[2] = B[2];
                            if (Q[C] = U, U[2] = p(E, D, M)) return !0;
                        }
                        return !1;
                    };
                }
                function aO(p) {
                    return p.length > 1 ? function(E, D, Z) {
                        for (var k = p.length; k--; ) if (!p[k](E, D, Z)) return !1;
                        return !0;
                    } : p[0];
                }
                function vp(p, E, D) {
                    for (var Z = 0, k = E.length; Z < k; Z++) el(p, E[Z], D);
                    return D;
                }
                function iu(p, E, D, Z, k) {
                    for (var C, F = [], P = 0, M = p.length, B = null != E; P < M; P++) (C = p[P]) && (D && !D(C, Z, k) || (F.push(C),
                    B && E.push(P)));
                    return F;
                }
                function Za(p, E, D, Z, k, C) {
                    return Z && !Z[O] && (Z = Za(Z)), k && !k[O] && (k = Za(k, C)), VM((function(C, F, P, M) {
                        var B, Q, x, U = [], N = [], l = F.length, z = C || vp(E || "*", P.nodeType ? [ P ] : P, []), J = !p || !C && E ? z : iu(z, U, p, P, M), S = D ? k || (C ? p : l || Z) ? [] : F : J;
                        if (D && D(J, S, P, M), Z) for (B = iu(S, N), Z(B, [], P, M), Q = B.length; Q--; ) (x = B[Q]) && (S[N[Q]] = !(J[N[Q]] = x));
                        if (C) {
                            if (k || p) {
                                if (k) {
                                    for (B = [], Q = S.length; Q--; ) (x = S[Q]) && B.push(J[Q] = x);
                                    k(null, S = [], B, M);
                                }
                                for (Q = S.length; Q--; ) (x = S[Q]) && (B = k ? c(C, x) : U[Q]) > -1 && (C[B] = !(F[B] = x));
                            }
                        } else S = iu(S === F ? S.splice(l, S.length) : S), k ? k(null, F, S, M) : a.apply(F, S);
                    }));
                }
                function fz(p) {
                    for (var E, D, k, C = p.length, F = Z.relative[p[0].type], P = F || Z.relative[" "], M = F ? 1 : 0, Q = BL((function(p) {
                        return p === E;
                    }), P, !0), x = BL((function(p) {
                        return c(E, p) > -1;
                    }), P, !0), U = [ function(p, D, Z) {
                        var k = !F && (Z || D !== B) || ((E = D).nodeType ? Q(p, D, Z) : x(p, D, Z));
                        return E = null, k;
                    } ]; M < C; M++) if (D = Z.relative[p[M].type]) U = [ BL(aO(U), D) ]; else {
                        if ((D = Z.filter[p[M].type].apply(null, p[M].matches))[O]) {
                            for (k = ++M; k < C && !Z.relative[p[k].type]; k++) ;
                            return Za(M > 1 && aO(U), M > 1 && fa(p.slice(0, M - 1).concat({
                                value: " " === p[M - 2].type ? "*" : ""
                            })).replace(w, "$1"), D, M < k && fz(p.slice(M, k)), k < C && fz(p = p.slice(k)), k < C && fa(p));
                        }
                        U.push(D);
                    }
                    return aO(U);
                }
                function Gy(p, E) {
                    var D = E.length > 0, k = p.length > 0, C = function(C, F, P, M, Q) {
                        var x, l, J, S = 0, h = "0", o = C && [], O = [], q = B, H = C || k && Z.find["TAG"]("*", Q), m = e += null == q ? 1 : Math.random() || .1, R = H.length;
                        for (Q && (B = F == N || F || Q); h !== R && null != (x = H[h]); h++) {
                            if (k && x) {
                                for (l = 0, F || x.ownerDocument == N || (U(x), P = !z); J = p[l++]; ) if (J(x, F || N, P)) {
                                    M.push(x);
                                    break;
                                }
                                Q && (e = m);
                            }
                            D && ((x = !J && x) && S--, C && o.push(x));
                        }
                        if (S += h, D && h !== S) {
                            for (l = 0; J = E[l++]; ) J(o, O, F, P);
                            if (C) {
                                if (S > 0) for (;h--; ) o[h] || O[h] || (O[h] = v.call(M));
                                O = iu(O);
                            }
                            a.apply(M, O), Q && !C && O.length > 0 && S + E.length > 1 && el.uniqueSort(M);
                        }
                        return Q && (e = m, B = q), o;
                    };
                    return D ? VM(C) : C;
                }
                return IT.prototype = Z.filters = Z.pseudos, Z.setFilters = new IT, F = el.tokenize = function(p, E) {
                    var D, k, C, F, P, M, B, Q = R[p + " "];
                    if (Q) return E ? 0 : Q.slice(0);
                    for (P = p, M = [], B = Z.preFilter; P; ) {
                        for (F in D && !(k = y.exec(P)) || (k && (P = P.slice(k[0].length) || P), M.push(C = [])),
                        D = !1, (k = t.exec(P)) && (D = k.shift(), C.push({
                            value: D,
                            type: k[0].replace(w, " ")
                        }), P = P.slice(D.length)), Z.filter) !(k = G[F].exec(P)) || B[F] && !(k = B[F](k)) || (D = k.shift(),
                        C.push({
                            value: D,
                            type: F,
                            matches: k
                        }), P = P.slice(D.length));
                        if (!D) break;
                    }
                    return E ? P.length : P ? el.error(p) : R(p, M).slice(0);
                }, P = el.compile = function(p, E) {
                    var D, Z = [], k = [], C = i[p + " "];
                    if (!C) {
                        for (E || (E = F(p)), D = E.length; D--; ) (C = fz(E[D]))[O] ? Z.push(C) : k.push(C);
                        (C = i(p, Gy(k, Z))).selector = p;
                    }
                    return C;
                }, M = el.select = function(p, E, D, k) {
                    var C, M, B, Q, x, U = "function" == typeof p && p, N = !k && F(p = U.selector || p);
                    if (D = D || [], 1 === N.length) {
                        if ((M = N[0] = N[0].slice(0)).length > 2 && "ID" === (B = M[0]).type && 9 === E.nodeType && z && Z.relative[M[1].type]) {
                            if (!(E = (Z.find["ID"](B.matches[0].replace(hI, JX), E) || [])[0])) return D;
                            U && (E = E.parentNode), p = p.slice(M.shift().value.length);
                        }
                        for (C = G["needsContext"].test(p) ? 0 : M.length; C-- && (B = M[C], !Z.relative[Q = B.type]); ) if ((x = Z.find[Q]) && (k = x(B.matches[0].replace(hI, JX), hu.test(M[0].type) && Su(E.parentNode) || E))) {
                            if (M.splice(C, 1), !(p = k.length && fa(M))) return a.apply(D, k), D;
                            break;
                        }
                    }
                    return (U || P(p, N))(k, E, !z, D, !E || hu.test(p) && Su(E.parentNode) || E), D;
                }, D.sortStable = O.split("").sort(K).join("") === O, D.detectDuplicates = !!x,
                U(), D.sortDetached = tN((function(p) {
                    return 1 & p.compareDocumentPosition(N.createElement("fieldset"));
                })), tN((function(p) {
                    return p.innerHTML = "<a href='#'></a>", "#" === p.firstChild.getAttribute("href");
                })) || TF("type|href|height|width", (function(p, E, D) {
                    if (!D) return p.getAttribute(E, "type" === E.toLowerCase() ? 1 : 2);
                })), D.attributes && tN((function(p) {
                    return p.innerHTML = "<input/>", p.firstChild.setAttribute("value", ""), "" === p.firstChild.getAttribute("value");
                })) || TF("value", (function(p, E, D) {
                    if (!D && "input" === p.nodeName.toLowerCase()) return p.defaultValue;
                })), tN((function(p) {
                    return null == p.getAttribute("disabled");
                })) || TF(u, (function(p, E, D) {
                    var Z;
                    if (!D) return !0 === p[E] ? E.toLowerCase() : (Z = p.getAttributeNode(E)) && Z.specified ? Z.value : null;
                })), el;
            }(p);
            q.find = H, q.expr = H.selectors, q.expr[":"] = q.expr.pseudos, q.uniqueSort = q.unique = H.uniqueSort,
            q.text = H.getText, q.isXMLDoc = H.isXML, q.contains = H.contains, q.escapeSelector = H.escape;
            var m = function(p, E, D) {
                for (var Z = [], k = void 0 !== D; (p = p[E]) && 9 !== p.nodeType; ) if (1 === p.nodeType) {
                    if (k && q(p).is(D)) break;
                    Z.push(p);
                }
                return Z;
            }, R = function(p, E) {
                for (var D = []; p; p = p.nextSibling) 1 === p.nodeType && p !== E && D.push(p);
                return D;
            }, i = q.expr.match.needsContext;
            function Y(p, E) {
                return p.nodeName && p.nodeName.toLowerCase() === E.toLowerCase();
            }
            var K = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function b(p, E, D) {
                return l(E) ? q.grep(p, (function(p, Z) {
                    return !!E.call(p, Z, p) !== D;
                })) : E.nodeType ? q.grep(p, (function(p) {
                    return p === E !== D;
                })) : "string" != typeof E ? q.grep(p, (function(p) {
                    return P.call(E, p) > -1 !== D;
                })) : q.filter(E, p, D);
            }
            q.filter = function(p, E, D) {
                var Z = E[0];
                return D && (p = ":not(" + p + ")"), 1 === E.length && 1 === Z.nodeType ? q.find.matchesSelector(Z, p) ? [ Z ] : [] : q.find.matches(p, q.grep(E, (function(p) {
                    return 1 === p.nodeType;
                })));
            }, q.fn.extend({
                find: function(p) {
                    var E, D, Z = this.length, k = this;
                    if ("string" != typeof p) return this.pushStack(q(p).filter((function() {
                        for (E = 0; E < Z; E++) if (q.contains(k[E], this)) return !0;
                    })));
                    for (D = this.pushStack([]), E = 0; E < Z; E++) q.find(p, k[E], D);
                    return Z > 1 ? q.uniqueSort(D) : D;
                },
                filter: function(p) {
                    return this.pushStack(b(this, p || [], !1));
                },
                not: function(p) {
                    return this.pushStack(b(this, p || [], !0));
                },
                is: function(p) {
                    return !!b(this, "string" == typeof p && i.test(p) ? q(p) : p || [], !1).length;
                }
            });
            var A, v = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, T;
            (q.fn.init = function(p, E, D) {
                var Z, k;
                if (!p) return this;
                if (D = D || A, "string" == typeof p) {
                    if (!(Z = "<" === p[0] && ">" === p[p.length - 1] && p.length >= 3 ? [ null, p, null ] : v.exec(p)) || !Z[1] && E) return !E || E.jquery ? (E || D).find(p) : this.constructor(E).find(p);
                    if (Z[1]) {
                        if (E = E instanceof q ? E[0] : E, q.merge(this, q.parseHTML(Z[1], E && E.nodeType ? E.ownerDocument || E : J, !0)),
                        K.test(Z[1]) && q.isPlainObject(E)) for (Z in E) l(this[Z]) ? this[Z](E[Z]) : this.attr(Z, E[Z]);
                        return this;
                    }
                    return (k = J.getElementById(Z[2])) && (this[0] = k, this.length = 1), this;
                }
                return p.nodeType ? (this[0] = p, this.length = 1, this) : l(p) ? void 0 !== D.ready ? D.ready(p) : p(q) : q.makeArray(p, this);
            }).prototype = q.fn, A = q(J);
            var a = /^(?:parents|prev(?:Until|All))/, j = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
            function c(p, E) {
                for (;(p = p[E]) && 1 !== p.nodeType; ) ;
                return p;
            }
            q.fn.extend({
                has: function(p) {
                    var E = q(p, this), D = E.length;
                    return this.filter((function() {
                        for (var p = 0; p < D; p++) if (q.contains(this, E[p])) return !0;
                    }));
                },
                closest: function(p, E) {
                    var D, Z = 0, k = this.length, C = [], F = "string" != typeof p && q(p);
                    if (!i.test(p)) for (;Z < k; Z++) for (D = this[Z]; D && D !== E; D = D.parentNode) if (D.nodeType < 11 && (F ? F.index(D) > -1 : 1 === D.nodeType && q.find.matchesSelector(D, p))) {
                        C.push(D);
                        break;
                    }
                    return this.pushStack(C.length > 1 ? q.uniqueSort(C) : C);
                },
                index: function(p) {
                    return p ? "string" == typeof p ? P.call(q(p), this[0]) : P.call(this, p.jquery ? p[0] : p) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function(p, E) {
                    return this.pushStack(q.uniqueSort(q.merge(this.get(), q(p, E))));
                },
                addBack: function(p) {
                    return this.add(null == p ? this.prevObject : this.prevObject.filter(p));
                }
            }), q.each({
                parent: function(p) {
                    var E = p.parentNode;
                    return E && 11 !== E.nodeType ? E : null;
                },
                parents: function(p) {
                    return m(p, "parentNode");
                },
                parentsUntil: function(p, E, D) {
                    return m(p, "parentNode", D);
                },
                next: function(p) {
                    return c(p, "nextSibling");
                },
                prev: function(p) {
                    return c(p, "previousSibling");
                },
                nextAll: function(p) {
                    return m(p, "nextSibling");
                },
                prevAll: function(p) {
                    return m(p, "previousSibling");
                },
                nextUntil: function(p, E, D) {
                    return m(p, "nextSibling", D);
                },
                prevUntil: function(p, E, D) {
                    return m(p, "previousSibling", D);
                },
                siblings: function(p) {
                    return R((p.parentNode || {}).firstChild, p);
                },
                children: function(p) {
                    return R(p.firstChild);
                },
                contents: function(p) {
                    return null != p.contentDocument && Z(p.contentDocument) ? p.contentDocument : (Y(p, "template") && (p = p.content || p),
                    q.merge([], p.childNodes));
                }
            }, (function(p, E) {
                q.fn[p] = function(D, Z) {
                    var k = q.map(this, E, D);
                    return "Until" !== p.slice(-5) && (Z = D), Z && "string" == typeof Z && (k = q.filter(Z, k)),
                    this.length > 1 && (j[p] || q.uniqueSort(k), a.test(p) && k.reverse()), this.pushStack(k);
                };
            }));
            var u = /[^\x20\t\r\n\f]+/g;
            function r(p) {
                var E = {};
                return q.each(p.match(u) || [], (function(p, D) {
                    E[D] = !0;
                })), E;
            }
            function d(p) {
                return p;
            }
            function L(p) {
                throw p;
            }
            function s(p, E, D, Z) {
                var k;
                try {
                    p && l(k = p.promise) ? k.call(p).done(E).fail(D) : p && l(k = p.then) ? k.call(p, E, D) : E.apply(void 0, [ p ].slice(Z));
                } catch (p) {
                    D.apply(void 0, [ p ]);
                }
            }
            q.Callbacks = function(p) {
                p = "string" == typeof p ? r(p) : q.extend({}, p);
                var E, D, Z, k, C = [], F = [], P = -1, M = function() {
                    for (k = k || p.once, Z = E = !0; F.length; P = -1) for (D = F.shift(); ++P < C.length; ) !1 === C[P].apply(D[0], D[1]) && p.stopOnFalse && (P = C.length,
                    D = !1);
                    p.memory || (D = !1), E = !1, k && (C = D ? [] : "");
                }, B = {
                    add: function() {
                        return C && (D && !E && (P = C.length - 1, F.push(D)), function E(D) {
                            q.each(D, (function(D, Z) {
                                l(Z) ? p.unique && B.has(Z) || C.push(Z) : Z && Z.length && "string" !== o(Z) && E(Z);
                            }));
                        }(arguments), D && !E && M()), this;
                    },
                    remove: function() {
                        return q.each(arguments, (function(p, E) {
                            for (var D; (D = q.inArray(E, C, D)) > -1; ) C.splice(D, 1), D <= P && P--;
                        })), this;
                    },
                    has: function(p) {
                        return p ? q.inArray(p, C) > -1 : C.length > 0;
                    },
                    empty: function() {
                        return C && (C = []), this;
                    },
                    disable: function() {
                        return k = F = [], C = D = "", this;
                    },
                    disabled: function() {
                        return !C;
                    },
                    lock: function() {
                        return k = F = [], D || E || (C = D = ""), this;
                    },
                    locked: function() {
                        return !!k;
                    },
                    fireWith: function(p, D) {
                        return k || (D = [ p, (D = D || []).slice ? D.slice() : D ], F.push(D), E || M()),
                        this;
                    },
                    fire: function() {
                        return B.fireWith(this, arguments), this;
                    },
                    fired: function() {
                        return !!Z;
                    }
                };
                return B;
            }, q.extend({
                Deferred: function(E) {
                    var D = [ [ "notify", "progress", q.Callbacks("memory"), q.Callbacks("memory"), 2 ], [ "resolve", "done", q.Callbacks("once memory"), q.Callbacks("once memory"), 0, "resolved" ], [ "reject", "fail", q.Callbacks("once memory"), q.Callbacks("once memory"), 1, "rejected" ] ], Z = "pending", k = {
                        state: function() {
                            return Z;
                        },
                        always: function() {
                            return C.done(arguments).fail(arguments), this;
                        },
                        catch: function(p) {
                            return k.then(null, p);
                        },
                        pipe: function() {
                            var p = arguments;
                            return q.Deferred((function(E) {
                                q.each(D, (function(D, Z) {
                                    var k = l(p[Z[4]]) && p[Z[4]];
                                    C[Z[1]]((function() {
                                        var p = k && k.apply(this, arguments);
                                        p && l(p.promise) ? p.promise().progress(E.notify).done(E.resolve).fail(E.reject) : E[Z[0] + "With"](this, k ? [ p ] : arguments);
                                    }));
                                })), p = null;
                            })).promise();
                        },
                        then: function(E, Z, k) {
                            var C = 0;
                            function F(E, D, Z, k) {
                                return function() {
                                    var P = this, M = arguments, B = function() {
                                        var p, B;
                                        if (!(E < C)) {
                                            if ((p = Z.apply(P, M)) === D.promise()) throw new TypeError("Thenable self-resolution");
                                            B = p && ("object" == typeof p || "function" == typeof p) && p.then, l(B) ? k ? B.call(p, F(C, D, d, k), F(C, D, L, k)) : (C++,
                                            B.call(p, F(C, D, d, k), F(C, D, L, k), F(C, D, d, D.notifyWith))) : (Z !== d && (P = void 0,
                                            M = [ p ]), (k || D.resolveWith)(P, M));
                                        }
                                    }, Q = k ? B : function() {
                                        try {
                                            B();
                                        } catch (p) {
                                            q.Deferred.exceptionHook && q.Deferred.exceptionHook(p, Q.stackTrace), E + 1 >= C && (Z !== L && (P = void 0,
                                            M = [ p ]), D.rejectWith(P, M));
                                        }
                                    };
                                    E ? Q() : (q.Deferred.getStackHook && (Q.stackTrace = q.Deferred.getStackHook()),
                                    p.setTimeout(Q));
                                };
                            }
                            return q.Deferred((function(p) {
                                D[0][3].add(F(0, p, l(k) ? k : d, p.notifyWith)), D[1][3].add(F(0, p, l(E) ? E : d)),
                                D[2][3].add(F(0, p, l(Z) ? Z : L));
                            })).promise();
                        },
                        promise: function(p) {
                            return null != p ? q.extend(p, k) : k;
                        }
                    }, C = {};
                    return q.each(D, (function(p, E) {
                        var F = E[2], P = E[5];
                        k[E[1]] = F.add, P && F.add((function() {
                            Z = P;
                        }), D[3 - p][2].disable, D[3 - p][3].disable, D[0][2].lock, D[0][3].lock), F.add(E[3].fire),
                        C[E[0]] = function() {
                            return C[E[0] + "With"](this === C ? void 0 : this, arguments), this;
                        }, C[E[0] + "With"] = F.fireWith;
                    })), k.promise(C), E && E.call(C, C), C;
                },
                when: function(p) {
                    var E = arguments.length, D = E, Z = Array(D), C = k.call(arguments), F = q.Deferred(), P = function(p) {
                        return function(D) {
                            Z[p] = this, C[p] = arguments.length > 1 ? k.call(arguments) : D, --E || F.resolveWith(Z, C);
                        };
                    };
                    if (E <= 1 && (s(p, F.done(P(D)).resolve, F.reject, !E), "pending" === F.state() || l(C[D] && C[D].then))) return F.then();
                    for (;D--; ) s(C[D], P(D), F.reject);
                    return F.promise();
                }
            });
            var n = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            q.Deferred.exceptionHook = function(E, D) {
                p.console && p.console.warn && E && n.test(E.name) && p.console.warn("jQuery.Deferred exception: " + E.message, E.stack, D);
            }, q.readyException = function(E) {
                p.setTimeout((function() {
                    throw E;
                }));
            };
            var w = q.Deferred();
            function y() {
                J.removeEventListener("DOMContentLoaded", y), p.removeEventListener("load", y),
                q.ready();
            }
            q.fn.ready = function(p) {
                return w.then(p).catch((function(p) {
                    q.readyException(p);
                })), this;
            }, q.extend({
                isReady: !1,
                readyWait: 1,
                ready: function(p) {
                    (!0 === p ? --q.readyWait : q.isReady) || (q.isReady = !0, !0 !== p && --q.readyWait > 0 || w.resolveWith(J, [ q ]));
                }
            }), q.ready.then = w.then, "complete" === J.readyState || "loading" !== J.readyState && !J.documentElement.doScroll ? p.setTimeout(q.ready) : (J.addEventListener("DOMContentLoaded", y),
            p.addEventListener("load", y));
            var t = function(p, E, D, Z, k, C, F) {
                var P = 0, M = p.length, B = null == D;
                if ("object" === o(D)) for (P in k = !0, D) t(p, E, P, D[P], !0, C, F); else if (void 0 !== Z && (k = !0,
                l(Z) || (F = !0), B && (F ? (E.call(p, Z), E = null) : (B = E, E = function(p, E, D) {
                    return B.call(q(p), D);
                })), E)) for (;P < M; P++) E(p[P], D, F ? Z : Z.call(p[P], P, E(p[P], D)));
                return k ? p : B ? E.call(p) : M ? E(p[0], D) : C;
            }, W = /^-ms-/, g = /-([a-z])/g;
            function f(p, E) {
                return E.toUpperCase();
            }
            function G(p) {
                return p.replace(W, "ms-").replace(g, f);
            }
            var I = function(p) {
                return 1 === p.nodeType || 9 === p.nodeType || !+p.nodeType;
            };
            function X() {
                this.expando = q.expando + X.uid++;
            }
            X.uid = 1, X.prototype = {
                cache: function(p) {
                    var E = p[this.expando];
                    return E || (E = {}, I(p) && (p.nodeType ? p[this.expando] = E : Object.defineProperty(p, this.expando, {
                        value: E,
                        configurable: !0
                    }))), E;
                },
                set: function(p, E, D) {
                    var Z, k = this.cache(p);
                    if ("string" == typeof E) k[G(E)] = D; else for (Z in E) k[G(Z)] = E[Z];
                    return k;
                },
                get: function(p, E) {
                    return void 0 === E ? this.cache(p) : p[this.expando] && p[this.expando][G(E)];
                },
                access: function(p, E, D) {
                    return void 0 === E || E && "string" == typeof E && void 0 === D ? this.get(p, E) : (this.set(p, E, D),
                    void 0 !== D ? D : E);
                },
                remove: function(p, E) {
                    var D, Z = p[this.expando];
                    if (void 0 !== Z) {
                        if (void 0 !== E) {
                            D = (E = Array.isArray(E) ? E.map(G) : (E = G(E)) in Z ? [ E ] : E.match(u) || []).length;
                            for (;D--; ) delete Z[E[D]];
                        }
                        (void 0 === E || q.isEmptyObject(Z)) && (p.nodeType ? p[this.expando] = void 0 : delete p[this.expando]);
                    }
                },
                hasData: function(p) {
                    var E = p[this.expando];
                    return void 0 !== E && !q.isEmptyObject(E);
                }
            };
            var V = new X, wW = new X, uQ = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, hu = /[A-Z]/g;
            function hI(p) {
                return "true" === p || "false" !== p && ("null" === p ? null : p === +p + "" ? +p : uQ.test(p) ? JSON.parse(p) : p);
            }
            function JX(p, E, D) {
                var Z;
                if (void 0 === D && 1 === p.nodeType) if (Z = "data-" + E.replace(hu, "-$&").toLowerCase(),
                "string" == typeof (D = p.getAttribute(Z))) {
                    try {
                        D = hI(D);
                    } catch (p) {}
                    wW.set(p, E, D);
                } else D = void 0;
                return D;
            }
            q.extend({
                hasData: function(p) {
                    return wW.hasData(p) || V.hasData(p);
                },
                data: function(p, E, D) {
                    return wW.access(p, E, D);
                },
                removeData: function(p, E) {
                    wW.remove(p, E);
                },
                _data: function(p, E, D) {
                    return V.access(p, E, D);
                },
                _removeData: function(p, E) {
                    V.remove(p, E);
                }
            }), q.fn.extend({
                data: function(p, E) {
                    var D, Z, k, C = this[0], F = C && C.attributes;
                    if (void 0 === p) {
                        if (this.length && (k = wW.get(C), 1 === C.nodeType && !V.get(C, "hasDataAttrs"))) {
                            for (D = F.length; D--; ) F[D] && 0 === (Z = F[D].name).indexOf("data-") && (Z = G(Z.slice(5)),
                            JX(C, Z, k[Z]));
                            V.set(C, "hasDataAttrs", !0);
                        }
                        return k;
                    }
                    return "object" == typeof p ? this.each((function() {
                        wW.set(this, p);
                    })) : t(this, (function(E) {
                        var D;
                        if (C && void 0 === E) return void 0 !== (D = wW.get(C, p)) || void 0 !== (D = JX(C, p)) ? D : void 0;
                        this.each((function() {
                            wW.set(this, p, E);
                        }));
                    }), null, E, arguments.length > 1, null, !0);
                },
                removeData: function(p) {
                    return this.each((function() {
                        wW.remove(this, p);
                    }));
                }
            }), q.extend({
                queue: function(p, E, D) {
                    var Z;
                    if (p) return E = (E || "fx") + "queue", Z = V.get(p, E), D && (!Z || Array.isArray(D) ? Z = V.access(p, E, q.makeArray(D)) : Z.push(D)),
                    Z || [];
                },
                dequeue: function(p, E) {
                    E = E || "fx";
                    var D = q.queue(p, E), Z = D.length, k = D.shift(), C = q._queueHooks(p, E), F = function() {
                        q.dequeue(p, E);
                    };
                    "inprogress" === k && (k = D.shift(), Z--), k && ("fx" === E && D.unshift("inprogress"),
                    delete C.stop, k.call(p, F, C)), !Z && C && C.empty.fire();
                },
                _queueHooks: function(p, E) {
                    var D = E + "queueHooks";
                    return V.get(p, D) || V.access(p, D, {
                        empty: q.Callbacks("once memory").add((function() {
                            V.remove(p, [ E + "queue", D ]);
                        }))
                    });
                }
            }), q.fn.extend({
                queue: function(p, E) {
                    var D = 2;
                    return "string" != typeof p && (E = p, p = "fx", D--), arguments.length < D ? q.queue(this[0], p) : void 0 === E ? this : this.each((function() {
                        var D = q.queue(this, p, E);
                        q._queueHooks(this, p), "fx" === p && "inprogress" !== D[0] && q.dequeue(this, p);
                    }));
                },
                dequeue: function(p) {
                    return this.each((function() {
                        q.dequeue(this, p);
                    }));
                },
                clearQueue: function(p) {
                    return this.queue(p || "fx", []);
                },
                promise: function(p, E) {
                    var D, Z = 1, k = q.Deferred(), C = this, F = this.length, P = function() {
                        --Z || k.resolveWith(C, [ C ]);
                    };
                    for ("string" != typeof p && (E = p, p = void 0), p = p || "fx"; F--; ) (D = V.get(C[F], p + "queueHooks")) && D.empty && (Z++,
                    D.empty.add(P));
                    return P(), k.promise(E);
                }
            });
            var oX = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Wj = new RegExp("^(?:([+-])=|)(" + oX + ")([a-z%]*)$", "i"), Gx = [ "Top", "Right", "Bottom", "Left" ], mw = J.documentElement, el = function(p) {
                return q.contains(p.ownerDocument, p);
            }, ss = {
                composed: !0
            };
            mw.getRootNode && (el = function(p) {
                return q.contains(p.ownerDocument, p) || p.getRootNode(ss) === p.ownerDocument;
            });
            var VM = function(p, E) {
                return "none" === (p = E || p).style.display || "" === p.style.display && el(p) && "none" === q.css(p, "display");
            };
            function tN(p, E, D, Z) {
                var k, C, F = 20, P = Z ? function() {
                    return Z.cur();
                } : function() {
                    return q.css(p, E, "");
                }, M = P(), B = D && D[3] || (q.cssNumber[E] ? "" : "px"), Q = p.nodeType && (q.cssNumber[E] || "px" !== B && +M) && Wj.exec(q.css(p, E));
                if (Q && Q[3] !== B) {
                    for (M /= 2, B = B || Q[3], Q = +M || 1; F--; ) q.style(p, E, Q + B), (1 - C) * (1 - (C = P() / M || .5)) <= 0 && (F = 0),
                    Q /= C;
                    Q *= 2, q.style(p, E, Q + B), D = D || [];
                }
                return D && (Q = +Q || +M || 0, k = D[1] ? Q + (D[1] + 1) * D[2] : +D[2], Z && (Z.unit = B,
                Z.start = Q, Z.end = k)), k;
            }
            var TF = {};
            function ys(p) {
                var E, D = p.ownerDocument, Z = p.nodeName, k = TF[Z];
                return k || (E = D.body.appendChild(D.createElement(Z)), k = q.css(E, "display"),
                E.parentNode.removeChild(E), "none" === k && (k = "block"), TF[Z] = k, k);
            }
            function Mg(p, E) {
                for (var D, Z, k = [], C = 0, F = p.length; C < F; C++) (Z = p[C]).style && (D = Z.style.display,
                E ? ("none" === D && (k[C] = V.get(Z, "display") || null, k[C] || (Z.style.display = "")),
                "" === Z.style.display && VM(Z) && (k[C] = ys(Z))) : "none" !== D && (k[C] = "none",
                V.set(Z, "display", D)));
                for (C = 0; C < F; C++) null != k[C] && (p[C].style.display = k[C]);
                return p;
            }
            q.fn.extend({
                show: function() {
                    return Mg(this, !0);
                },
                hide: function() {
                    return Mg(this);
                },
                toggle: function(p) {
                    return "boolean" == typeof p ? p ? this.show() : this.hide() : this.each((function() {
                        VM(this) ? q(this).show() : q(this).hide();
                    }));
                }
            });
            var kL = /^(?:checkbox|radio)$/i, Zk = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, sv = /^$|^module$|\/(?:java|ecma)script/i;
            !function() {
                var p, E = J.createDocumentFragment().appendChild(J.createElement("div")), D = J.createElement("input");
                D.setAttribute("type", "radio"), D.setAttribute("checked", "checked"), D.setAttribute("name", "t"),
                E.appendChild(D), N.checkClone = E.cloneNode(!0).cloneNode(!0).lastChild.checked,
                E.innerHTML = "<textarea>x</textarea>", N.noCloneChecked = !!E.cloneNode(!0).lastChild.defaultValue,
                E.innerHTML = "<option></option>", N.option = !!E.lastChild;
            }();
            var Su = {
                thead: [ 1, "<table>", "</table>" ],
                col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
                tr: [ 2, "<table><tbody>", "</tbody></table>" ],
                td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
                _default: [ 0, "", "" ]
            };
            function IT(p, E) {
                var D;
                return D = void 0 !== p.getElementsByTagName ? p.getElementsByTagName(E || "*") : void 0 !== p.querySelectorAll ? p.querySelectorAll(E || "*") : [],
                void 0 === E || E && Y(p, E) ? q.merge([ p ], D) : D;
            }
            function fa(p, E) {
                for (var D = 0, Z = p.length; D < Z; D++) V.set(p[D], "globalEval", !E || V.get(E[D], "globalEval"));
            }
            Su.tbody = Su.tfoot = Su.colgroup = Su.caption = Su.thead, Su.th = Su.td, N.option || (Su.optgroup = Su.option = [ 1, "<select multiple='multiple'>", "</select>" ]);
            var BL = /<|&#?\w+;/;
            function aO(p, E, D, Z, k) {
                for (var C, F, P, M, B, Q, x = E.createDocumentFragment(), U = [], N = 0, l = p.length; N < l; N++) if ((C = p[N]) || 0 === C) if ("object" === o(C)) q.merge(U, C.nodeType ? [ C ] : C); else if (BL.test(C)) {
                    for (F = F || x.appendChild(E.createElement("div")), P = (Zk.exec(C) || [ "", "" ])[1].toLowerCase(),
                    M = Su[P] || Su._default, F.innerHTML = M[1] + q.htmlPrefilter(C) + M[2], Q = M[0]; Q--; ) F = F.lastChild;
                    q.merge(U, F.childNodes), (F = x.firstChild).textContent = "";
                } else U.push(E.createTextNode(C));
                for (x.textContent = "", N = 0; C = U[N++]; ) if (Z && q.inArray(C, Z) > -1) k && k.push(C); else if (B = el(C),
                F = IT(x.appendChild(C), "script"), B && fa(F), D) for (Q = 0; C = F[Q++]; ) sv.test(C.type || "") && D.push(C);
                return x;
            }
            var vp = /^([^.]*)(?:\.(.+)|)/;
            function iu() {
                return !0;
            }
            function Za() {
                return !1;
            }
            function fz(p, E) {
                return p === Gy() == ("focus" === E);
            }
            function Gy() {
                try {
                    return J.activeElement;
                } catch (p) {}
            }
            function VA(p, E, D, Z, k, C) {
                var F, P;
                if ("object" == typeof E) {
                    for (P in "string" != typeof D && (Z = Z || D, D = void 0), E) VA(p, P, D, Z, E[P], C);
                    return p;
                }
                if (null == Z && null == k ? (k = D, Z = D = void 0) : null == k && ("string" == typeof D ? (k = Z,
                Z = void 0) : (k = Z, Z = D, D = void 0)), !1 === k) k = Za; else if (!k) return p;
                return 1 === C && (F = k, k = function(p) {
                    return q().off(p), F.apply(this, arguments);
                }, k.guid = F.guid || (F.guid = q.guid++)), p.each((function() {
                    q.event.add(this, E, k, Z, D);
                }));
            }
            function Xv(p, E, D) {
                D ? (V.set(p, E, !1), q.event.add(p, E, {
                    namespace: !1,
                    handler: function(p) {
                        var Z, C, F = V.get(this, E);
                        if (1 & p.isTrigger && this[E]) {
                            if (F.length) (q.event.special[E] || {}).delegateType && p.stopPropagation(); else if (F = k.call(arguments),
                            V.set(this, E, F), Z = D(this, E), this[E](), F !== (C = V.get(this, E)) || Z ? V.set(this, E, !1) : C = {},
                            F !== C) return p.stopImmediatePropagation(), p.preventDefault(), C && C.value;
                        } else F.length && (V.set(this, E, {
                            value: q.event.trigger(q.extend(F[0], q.Event.prototype), F.slice(1), this)
                        }), p.stopImmediatePropagation());
                    }
                })) : void 0 === V.get(p, E) && q.event.add(p, E, iu);
            }
            q.event = {
                global: {},
                add: function(p, E, D, Z, k) {
                    var C, F, P, M, B, Q, x, U, N, l, z, J = V.get(p);
                    if (I(p)) for (D.handler && (D = (C = D).handler, k = C.selector), k && q.find.matchesSelector(mw, k),
                    D.guid || (D.guid = q.guid++), (M = J.events) || (M = J.events = Object.create(null)),
                    (F = J.handle) || (F = J.handle = function(E) {
                        return void 0 !== q && q.event.triggered !== E.type ? q.event.dispatch.apply(p, arguments) : void 0;
                    }), B = (E = (E || "").match(u) || [ "" ]).length; B--; ) N = z = (P = vp.exec(E[B]) || [])[1],
                    l = (P[2] || "").split(".").sort(), N && (x = q.event.special[N] || {}, N = (k ? x.delegateType : x.bindType) || N,
                    x = q.event.special[N] || {}, Q = q.extend({
                        type: N,
                        origType: z,
                        data: Z,
                        handler: D,
                        guid: D.guid,
                        selector: k,
                        needsContext: k && q.expr.match.needsContext.test(k),
                        namespace: l.join(".")
                    }, C), (U = M[N]) || ((U = M[N] = []).delegateCount = 0, x.setup && !1 !== x.setup.call(p, Z, l, F) || p.addEventListener && p.addEventListener(N, F)),
                    x.add && (x.add.call(p, Q), Q.handler.guid || (Q.handler.guid = D.guid)), k ? U.splice(U.delegateCount++, 0, Q) : U.push(Q),
                    q.event.global[N] = !0);
                },
                remove: function(p, E, D, Z, k) {
                    var C, F, P, M, B, Q, x, U, N, l, z, J = V.hasData(p) && V.get(p);
                    if (J && (M = J.events)) {
                        for (B = (E = (E || "").match(u) || [ "" ]).length; B--; ) if (N = z = (P = vp.exec(E[B]) || [])[1],
                        l = (P[2] || "").split(".").sort(), N) {
                            for (x = q.event.special[N] || {}, U = M[N = (Z ? x.delegateType : x.bindType) || N] || [],
                            P = P[2] && new RegExp("(^|\\.)" + l.join("\\.(?:.*\\.|)") + "(\\.|$)"), F = C = U.length; C--; ) Q = U[C],
                            !k && z !== Q.origType || D && D.guid !== Q.guid || P && !P.test(Q.namespace) || Z && Z !== Q.selector && ("**" !== Z || !Q.selector) || (U.splice(C, 1),
                            Q.selector && U.delegateCount--, x.remove && x.remove.call(p, Q));
                            F && !U.length && (x.teardown && !1 !== x.teardown.call(p, l, J.handle) || q.removeEvent(p, N, J.handle),
                            delete M[N]);
                        } else for (N in M) q.event.remove(p, N + E[B], D, Z, !0);
                        q.isEmptyObject(M) && V.remove(p, "handle events");
                    }
                },
                dispatch: function(p) {
                    var E, D, Z, k, C, F, P = new Array(arguments.length), M = q.event.fix(p), B = (V.get(this, "events") || Object.create(null))[M.type] || [], Q = q.event.special[M.type] || {};
                    for (P[0] = M, E = 1; E < arguments.length; E++) P[E] = arguments[E];
                    if (M.delegateTarget = this, !Q.preDispatch || !1 !== Q.preDispatch.call(this, M)) {
                        for (F = q.event.handlers.call(this, M, B), E = 0; (k = F[E++]) && !M.isPropagationStopped(); ) for (M.currentTarget = k.elem,
                        D = 0; (C = k.handlers[D++]) && !M.isImmediatePropagationStopped(); ) M.rnamespace && !1 !== C.namespace && !M.rnamespace.test(C.namespace) || (M.handleObj = C,
                        M.data = C.data, void 0 !== (Z = ((q.event.special[C.origType] || {}).handle || C.handler).apply(k.elem, P)) && !1 === (M.result = Z) && (M.preventDefault(),
                        M.stopPropagation()));
                        return Q.postDispatch && Q.postDispatch.call(this, M), M.result;
                    }
                },
                handlers: function(p, E) {
                    var D, Z, k, C, F, P = [], M = E.delegateCount, B = p.target;
                    if (M && B.nodeType && !("click" === p.type && p.button >= 1)) for (;B !== this; B = B.parentNode || this) if (1 === B.nodeType && ("click" !== p.type || !0 !== B.disabled)) {
                        for (C = [], F = {}, D = 0; D < M; D++) void 0 === F[k = (Z = E[D]).selector + " "] && (F[k] = Z.needsContext ? q(k, this).index(B) > -1 : q.find(k, this, null, [ B ]).length),
                        F[k] && C.push(Z);
                        C.length && P.push({
                            elem: B,
                            handlers: C
                        });
                    }
                    return B = this, M < E.length && P.push({
                        elem: B,
                        handlers: E.slice(M)
                    }), P;
                },
                addProp: function(p, E) {
                    Object.defineProperty(q.Event.prototype, p, {
                        enumerable: !0,
                        configurable: !0,
                        get: l(E) ? function() {
                            if (this.originalEvent) return E(this.originalEvent);
                        } : function() {
                            if (this.originalEvent) return this.originalEvent[p];
                        },
                        set: function(E) {
                            Object.defineProperty(this, p, {
                                enumerable: !0,
                                configurable: !0,
                                writable: !0,
                                value: E
                            });
                        }
                    });
                },
                fix: function(p) {
                    return p[q.expando] ? p : new q.Event(p);
                },
                special: {
                    load: {
                        noBubble: !0
                    },
                    click: {
                        setup: function(p) {
                            var E = this || p;
                            return kL.test(E.type) && E.click && Y(E, "input") && Xv(E, "click", iu), !1;
                        },
                        trigger: function(p) {
                            var E = this || p;
                            return kL.test(E.type) && E.click && Y(E, "input") && Xv(E, "click"), !0;
                        },
                        _default: function(p) {
                            var E = p.target;
                            return kL.test(E.type) && E.click && Y(E, "input") && V.get(E, "click") || Y(E, "a");
                        }
                    },
                    beforeunload: {
                        postDispatch: function(p) {
                            void 0 !== p.result && p.originalEvent && (p.originalEvent.returnValue = p.result);
                        }
                    }
                }
            }, q.removeEvent = function(p, E, D) {
                p.removeEventListener && p.removeEventListener(E, D);
            }, q.Event = function(p, E) {
                if (!(this instanceof q.Event)) return new q.Event(p, E);
                p && p.type ? (this.originalEvent = p, this.type = p.type, this.isDefaultPrevented = p.defaultPrevented || void 0 === p.defaultPrevented && !1 === p.returnValue ? iu : Za,
                this.target = p.target && 3 === p.target.nodeType ? p.target.parentNode : p.target,
                this.currentTarget = p.currentTarget, this.relatedTarget = p.relatedTarget) : this.type = p,
                E && q.extend(this, E), this.timeStamp = p && p.timeStamp || Date.now(), this[q.expando] = !0;
            }, q.Event.prototype = {
                constructor: q.Event,
                isDefaultPrevented: Za,
                isPropagationStopped: Za,
                isImmediatePropagationStopped: Za,
                isSimulated: !1,
                preventDefault: function() {
                    var p = this.originalEvent;
                    this.isDefaultPrevented = iu, p && !this.isSimulated && p.preventDefault();
                },
                stopPropagation: function() {
                    var p = this.originalEvent;
                    this.isPropagationStopped = iu, p && !this.isSimulated && p.stopPropagation();
                },
                stopImmediatePropagation: function() {
                    var p = this.originalEvent;
                    this.isImmediatePropagationStopped = iu, p && !this.isSimulated && p.stopImmediatePropagation(),
                    this.stopPropagation();
                }
            }, q.each({
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0
            }, q.event.addProp), q.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(p, E) {
                q.event.special[p] = {
                    setup: function() {
                        return Xv(this, p, fz), !1;
                    },
                    trigger: function() {
                        return Xv(this, p), !0;
                    },
                    _default: function() {
                        return !0;
                    },
                    delegateType: E
                };
            })), q.each({
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout"
            }, (function(p, E) {
                q.event.special[p] = {
                    delegateType: E,
                    bindType: E,
                    handle: function(p) {
                        var D, Z = this, k = p.relatedTarget, C = p.handleObj;
                        return k && (k === Z || q.contains(Z, k)) || (p.type = C.origType, D = C.handler.apply(this, arguments),
                        p.type = E), D;
                    }
                };
            })), q.fn.extend({
                on: function(p, E, D, Z) {
                    return VA(this, p, E, D, Z);
                },
                one: function(p, E, D, Z) {
                    return VA(this, p, E, D, Z, 1);
                },
                off: function(p, E, D) {
                    var Z, k;
                    if (p && p.preventDefault && p.handleObj) return Z = p.handleObj, q(p.delegateTarget).off(Z.namespace ? Z.origType + "." + Z.namespace : Z.origType, Z.selector, Z.handler),
                    this;
                    if ("object" == typeof p) {
                        for (k in p) this.off(k, E, p[k]);
                        return this;
                    }
                    return !1 !== E && "function" != typeof E || (D = E, E = void 0), !1 === D && (D = Za),
                    this.each((function() {
                        q.event.remove(this, p, D, E);
                    }));
                }
            });
            var kp = /<script|<style|<link/i, uA = /checked\s*(?:[^=]|=\s*.checked.)/i, mP = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Jw(p, E) {
                return Y(p, "table") && Y(11 !== E.nodeType ? E : E.firstChild, "tr") && q(p).children("tbody")[0] || p;
            }
            function hW(p) {
                return p.type = (null !== p.getAttribute("type")) + "/" + p.type, p;
            }
            function BB(p) {
                return "true/" === (p.type || "").slice(0, 5) ? p.type = p.type.slice(5) : p.removeAttribute("type"),
                p;
            }
            function pg(p, E) {
                var D, Z, k, C, F, P, M;
                if (1 === E.nodeType) {
                    if (V.hasData(p) && (M = (C = V.get(p)).events)) for (k in V.remove(E, "handle events"),
                    M) for (D = 0, Z = M[k].length; D < Z; D++) q.event.add(E, k, M[k][D]);
                    wW.hasData(p) && (F = wW.access(p), P = q.extend({}, F), wW.set(E, P));
                }
            }
            function ZP(p, E) {
                var D = E.nodeName.toLowerCase();
                "input" === D && kL.test(p.type) ? E.checked = p.checked : "input" !== D && "textarea" !== D || (E.defaultValue = p.defaultValue);
            }
            function Cn(p, E, D, Z) {
                E = C(E);
                var k, F, P, M, B, Q, x = 0, U = p.length, z = U - 1, J = E[0], S = l(J);
                if (S || U > 1 && "string" == typeof J && !N.checkClone && uA.test(J)) return p.each((function(k) {
                    var C = p.eq(k);
                    S && (E[0] = J.call(this, k, C.html())), Cn(C, E, D, Z);
                }));
                if (U && (F = (k = aO(E, p[0].ownerDocument, !1, p, Z)).firstChild, 1 === k.childNodes.length && (k = F),
                F || Z)) {
                    for (M = (P = q.map(IT(k, "script"), hW)).length; x < U; x++) B = k, x !== z && (B = q.clone(B, !0, !0),
                    M && q.merge(P, IT(B, "script"))), D.call(p[x], B, x);
                    if (M) for (Q = P[P.length - 1].ownerDocument, q.map(P, BB), x = 0; x < M; x++) B = P[x],
                    sv.test(B.type || "") && !V.access(B, "globalEval") && q.contains(Q, B) && (B.src && "module" !== (B.type || "").toLowerCase() ? q._evalUrl && !B.noModule && q._evalUrl(B.src, {
                        nonce: B.nonce || B.getAttribute("nonce")
                    }, Q) : h(B.textContent.replace(mP, ""), B, Q));
                }
                return p;
            }
            function yE(p, E, D) {
                for (var Z, k = E ? q.filter(E, p) : p, C = 0; null != (Z = k[C]); C++) D || 1 !== Z.nodeType || q.cleanData(IT(Z)),
                Z.parentNode && (D && el(Z) && fa(IT(Z, "script")), Z.parentNode.removeChild(Z));
                return p;
            }
            q.extend({
                htmlPrefilter: function(p) {
                    return p;
                },
                clone: function(p, E, D) {
                    var Z, k, C, F, P = p.cloneNode(!0), M = el(p);
                    if (!(N.noCloneChecked || 1 !== p.nodeType && 11 !== p.nodeType || q.isXMLDoc(p))) for (F = IT(P),
                    Z = 0, k = (C = IT(p)).length; Z < k; Z++) ZP(C[Z], F[Z]);
                    if (E) if (D) for (C = C || IT(p), F = F || IT(P), Z = 0, k = C.length; Z < k; Z++) pg(C[Z], F[Z]); else pg(p, P);
                    return (F = IT(P, "script")).length > 0 && fa(F, !M && IT(p, "script")), P;
                },
                cleanData: function(p) {
                    for (var E, D, Z, k = q.event.special, C = 0; void 0 !== (D = p[C]); C++) if (I(D)) {
                        if (E = D[V.expando]) {
                            if (E.events) for (Z in E.events) k[Z] ? q.event.remove(D, Z) : q.removeEvent(D, Z, E.handle);
                            D[V.expando] = void 0;
                        }
                        D[wW.expando] && (D[wW.expando] = void 0);
                    }
                }
            }), q.fn.extend({
                detach: function(p) {
                    return yE(this, p, !0);
                },
                remove: function(p) {
                    return yE(this, p);
                },
                text: function(p) {
                    return t(this, (function(p) {
                        return void 0 === p ? q.text(this) : this.empty().each((function() {
                            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = p);
                        }));
                    }), null, p, arguments.length);
                },
                append: function() {
                    return Cn(this, arguments, (function(p) {
                        var E;
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Jw(this, p).appendChild(p);
                    }));
                },
                prepend: function() {
                    return Cn(this, arguments, (function(p) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var E = Jw(this, p);
                            E.insertBefore(p, E.firstChild);
                        }
                    }));
                },
                before: function() {
                    return Cn(this, arguments, (function(p) {
                        this.parentNode && this.parentNode.insertBefore(p, this);
                    }));
                },
                after: function() {
                    return Cn(this, arguments, (function(p) {
                        this.parentNode && this.parentNode.insertBefore(p, this.nextSibling);
                    }));
                },
                empty: function() {
                    for (var p, E = 0; null != (p = this[E]); E++) 1 === p.nodeType && (q.cleanData(IT(p, !1)),
                    p.textContent = "");
                    return this;
                },
                clone: function(p, E) {
                    return p = null != p && p, E = null == E ? p : E, this.map((function() {
                        return q.clone(this, p, E);
                    }));
                },
                html: function(p) {
                    return t(this, (function(p) {
                        var E = this[0] || {}, D = 0, Z = this.length;
                        if (void 0 === p && 1 === E.nodeType) return E.innerHTML;
                        if ("string" == typeof p && !kp.test(p) && !Su[(Zk.exec(p) || [ "", "" ])[1].toLowerCase()]) {
                            p = q.htmlPrefilter(p);
                            try {
                                for (;D < Z; D++) 1 === (E = this[D] || {}).nodeType && (q.cleanData(IT(E, !1)),
                                E.innerHTML = p);
                                E = 0;
                            } catch (p) {}
                        }
                        E && this.empty().append(p);
                    }), null, p, arguments.length);
                },
                replaceWith: function() {
                    var p = [];
                    return Cn(this, arguments, (function(E) {
                        var D = this.parentNode;
                        q.inArray(this, p) < 0 && (q.cleanData(IT(this)), D && D.replaceChild(E, this));
                    }), p);
                }
            }), q.each({
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith"
            }, (function(p, E) {
                q.fn[p] = function(p) {
                    for (var D, Z = [], k = q(p), C = k.length - 1, P = 0; P <= C; P++) D = P === C ? this : this.clone(!0),
                    q(k[P])[E](D), F.apply(Z, D.get());
                    return this.pushStack(Z);
                };
            }));
            var pP = new RegExp("^(" + oX + ")(?!px)[a-z%]+$", "i"), gI = function(E) {
                var D = E.ownerDocument.defaultView;
                return D && D.opener || (D = p), D.getComputedStyle(E);
            }, KH = function(p, E, D) {
                var Z, k, C = {};
                for (k in E) C[k] = p.style[k], p.style[k] = E[k];
                for (k in Z = D.call(p), E) p.style[k] = C[k];
                return Z;
            }, jf = new RegExp(Gx.join("|"), "i");
            function Iu(p, E, D) {
                var Z, k, C, F, P = p.style;
                return (D = D || gI(p)) && ("" !== (F = D.getPropertyValue(E) || D[E]) || el(p) || (F = q.style(p, E)),
                !N.pixelBoxStyles() && pP.test(F) && jf.test(E) && (Z = P.width, k = P.minWidth,
                C = P.maxWidth, P.minWidth = P.maxWidth = P.width = F, F = D.width, P.width = Z,
                P.minWidth = k, P.maxWidth = C)), void 0 !== F ? F + "" : F;
            }
            function yo(p, E) {
                return {
                    get: function() {
                        if (!p()) return (this.get = E).apply(this, arguments);
                        delete this.get;
                    }
                };
            }
            !function() {
                function E() {
                    if (Q) {
                        B.style.cssText = "position:absolute;left:-11111px;width:60px;" + "margin-top:1px;padding:0;border:0",
                        Q.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;" + "margin:auto;border:1px;padding:1px;" + "width:60%;top:1%",
                        mw.appendChild(B).appendChild(Q);
                        var E = p.getComputedStyle(Q);
                        Z = "1%" !== E.top, M = 12 === D(E.marginLeft), Q.style.right = "60%", F = 36 === D(E.right),
                        k = 36 === D(E.width), Q.style.position = "absolute", C = 12 === D(Q.offsetWidth / 3),
                        mw.removeChild(B), Q = null;
                    }
                }
                function D(p) {
                    return Math.round(parseFloat(p));
                }
                var Z, k, C, F, P, M, B = J.createElement("div"), Q = J.createElement("div");
                Q.style && (Q.style.backgroundClip = "content-box", Q.cloneNode(!0).style.backgroundClip = "",
                N.clearCloneStyle = "content-box" === Q.style.backgroundClip, q.extend(N, {
                    boxSizingReliable: function() {
                        return E(), k;
                    },
                    pixelBoxStyles: function() {
                        return E(), F;
                    },
                    pixelPosition: function() {
                        return E(), Z;
                    },
                    reliableMarginLeft: function() {
                        return E(), M;
                    },
                    scrollboxSize: function() {
                        return E(), C;
                    },
                    reliableTrDimensions: function() {
                        var E, D, Z, k;
                        return null == P && (E = J.createElement("table"), D = J.createElement("tr"), Z = J.createElement("div"),
                        E.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", D.style.cssText = "border:1px solid",
                        D.style.height = "1px", Z.style.height = "9px", Z.style.display = "block", mw.appendChild(E).appendChild(D).appendChild(Z),
                        k = p.getComputedStyle(D), P = parseInt(k.height, 10) + parseInt(k.borderTopWidth, 10) + parseInt(k.borderBottomWidth, 10) === D.offsetHeight,
                        mw.removeChild(E)), P;
                    }
                }));
            }();
            var WR = [ "Webkit", "Moz", "ms" ], ab = J.createElement("div").style, WP = {};
            function rU(p) {
                for (var E = p[0].toUpperCase() + p.slice(1), D = WR.length; D--; ) if ((p = WR[D] + E) in ab) return p;
            }
            function fF(p) {
                var E = q.cssProps[p] || WP[p];
                return E || (p in ab ? p : WP[p] = rU(p) || p);
            }
            var VG = /^(none|table(?!-c[ea]).+)/, bs = /^--/, qm = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            }, EE = {
                letterSpacing: "0",
                fontWeight: "400"
            };
            function aJ(p, E, D) {
                var Z = Wj.exec(E);
                return Z ? Math.max(0, Z[2] - (D || 0)) + (Z[3] || "px") : E;
            }
            function lV(p, E, D, Z, k, C) {
                var F = "width" === E ? 1 : 0, P = 0, M = 0;
                if (D === (Z ? "border" : "content")) return 0;
                for (;F < 4; F += 2) "margin" === D && (M += q.css(p, D + Gx[F], !0, k)), Z ? ("content" === D && (M -= q.css(p, "padding" + Gx[F], !0, k)),
                "margin" !== D && (M -= q.css(p, "border" + Gx[F] + "Width", !0, k))) : (M += q.css(p, "padding" + Gx[F], !0, k),
                "padding" !== D ? M += q.css(p, "border" + Gx[F] + "Width", !0, k) : P += q.css(p, "border" + Gx[F] + "Width", !0, k));
                return !Z && C >= 0 && (M += Math.max(0, Math.ceil(p["offset" + E[0].toUpperCase() + E.slice(1)] - C - M - P - .5)) || 0),
                M;
            }
            function px(p, E, D) {
                var Z = gI(p), k, C = (!N.boxSizingReliable() || D) && "border-box" === q.css(p, "boxSizing", !1, Z), F = C, P = Iu(p, E, Z), M = "offset" + E[0].toUpperCase() + E.slice(1);
                if (pP.test(P)) {
                    if (!D) return P;
                    P = "auto";
                }
                return (!N.boxSizingReliable() && C || !N.reliableTrDimensions() && Y(p, "tr") || "auto" === P || !parseFloat(P) && "inline" === q.css(p, "display", !1, Z)) && p.getClientRects().length && (C = "border-box" === q.css(p, "boxSizing", !1, Z),
                (F = M in p) && (P = p[M])), (P = parseFloat(P) || 0) + lV(p, E, D || (C ? "border" : "content"), F, Z, P) + "px";
            }
            function Hi(p, E, D, Z, k) {
                return new Hi.prototype.init(p, E, D, Z, k);
            }
            q.extend({
                cssHooks: {
                    opacity: {
                        get: function(p, E) {
                            if (E) {
                                var D = Iu(p, "opacity");
                                return "" === D ? "1" : D;
                            }
                        }
                    }
                },
                cssNumber: {
                    animationIterationCount: !0,
                    columnCount: !0,
                    fillOpacity: !0,
                    flexGrow: !0,
                    flexShrink: !0,
                    fontWeight: !0,
                    gridArea: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnStart: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowStart: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0
                },
                cssProps: {},
                style: function(p, E, D, Z) {
                    if (p && 3 !== p.nodeType && 8 !== p.nodeType && p.style) {
                        var k, C, F, P = G(E), M = bs.test(E), B = p.style;
                        if (M || (E = fF(P)), F = q.cssHooks[E] || q.cssHooks[P], void 0 === D) return F && "get" in F && void 0 !== (k = F.get(p, !1, Z)) ? k : B[E];
                        "string" === (C = typeof D) && (k = Wj.exec(D)) && k[1] && (D = tN(p, E, k), C = "number"),
                        null != D && D == D && ("number" !== C || M || (D += k && k[3] || (q.cssNumber[P] ? "" : "px")),
                        N.clearCloneStyle || "" !== D || 0 !== E.indexOf("background") || (B[E] = "inherit"),
                        F && "set" in F && void 0 === (D = F.set(p, D, Z)) || (M ? B.setProperty(E, D) : B[E] = D));
                    }
                },
                css: function(p, E, D, Z) {
                    var k, C, F, P = G(E), M;
                    return bs.test(E) || (E = fF(P)), (F = q.cssHooks[E] || q.cssHooks[P]) && "get" in F && (k = F.get(p, !0, D)),
                    void 0 === k && (k = Iu(p, E, Z)), "normal" === k && E in EE && (k = EE[E]), "" === D || D ? (C = parseFloat(k),
                    !0 === D || isFinite(C) ? C || 0 : k) : k;
                }
            }), q.each([ "height", "width" ], (function(p, E) {
                q.cssHooks[E] = {
                    get: function(p, D, Z) {
                        if (D) return !VG.test(q.css(p, "display")) || p.getClientRects().length && p.getBoundingClientRect().width ? px(p, E, Z) : KH(p, qm, (function() {
                            return px(p, E, Z);
                        }));
                    },
                    set: function(p, D, Z) {
                        var k, C = gI(p), F = !N.scrollboxSize() && "absolute" === C.position, P, M = (F || Z) && "border-box" === q.css(p, "boxSizing", !1, C), B = Z ? lV(p, E, Z, M, C) : 0;
                        return M && F && (B -= Math.ceil(p["offset" + E[0].toUpperCase() + E.slice(1)] - parseFloat(C[E]) - lV(p, E, "border", !1, C) - .5)),
                        B && (k = Wj.exec(D)) && "px" !== (k[3] || "px") && (p.style[E] = D, D = q.css(p, E)),
                        aJ(p, D, B);
                    }
                };
            })), q.cssHooks.marginLeft = yo(N.reliableMarginLeft, (function(p, E) {
                if (E) return (parseFloat(Iu(p, "marginLeft")) || p.getBoundingClientRect().left - KH(p, {
                    marginLeft: 0
                }, (function() {
                    return p.getBoundingClientRect().left;
                }))) + "px";
            })), q.each({
                margin: "",
                padding: "",
                border: "Width"
            }, (function(p, E) {
                q.cssHooks[p + E] = {
                    expand: function(D) {
                        for (var Z = 0, k = {}, C = "string" == typeof D ? D.split(" ") : [ D ]; Z < 4; Z++) k[p + Gx[Z] + E] = C[Z] || C[Z - 2] || C[0];
                        return k;
                    }
                }, "margin" !== p && (q.cssHooks[p + E].set = aJ);
            })), q.fn.extend({
                css: function(p, E) {
                    return t(this, (function(p, E, D) {
                        var Z, k, C = {}, F = 0;
                        if (Array.isArray(E)) {
                            for (Z = gI(p), k = E.length; F < k; F++) C[E[F]] = q.css(p, E[F], !1, Z);
                            return C;
                        }
                        return void 0 !== D ? q.style(p, E, D) : q.css(p, E);
                    }), p, E, arguments.length > 1);
                }
            }), q.Tween = Hi, Hi.prototype = {
                constructor: Hi,
                init: function(p, E, D, Z, k, C) {
                    this.elem = p, this.prop = D, this.easing = k || q.easing._default, this.options = E,
                    this.start = this.now = this.cur(), this.end = Z, this.unit = C || (q.cssNumber[D] ? "" : "px");
                },
                cur: function() {
                    var p = Hi.propHooks[this.prop];
                    return p && p.get ? p.get(this) : Hi.propHooks._default.get(this);
                },
                run: function(p) {
                    var E, D = Hi.propHooks[this.prop];
                    return this.options.duration ? this.pos = E = q.easing[this.easing](p, this.options.duration * p, 0, 1, this.options.duration) : this.pos = E = p,
                    this.now = (this.end - this.start) * E + this.start, this.options.step && this.options.step.call(this.elem, this.now, this),
                    D && D.set ? D.set(this) : Hi.propHooks._default.set(this), this;
                }
            }, Hi.prototype.init.prototype = Hi.prototype, Hi.propHooks = {
                _default: {
                    get: function(p) {
                        var E;
                        return 1 !== p.elem.nodeType || null != p.elem[p.prop] && null == p.elem.style[p.prop] ? p.elem[p.prop] : (E = q.css(p.elem, p.prop, "")) && "auto" !== E ? E : 0;
                    },
                    set: function(p) {
                        q.fx.step[p.prop] ? q.fx.step[p.prop](p) : 1 !== p.elem.nodeType || !q.cssHooks[p.prop] && null == p.elem.style[fF(p.prop)] ? p.elem[p.prop] = p.now : q.style(p.elem, p.prop, p.now + p.unit);
                    }
                }
            }, Hi.propHooks.scrollTop = Hi.propHooks.scrollLeft = {
                set: function(p) {
                    p.elem.nodeType && p.elem.parentNode && (p.elem[p.prop] = p.now);
                }
            }, q.easing = {
                linear: function(p) {
                    return p;
                },
                swing: function(p) {
                    return .5 - Math.cos(p * Math.PI) / 2;
                },
                _default: "swing"
            }, q.fx = Hi.prototype.init, q.fx.step = {};
            var RE, JO, Ru = /^(?:toggle|show|hide)$/, Dt = /queueHooks$/;
            function LU() {
                JO && (!1 === J.hidden && p.requestAnimationFrame ? p.requestAnimationFrame(LU) : p.setTimeout(LU, q.fx.interval),
                q.fx.tick());
            }
            function FD() {
                return p.setTimeout((function() {
                    RE = void 0;
                })), RE = Date.now();
            }
            function eN(p, E) {
                var D, Z = 0, k = {
                    height: p
                };
                for (E = E ? 1 : 0; Z < 4; Z += 2 - E) k["margin" + (D = Gx[Z])] = k["padding" + D] = p;
                return E && (k.opacity = k.width = p), k;
            }
            function QP(p, E, D) {
                for (var Z, k = (PS.tweeners[E] || []).concat(PS.tweeners["*"]), C = 0, F = k.length; C < F; C++) if (Z = k[C].call(D, E, p)) return Z;
            }
            function Tr(p, E, D) {
                var Z, k, C, F, P, M, B, Q, x = "width" in E || "height" in E, U = this, N = {}, l = p.style, z = p.nodeType && VM(p), J = V.get(p, "fxshow");
                for (Z in D.queue || (null == (F = q._queueHooks(p, "fx")).unqueued && (F.unqueued = 0,
                P = F.empty.fire, F.empty.fire = function() {
                    F.unqueued || P();
                }), F.unqueued++, U.always((function() {
                    U.always((function() {
                        F.unqueued--, q.queue(p, "fx").length || F.empty.fire();
                    }));
                }))), E) if (k = E[Z], Ru.test(k)) {
                    if (delete E[Z], C = C || "toggle" === k, k === (z ? "hide" : "show")) {
                        if ("show" !== k || !J || void 0 === J[Z]) continue;
                        z = !0;
                    }
                    N[Z] = J && J[Z] || q.style(p, Z);
                }
                if ((M = !q.isEmptyObject(E)) || !q.isEmptyObject(N)) for (Z in x && 1 === p.nodeType && (D.overflow = [ l.overflow, l.overflowX, l.overflowY ],
                null == (B = J && J.display) && (B = V.get(p, "display")), "none" === (Q = q.css(p, "display")) && (B ? Q = B : (Mg([ p ], !0),
                B = p.style.display || B, Q = q.css(p, "display"), Mg([ p ]))), ("inline" === Q || "inline-block" === Q && null != B) && "none" === q.css(p, "float") && (M || (U.done((function() {
                    l.display = B;
                })), null == B && (Q = l.display, B = "none" === Q ? "" : Q)), l.display = "inline-block")),
                D.overflow && (l.overflow = "hidden", U.always((function() {
                    l.overflow = D.overflow[0], l.overflowX = D.overflow[1], l.overflowY = D.overflow[2];
                }))), M = !1, N) M || (J ? "hidden" in J && (z = J.hidden) : J = V.access(p, "fxshow", {
                    display: B
                }), C && (J.hidden = !z), z && Mg([ p ], !0), U.done((function() {
                    for (Z in z || Mg([ p ]), V.remove(p, "fxshow"), N) q.style(p, Z, N[Z]);
                }))), M = QP(z ? J[Z] : 0, Z, U), Z in J || (J[Z] = M.start, z && (M.end = M.start,
                M.start = 0));
            }
            function op(p, E) {
                var D, Z, k, C, F;
                for (D in p) if (k = E[Z = G(D)], C = p[D], Array.isArray(C) && (k = C[1], C = p[D] = C[0]),
                D !== Z && (p[Z] = C, delete p[D]), (F = q.cssHooks[Z]) && "expand" in F) for (D in C = F.expand(C),
                delete p[Z], C) D in p || (p[D] = C[D], E[D] = k); else E[Z] = k;
            }
            function PS(p, E, D) {
                var Z, k, C = 0, F = PS.prefilters.length, P = q.Deferred().always((function() {
                    delete M.elem;
                })), M = function() {
                    if (k) return !1;
                    for (var E = RE || FD(), D = Math.max(0, B.startTime + B.duration - E), Z, C = 1 - (D / B.duration || 0), F = 0, M = B.tweens.length; F < M; F++) B.tweens[F].run(C);
                    return P.notifyWith(p, [ B, C, D ]), C < 1 && M ? D : (M || P.notifyWith(p, [ B, 1, 0 ]),
                    P.resolveWith(p, [ B ]), !1);
                }, B = P.promise({
                    elem: p,
                    props: q.extend({}, E),
                    opts: q.extend(!0, {
                        specialEasing: {},
                        easing: q.easing._default
                    }, D),
                    originalProperties: E,
                    originalOptions: D,
                    startTime: RE || FD(),
                    duration: D.duration,
                    tweens: [],
                    createTween: function(E, D) {
                        var Z = q.Tween(p, B.opts, E, D, B.opts.specialEasing[E] || B.opts.easing);
                        return B.tweens.push(Z), Z;
                    },
                    stop: function(E) {
                        var D = 0, Z = E ? B.tweens.length : 0;
                        if (k) return this;
                        for (k = !0; D < Z; D++) B.tweens[D].run(1);
                        return E ? (P.notifyWith(p, [ B, 1, 0 ]), P.resolveWith(p, [ B, E ])) : P.rejectWith(p, [ B, E ]),
                        this;
                    }
                }), Q = B.props;
                for (op(Q, B.opts.specialEasing); C < F; C++) if (Z = PS.prefilters[C].call(B, p, Q, B.opts)) return l(Z.stop) && (q._queueHooks(B.elem, B.opts.queue).stop = Z.stop.bind(Z)),
                Z;
                return q.map(Q, QP, B), l(B.opts.start) && B.opts.start.call(p, B), B.progress(B.opts.progress).done(B.opts.done, B.opts.complete).fail(B.opts.fail).always(B.opts.always),
                q.fx.timer(q.extend(M, {
                    elem: p,
                    anim: B,
                    queue: B.opts.queue
                })), B;
            }
            q.Animation = q.extend(PS, {
                tweeners: {
                    "*": [ function(p, E) {
                        var D = this.createTween(p, E);
                        return tN(D.elem, p, Wj.exec(E), D), D;
                    } ]
                },
                tweener: function(p, E) {
                    l(p) ? (E = p, p = [ "*" ]) : p = p.match(u);
                    for (var D, Z = 0, k = p.length; Z < k; Z++) D = p[Z], PS.tweeners[D] = PS.tweeners[D] || [],
                    PS.tweeners[D].unshift(E);
                },
                prefilters: [ Tr ],
                prefilter: function(p, E) {
                    E ? PS.prefilters.unshift(p) : PS.prefilters.push(p);
                }
            }), q.speed = function(p, E, D) {
                var Z = p && "object" == typeof p ? q.extend({}, p) : {
                    complete: D || !D && E || l(p) && p,
                    duration: p,
                    easing: D && E || E && !l(E) && E
                };
                return q.fx.off ? Z.duration = 0 : "number" != typeof Z.duration && (Z.duration in q.fx.speeds ? Z.duration = q.fx.speeds[Z.duration] : Z.duration = q.fx.speeds._default),
                null != Z.queue && !0 !== Z.queue || (Z.queue = "fx"), Z.old = Z.complete, Z.complete = function() {
                    l(Z.old) && Z.old.call(this), Z.queue && q.dequeue(this, Z.queue);
                }, Z;
            }, q.fn.extend({
                fadeTo: function(p, E, D, Z) {
                    return this.filter(VM).css("opacity", 0).show().end().animate({
                        opacity: E
                    }, p, D, Z);
                },
                animate: function(p, E, D, Z) {
                    var k = q.isEmptyObject(p), C = q.speed(E, D, Z), F = function() {
                        var E = PS(this, q.extend({}, p), C);
                        (k || V.get(this, "finish")) && E.stop(!0);
                    };
                    return F.finish = F, k || !1 === C.queue ? this.each(F) : this.queue(C.queue, F);
                },
                stop: function(p, E, D) {
                    var Z = function(p) {
                        var E = p.stop;
                        delete p.stop, E(D);
                    };
                    return "string" != typeof p && (D = E, E = p, p = void 0), E && this.queue(p || "fx", []),
                    this.each((function() {
                        var E = !0, k = null != p && p + "queueHooks", C = q.timers, F = V.get(this);
                        if (k) F[k] && F[k].stop && Z(F[k]); else for (k in F) F[k] && F[k].stop && Dt.test(k) && Z(F[k]);
                        for (k = C.length; k--; ) C[k].elem !== this || null != p && C[k].queue !== p || (C[k].anim.stop(D),
                        E = !1, C.splice(k, 1));
                        !E && D || q.dequeue(this, p);
                    }));
                },
                finish: function(p) {
                    return !1 !== p && (p = p || "fx"), this.each((function() {
                        var E, D = V.get(this), Z = D[p + "queue"], k = D[p + "queueHooks"], C = q.timers, F = Z ? Z.length : 0;
                        for (D.finish = !0, q.queue(this, p, []), k && k.stop && k.stop.call(this, !0),
                        E = C.length; E--; ) C[E].elem === this && C[E].queue === p && (C[E].anim.stop(!0),
                        C.splice(E, 1));
                        for (E = 0; E < F; E++) Z[E] && Z[E].finish && Z[E].finish.call(this);
                        delete D.finish;
                    }));
                }
            }), q.each([ "toggle", "show", "hide" ], (function(p, E) {
                var D = q.fn[E];
                q.fn[E] = function(p, Z, k) {
                    return null == p || "boolean" == typeof p ? D.apply(this, arguments) : this.animate(eN(E, !0), p, Z, k);
                };
            })), q.each({
                slideDown: eN("show"),
                slideUp: eN("hide"),
                slideToggle: eN("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, (function(p, E) {
                q.fn[p] = function(p, D, Z) {
                    return this.animate(E, p, D, Z);
                };
            })), q.timers = [], q.fx.tick = function() {
                var p, E = 0, D = q.timers;
                for (RE = Date.now(); E < D.length; E++) (p = D[E])() || D[E] !== p || D.splice(E--, 1);
                D.length || q.fx.stop(), RE = void 0;
            }, q.fx.timer = function(p) {
                q.timers.push(p), q.fx.start();
            }, q.fx.interval = 13, q.fx.start = function() {
                JO || (JO = !0, LU());
            }, q.fx.stop = function() {
                JO = null;
            }, q.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, q.fn.delay = function(E, D) {
                return E = q.fx && q.fx.speeds[E] || E, D = D || "fx", this.queue(D, (function(D, Z) {
                    var k = p.setTimeout(D, E);
                    Z.stop = function() {
                        p.clearTimeout(k);
                    };
                }));
            }, function() {
                var p = J.createElement("input"), E, D = J.createElement("select").appendChild(J.createElement("option"));
                p.type = "checkbox", N.checkOn = "" !== p.value, N.optSelected = D.selected, (p = J.createElement("input")).value = "t",
                p.type = "radio", N.radioValue = "t" === p.value;
            }();
            var Ya, eU = q.expr.attrHandle;
            q.fn.extend({
                attr: function(p, E) {
                    return t(this, q.attr, p, E, arguments.length > 1);
                },
                removeAttr: function(p) {
                    return this.each((function() {
                        q.removeAttr(this, p);
                    }));
                }
            }), q.extend({
                attr: function(p, E, D) {
                    var Z, k, C = p.nodeType;
                    if (3 !== C && 8 !== C && 2 !== C) return void 0 === p.getAttribute ? q.prop(p, E, D) : (1 === C && q.isXMLDoc(p) || (k = q.attrHooks[E.toLowerCase()] || (q.expr.match.bool.test(E) ? Ya : void 0)),
                    void 0 !== D ? null === D ? void q.removeAttr(p, E) : k && "set" in k && void 0 !== (Z = k.set(p, D, E)) ? Z : (p.setAttribute(E, D + ""),
                    D) : k && "get" in k && null !== (Z = k.get(p, E)) ? Z : null == (Z = q.find.attr(p, E)) ? void 0 : Z);
                },
                attrHooks: {
                    type: {
                        set: function(p, E) {
                            if (!N.radioValue && "radio" === E && Y(p, "input")) {
                                var D = p.value;
                                return p.setAttribute("type", E), D && (p.value = D), E;
                            }
                        }
                    }
                },
                removeAttr: function(p, E) {
                    var D, Z = 0, k = E && E.match(u);
                    if (k && 1 === p.nodeType) for (;D = k[Z++]; ) p.removeAttribute(D);
                }
            }), Ya = {
                set: function(p, E, D) {
                    return !1 === E ? q.removeAttr(p, D) : p.setAttribute(D, D), D;
                }
            }, q.each(q.expr.match.bool.source.match(/\w+/g), (function(p, E) {
                var D = eU[E] || q.find.attr;
                eU[E] = function(p, E, Z) {
                    var k, C, F = E.toLowerCase();
                    return Z || (C = eU[F], eU[F] = k, k = null != D(p, E, Z) ? F : null, eU[F] = C),
                    k;
                };
            }));
            var UV = /^(?:input|select|textarea|button)$/i, JN = /^(?:a|area)$/i;
            function Jq(p) {
                var E;
                return (p.match(u) || []).join(" ");
            }
            function Qt(p) {
                return p.getAttribute && p.getAttribute("class") || "";
            }
            function fO(p) {
                return Array.isArray(p) ? p : "string" == typeof p && p.match(u) || [];
            }
            q.fn.extend({
                prop: function(p, E) {
                    return t(this, q.prop, p, E, arguments.length > 1);
                },
                removeProp: function(p) {
                    return this.each((function() {
                        delete this[q.propFix[p] || p];
                    }));
                }
            }), q.extend({
                prop: function(p, E, D) {
                    var Z, k, C = p.nodeType;
                    if (3 !== C && 8 !== C && 2 !== C) return 1 === C && q.isXMLDoc(p) || (E = q.propFix[E] || E,
                    k = q.propHooks[E]), void 0 !== D ? k && "set" in k && void 0 !== (Z = k.set(p, D, E)) ? Z : p[E] = D : k && "get" in k && null !== (Z = k.get(p, E)) ? Z : p[E];
                },
                propHooks: {
                    tabIndex: {
                        get: function(p) {
                            var E = q.find.attr(p, "tabindex");
                            return E ? parseInt(E, 10) : UV.test(p.nodeName) || JN.test(p.nodeName) && p.href ? 0 : -1;
                        }
                    }
                },
                propFix: {
                    for: "htmlFor",
                    class: "className"
                }
            }), N.optSelected || (q.propHooks.selected = {
                get: function(p) {
                    var E = p.parentNode;
                    return E && E.parentNode && E.parentNode.selectedIndex, null;
                },
                set: function(p) {
                    var E = p.parentNode;
                    E && (E.selectedIndex, E.parentNode && E.parentNode.selectedIndex);
                }
            }), q.each([ "tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable" ], (function() {
                q.propFix[this.toLowerCase()] = this;
            })), q.fn.extend({
                addClass: function(p) {
                    var E, D, Z, k, C, F, P, M = 0;
                    if (l(p)) return this.each((function(E) {
                        q(this).addClass(p.call(this, E, Qt(this)));
                    }));
                    if ((E = fO(p)).length) for (;D = this[M++]; ) if (k = Qt(D), Z = 1 === D.nodeType && " " + Jq(k) + " ") {
                        for (F = 0; C = E[F++]; ) Z.indexOf(" " + C + " ") < 0 && (Z += C + " ");
                        k !== (P = Jq(Z)) && D.setAttribute("class", P);
                    }
                    return this;
                },
                removeClass: function(p) {
                    var E, D, Z, k, C, F, P, M = 0;
                    if (l(p)) return this.each((function(E) {
                        q(this).removeClass(p.call(this, E, Qt(this)));
                    }));
                    if (!arguments.length) return this.attr("class", "");
                    if ((E = fO(p)).length) for (;D = this[M++]; ) if (k = Qt(D), Z = 1 === D.nodeType && " " + Jq(k) + " ") {
                        for (F = 0; C = E[F++]; ) for (;Z.indexOf(" " + C + " ") > -1; ) Z = Z.replace(" " + C + " ", " ");
                        k !== (P = Jq(Z)) && D.setAttribute("class", P);
                    }
                    return this;
                },
                toggleClass: function(p, E) {
                    var D = typeof p, Z = "string" === D || Array.isArray(p);
                    return "boolean" == typeof E && Z ? E ? this.addClass(p) : this.removeClass(p) : l(p) ? this.each((function(D) {
                        q(this).toggleClass(p.call(this, D, Qt(this), E), E);
                    })) : this.each((function() {
                        var E, k, C, F;
                        if (Z) for (k = 0, C = q(this), F = fO(p); E = F[k++]; ) C.hasClass(E) ? C.removeClass(E) : C.addClass(E); else void 0 !== p && "boolean" !== D || ((E = Qt(this)) && V.set(this, "__className__", E),
                        this.setAttribute && this.setAttribute("class", E || !1 === p ? "" : V.get(this, "__className__") || ""));
                    }));
                },
                hasClass: function(p) {
                    var E, D, Z = 0;
                    for (E = " " + p + " "; D = this[Z++]; ) if (1 === D.nodeType && (" " + Jq(Qt(D)) + " ").indexOf(E) > -1) return !0;
                    return !1;
                }
            });
            var yt = /\r/g;
            q.fn.extend({
                val: function(p) {
                    var E, D, Z, k = this[0];
                    return arguments.length ? (Z = l(p), this.each((function(D) {
                        var k;
                        1 === this.nodeType && (null == (k = Z ? p.call(this, D, q(this).val()) : p) ? k = "" : "number" == typeof k ? k += "" : Array.isArray(k) && (k = q.map(k, (function(p) {
                            return null == p ? "" : p + "";
                        }))), (E = q.valHooks[this.type] || q.valHooks[this.nodeName.toLowerCase()]) && "set" in E && void 0 !== E.set(this, k, "value") || (this.value = k));
                    }))) : k ? (E = q.valHooks[k.type] || q.valHooks[k.nodeName.toLowerCase()]) && "get" in E && void 0 !== (D = E.get(k, "value")) ? D : "string" == typeof (D = k.value) ? D.replace(yt, "") : null == D ? "" : D : void 0;
                }
            }), q.extend({
                valHooks: {
                    option: {
                        get: function(p) {
                            var E = q.find.attr(p, "value");
                            return null != E ? E : Jq(q.text(p));
                        }
                    },
                    select: {
                        get: function(p) {
                            var E, D, Z, k = p.options, C = p.selectedIndex, F = "select-one" === p.type, P = F ? null : [], M = F ? C + 1 : k.length;
                            for (Z = C < 0 ? M : F ? C : 0; Z < M; Z++) if (((D = k[Z]).selected || Z === C) && !D.disabled && (!D.parentNode.disabled || !Y(D.parentNode, "optgroup"))) {
                                if (E = q(D).val(), F) return E;
                                P.push(E);
                            }
                            return P;
                        },
                        set: function(p, E) {
                            for (var D, Z, k = p.options, C = q.makeArray(E), F = k.length; F--; ) ((Z = k[F]).selected = q.inArray(q.valHooks.option.get(Z), C) > -1) && (D = !0);
                            return D || (p.selectedIndex = -1), C;
                        }
                    }
                }
            }), q.each([ "radio", "checkbox" ], (function() {
                q.valHooks[this] = {
                    set: function(p, E) {
                        if (Array.isArray(E)) return p.checked = q.inArray(q(p).val(), E) > -1;
                    }
                }, N.checkOn || (q.valHooks[this].get = function(p) {
                    return null === p.getAttribute("value") ? "on" : p.value;
                });
            })), N.focusin = "onfocusin" in p;
            var mW = /^(?:focusinfocus|focusoutblur)$/, Go = function(p) {
                p.stopPropagation();
            };
            q.extend(q.event, {
                trigger: function(E, D, Z, k) {
                    var C, F, P, M, B, x, U, N, S = [ Z || J ], h = Q.call(E, "type") ? E.type : E, o = Q.call(E, "namespace") ? E.namespace.split(".") : [];
                    if (F = N = P = Z = Z || J, 3 !== Z.nodeType && 8 !== Z.nodeType && !mW.test(h + q.event.triggered) && (h.indexOf(".") > -1 && (o = h.split("."),
                    h = o.shift(), o.sort()), B = h.indexOf(":") < 0 && "on" + h, (E = E[q.expando] ? E : new q.Event(h, "object" == typeof E && E)).isTrigger = k ? 2 : 3,
                    E.namespace = o.join("."), E.rnamespace = E.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    E.result = void 0, E.target || (E.target = Z), D = null == D ? [ E ] : q.makeArray(D, [ E ]),
                    U = q.event.special[h] || {}, k || !U.trigger || !1 !== U.trigger.apply(Z, D))) {
                        if (!k && !U.noBubble && !z(Z)) {
                            for (M = U.delegateType || h, mW.test(M + h) || (F = F.parentNode); F; F = F.parentNode) S.push(F),
                            P = F;
                            P === (Z.ownerDocument || J) && S.push(P.defaultView || P.parentWindow || p);
                        }
                        for (C = 0; (F = S[C++]) && !E.isPropagationStopped(); ) N = F, E.type = C > 1 ? M : U.bindType || h,
                        (x = (V.get(F, "events") || Object.create(null))[E.type] && V.get(F, "handle")) && x.apply(F, D),
                        (x = B && F[B]) && x.apply && I(F) && (E.result = x.apply(F, D), !1 === E.result && E.preventDefault());
                        return E.type = h, k || E.isDefaultPrevented() || U._default && !1 !== U._default.apply(S.pop(), D) || !I(Z) || B && l(Z[h]) && !z(Z) && ((P = Z[B]) && (Z[B] = null),
                        q.event.triggered = h, E.isPropagationStopped() && N.addEventListener(h, Go), Z[h](),
                        E.isPropagationStopped() && N.removeEventListener(h, Go), q.event.triggered = void 0,
                        P && (Z[B] = P)), E.result;
                    }
                },
                simulate: function(p, E, D) {
                    var Z = q.extend(new q.Event, D, {
                        type: p,
                        isSimulated: !0
                    });
                    q.event.trigger(Z, null, E);
                }
            }), q.fn.extend({
                trigger: function(p, E) {
                    return this.each((function() {
                        q.event.trigger(p, E, this);
                    }));
                },
                triggerHandler: function(p, E) {
                    var D = this[0];
                    if (D) return q.event.trigger(p, E, D, !0);
                }
            }), N.focusin || q.each({
                focus: "focusin",
                blur: "focusout"
            }, (function(p, E) {
                var D = function(p) {
                    q.event.simulate(E, p.target, q.event.fix(p));
                };
                q.event.special[E] = {
                    setup: function() {
                        var Z = this.ownerDocument || this.document || this, k = V.access(Z, E);
                        k || Z.addEventListener(p, D, !0), V.access(Z, E, (k || 0) + 1);
                    },
                    teardown: function() {
                        var Z = this.ownerDocument || this.document || this, k = V.access(Z, E) - 1;
                        k ? V.access(Z, E, k) : (Z.removeEventListener(p, D, !0), V.remove(Z, E));
                    }
                };
            }));
            var uR = p.location, jl = {
                guid: Date.now()
            }, pG = /\?/;
            q.parseXML = function(E) {
                var D, Z;
                if (!E || "string" != typeof E) return null;
                try {
                    D = (new p.DOMParser).parseFromString(E, "text/xml");
                } catch (p) {}
                return Z = D && D.getElementsByTagName("parsererror")[0], D && !Z || q.error("Invalid XML: " + (Z ? q.map(Z.childNodes, (function(p) {
                    return p.textContent;
                })).join("\n") : E)), D;
            };
            var gS = /\[\]$/, sf = /\r?\n/g, Ao = /^(?:submit|button|image|reset|file)$/i, pf = /^(?:input|select|textarea|keygen)/i;
            function we(p, E, D, Z) {
                var k;
                if (Array.isArray(E)) q.each(E, (function(E, k) {
                    D || gS.test(p) ? Z(p, k) : we(p + "[" + ("object" == typeof k && null != k ? E : "") + "]", k, D, Z);
                })); else if (D || "object" !== o(E)) Z(p, E); else for (k in E) we(p + "[" + k + "]", E[k], D, Z);
            }
            q.param = function(p, E) {
                var D, Z = [], k = function(p, E) {
                    var D = l(E) ? E() : E;
                    Z[Z.length] = encodeURIComponent(p) + "=" + encodeURIComponent(null == D ? "" : D);
                };
                if (null == p) return "";
                if (Array.isArray(p) || p.jquery && !q.isPlainObject(p)) q.each(p, (function() {
                    k(this.name, this.value);
                })); else for (D in p) we(D, p[D], E, k);
                return Z.join("&");
            }, q.fn.extend({
                serialize: function() {
                    return q.param(this.serializeArray());
                },
                serializeArray: function() {
                    return this.map((function() {
                        var p = q.prop(this, "elements");
                        return p ? q.makeArray(p) : this;
                    })).filter((function() {
                        var p = this.type;
                        return this.name && !q(this).is(":disabled") && pf.test(this.nodeName) && !Ao.test(p) && (this.checked || !kL.test(p));
                    })).map((function(p, E) {
                        var D = q(this).val();
                        return null == D ? null : Array.isArray(D) ? q.map(D, (function(p) {
                            return {
                                name: E.name,
                                value: p.replace(sf, "\r\n")
                            };
                        })) : {
                            name: E.name,
                            value: D.replace(sf, "\r\n")
                        };
                    })).get();
                }
            });
            var AK = /%20/g, RM = /#.*$/, Tn = /([?&])_=[^&]*/, zu = /^(.*?):[ \t]*([^\r\n]*)$/gm, uk = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, MJ = /^(?:GET|HEAD)$/, jo = /^\/\//, NN = {}, vC = {}, wS = "*/".concat("*"), kn = J.createElement("a");
            function It(p) {
                return function(E, D) {
                    "string" != typeof E && (D = E, E = "*");
                    var Z, k = 0, C = E.toLowerCase().match(u) || [];
                    if (l(D)) for (;Z = C[k++]; ) "+" === Z[0] ? (Z = Z.slice(1) || "*", (p[Z] = p[Z] || []).unshift(D)) : (p[Z] = p[Z] || []).push(D);
                };
            }
            function Zw(p, E, D, Z) {
                var k = {}, C = p === vC;
                function F(P) {
                    var M;
                    return k[P] = !0, q.each(p[P] || [], (function(p, P) {
                        var B = P(E, D, Z);
                        return "string" != typeof B || C || k[B] ? C ? !(M = B) : void 0 : (E.dataTypes.unshift(B),
                        F(B), !1);
                    })), M;
                }
                return F(E.dataTypes[0]) || !k["*"] && F("*");
            }
            function ZY(p, E) {
                var D, Z, k = q.ajaxSettings.flatOptions || {};
                for (D in E) void 0 !== E[D] && ((k[D] ? p : Z || (Z = {}))[D] = E[D]);
                return Z && q.extend(!0, p, Z), p;
            }
            function Hu(p, E, D) {
                for (var Z, k, C, F, P = p.contents, M = p.dataTypes; "*" === M[0]; ) M.shift(),
                void 0 === Z && (Z = p.mimeType || E.getResponseHeader("Content-Type"));
                if (Z) for (k in P) if (P[k] && P[k].test(Z)) {
                    M.unshift(k);
                    break;
                }
                if (M[0] in D) C = M[0]; else {
                    for (k in D) {
                        if (!M[0] || p.converters[k + " " + M[0]]) {
                            C = k;
                            break;
                        }
                        F || (F = k);
                    }
                    C = C || F;
                }
                if (C) return C !== M[0] && M.unshift(C), D[C];
            }
            function SM(p, E, D, Z) {
                var k, C, F, P, M, B = {}, Q = p.dataTypes.slice();
                if (Q[1]) for (F in p.converters) B[F.toLowerCase()] = p.converters[F];
                for (C = Q.shift(); C; ) if (p.responseFields[C] && (D[p.responseFields[C]] = E),
                !M && Z && p.dataFilter && (E = p.dataFilter(E, p.dataType)), M = C, C = Q.shift()) if ("*" === C) C = M; else if ("*" !== M && M !== C) {
                    if (!(F = B[M + " " + C] || B["* " + C])) for (k in B) if ((P = k.split(" "))[1] === C && (F = B[M + " " + P[0]] || B["* " + P[0]])) {
                        !0 === F ? F = B[k] : !0 !== B[k] && (C = P[0], Q.unshift(P[1]));
                        break;
                    }
                    if (!0 !== F) if (F && p.throws) E = F(E); else try {
                        E = F(E);
                    } catch (p) {
                        return {
                            state: "parsererror",
                            error: F ? p : "No conversion from " + M + " to " + C
                        };
                    }
                }
                return {
                    state: "success",
                    data: E
                };
            }
            kn.href = uR.href, q.extend({
                active: 0,
                lastModified: {},
                etag: {},
                ajaxSettings: {
                    url: uR.href,
                    type: "GET",
                    isLocal: uk.test(uR.protocol),
                    global: !0,
                    processData: !0,
                    async: !0,
                    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                    accepts: {
                        "*": wS,
                        text: "text/plain",
                        html: "text/html",
                        xml: "application/xml, text/xml",
                        json: "application/json, text/javascript"
                    },
                    contents: {
                        xml: /\bxml\b/,
                        html: /\bhtml/,
                        json: /\bjson\b/
                    },
                    responseFields: {
                        xml: "responseXML",
                        text: "responseText",
                        json: "responseJSON"
                    },
                    converters: {
                        "* text": String,
                        "text html": !0,
                        "text json": JSON.parse,
                        "text xml": q.parseXML
                    },
                    flatOptions: {
                        url: !0,
                        context: !0
                    }
                },
                ajaxSetup: function(p, E) {
                    return E ? ZY(ZY(p, q.ajaxSettings), E) : ZY(q.ajaxSettings, p);
                },
                ajaxPrefilter: It(NN),
                ajaxTransport: It(vC),
                ajax: function(E, D) {
                    "object" == typeof E && (D = E, E = void 0), D = D || {};
                    var Z, k, C, F, P, M, B, Q, x, U, N = q.ajaxSetup({}, D), l = N.context || N, z = N.context && (l.nodeType || l.jquery) ? q(l) : q.event, S = q.Deferred(), h = q.Callbacks("once memory"), o = N.statusCode || {}, O = {}, e = {}, H = "canceled", m = {
                        readyState: 0,
                        getResponseHeader: function(p) {
                            var E;
                            if (B) {
                                if (!F) for (F = {}; E = zu.exec(C); ) F[E[1].toLowerCase() + " "] = (F[E[1].toLowerCase() + " "] || []).concat(E[2]);
                                E = F[p.toLowerCase() + " "];
                            }
                            return null == E ? null : E.join(", ");
                        },
                        getAllResponseHeaders: function() {
                            return B ? C : null;
                        },
                        setRequestHeader: function(p, E) {
                            return null == B && (p = e[p.toLowerCase()] = e[p.toLowerCase()] || p, O[p] = E),
                            this;
                        },
                        overrideMimeType: function(p) {
                            return null == B && (N.mimeType = p), this;
                        },
                        statusCode: function(p) {
                            var E;
                            if (p) if (B) m.always(p[m.status]); else for (E in p) o[E] = [ o[E], p[E] ];
                            return this;
                        },
                        abort: function(p) {
                            var E = p || H;
                            return Z && Z.abort(E), R(0, E), this;
                        }
                    };
                    if (S.promise(m), N.url = ((E || N.url || uR.href) + "").replace(jo, uR.protocol + "//"),
                    N.type = D.method || D.type || N.method || N.type, N.dataTypes = (N.dataType || "*").toLowerCase().match(u) || [ "" ],
                    null == N.crossDomain) {
                        M = J.createElement("a");
                        try {
                            M.href = N.url, M.href = M.href, N.crossDomain = kn.protocol + "//" + kn.host != M.protocol + "//" + M.host;
                        } catch (p) {
                            N.crossDomain = !0;
                        }
                    }
                    if (N.data && N.processData && "string" != typeof N.data && (N.data = q.param(N.data, N.traditional)),
                    Zw(NN, N, D, m), B) return m;
                    for (x in (Q = q.event && N.global) && 0 == q.active++ && q.event.trigger("ajaxStart"),
                    N.type = N.type.toUpperCase(), N.hasContent = !MJ.test(N.type), k = N.url.replace(RM, ""),
                    N.hasContent ? N.data && N.processData && 0 === (N.contentType || "").indexOf("application/x-www-form-urlencoded") && (N.data = N.data.replace(AK, "+")) : (U = N.url.slice(k.length),
                    N.data && (N.processData || "string" == typeof N.data) && (k += (pG.test(k) ? "&" : "?") + N.data,
                    delete N.data), !1 === N.cache && (k = k.replace(Tn, "$1"), U = (pG.test(k) ? "&" : "?") + "_=" + jl.guid++ + U),
                    N.url = k + U), N.ifModified && (q.lastModified[k] && m.setRequestHeader("If-Modified-Since", q.lastModified[k]),
                    q.etag[k] && m.setRequestHeader("If-None-Match", q.etag[k])), (N.data && N.hasContent && !1 !== N.contentType || D.contentType) && m.setRequestHeader("Content-Type", N.contentType),
                    m.setRequestHeader("Accept", N.dataTypes[0] && N.accepts[N.dataTypes[0]] ? N.accepts[N.dataTypes[0]] + ("*" !== N.dataTypes[0] ? ", " + wS + "; q=0.01" : "") : N.accepts["*"]),
                    N.headers) m.setRequestHeader(x, N.headers[x]);
                    if (N.beforeSend && (!1 === N.beforeSend.call(l, m, N) || B)) return m.abort();
                    if (H = "abort", h.add(N.complete), m.done(N.success), m.fail(N.error), Z = Zw(vC, N, D, m)) {
                        if (m.readyState = 1, Q && z.trigger("ajaxSend", [ m, N ]), B) return m;
                        N.async && N.timeout > 0 && (P = p.setTimeout((function() {
                            m.abort("timeout");
                        }), N.timeout));
                        try {
                            B = !1, Z.send(O, R);
                        } catch (p) {
                            if (B) throw p;
                            R(-1, p);
                        }
                    } else R(-1, "No Transport");
                    function R(E, D, F, M) {
                        var x, U, J, O, e, H = D;
                        B || (B = !0, P && p.clearTimeout(P), Z = void 0, C = M || "", m.readyState = E > 0 ? 4 : 0,
                        x = E >= 200 && E < 300 || 304 === E, F && (O = Hu(N, m, F)), !x && q.inArray("script", N.dataTypes) > -1 && q.inArray("json", N.dataTypes) < 0 && (N.converters["text script"] = function() {}),
                        O = SM(N, O, m, x), x ? (N.ifModified && ((e = m.getResponseHeader("Last-Modified")) && (q.lastModified[k] = e),
                        (e = m.getResponseHeader("etag")) && (q.etag[k] = e)), 204 === E || "HEAD" === N.type ? H = "nocontent" : 304 === E ? H = "notmodified" : (H = O.state,
                        U = O.data, x = !(J = O.error))) : (J = H, !E && H || (H = "error", E < 0 && (E = 0))),
                        m.status = E, m.statusText = (D || H) + "", x ? S.resolveWith(l, [ U, H, m ]) : S.rejectWith(l, [ m, H, J ]),
                        m.statusCode(o), o = void 0, Q && z.trigger(x ? "ajaxSuccess" : "ajaxError", [ m, N, x ? U : J ]),
                        h.fireWith(l, [ m, H ]), Q && (z.trigger("ajaxComplete", [ m, N ]), --q.active || q.event.trigger("ajaxStop")));
                    }
                    return m;
                },
                getJSON: function(p, E, D) {
                    return q.get(p, E, D, "json");
                },
                getScript: function(p, E) {
                    return q.get(p, void 0, E, "script");
                }
            }), q.each([ "get", "post" ], (function(p, E) {
                q[E] = function(p, D, Z, k) {
                    return l(D) && (k = k || Z, Z = D, D = void 0), q.ajax(q.extend({
                        url: p,
                        type: E,
                        dataType: k,
                        data: D,
                        success: Z
                    }, q.isPlainObject(p) && p));
                };
            })), q.ajaxPrefilter((function(p) {
                var E;
                for (E in p.headers) "content-type" === E.toLowerCase() && (p.contentType = p.headers[E] || "");
            })), q._evalUrl = function(p, E, D) {
                return q.ajax({
                    url: p,
                    type: "GET",
                    dataType: "script",
                    cache: !0,
                    async: !1,
                    global: !1,
                    converters: {
                        "text script": function() {}
                    },
                    dataFilter: function(p) {
                        q.globalEval(p, E, D);
                    }
                });
            }, q.fn.extend({
                wrapAll: function(p) {
                    var E;
                    return this[0] && (l(p) && (p = p.call(this[0])), E = q(p, this[0].ownerDocument).eq(0).clone(!0),
                    this[0].parentNode && E.insertBefore(this[0]), E.map((function() {
                        for (var p = this; p.firstElementChild; ) p = p.firstElementChild;
                        return p;
                    })).append(this)), this;
                },
                wrapInner: function(p) {
                    return l(p) ? this.each((function(E) {
                        q(this).wrapInner(p.call(this, E));
                    })) : this.each((function() {
                        var E = q(this), D = E.contents();
                        D.length ? D.wrapAll(p) : E.append(p);
                    }));
                },
                wrap: function(p) {
                    var E = l(p);
                    return this.each((function(D) {
                        q(this).wrapAll(E ? p.call(this, D) : p);
                    }));
                },
                unwrap: function(p) {
                    return this.parent(p).not("body").each((function() {
                        q(this).replaceWith(this.childNodes);
                    })), this;
                }
            }), q.expr.pseudos.hidden = function(p) {
                return !q.expr.pseudos.visible(p);
            }, q.expr.pseudos.visible = function(p) {
                return !!(p.offsetWidth || p.offsetHeight || p.getClientRects().length);
            }, q.ajaxSettings.xhr = function() {
                try {
                    return new p.XMLHttpRequest;
                } catch (p) {}
            };
            var Yj = {
                0: 200,
                1223: 204
            }, Ck = q.ajaxSettings.xhr();
            N.cors = !!Ck && "withCredentials" in Ck, N.ajax = Ck = !!Ck, q.ajaxTransport((function(E) {
                var D, Z;
                if (N.cors || Ck && !E.crossDomain) return {
                    send: function(k, C) {
                        var F, P = E.xhr();
                        if (P.open(E.type, E.url, E.async, E.username, E.password), E.xhrFields) for (F in E.xhrFields) P[F] = E.xhrFields[F];
                        for (F in E.mimeType && P.overrideMimeType && P.overrideMimeType(E.mimeType), E.crossDomain || k["X-Requested-With"] || (k["X-Requested-With"] = "XMLHttpRequest"),
                        k) P.setRequestHeader(F, k[F]);
                        D = function(p) {
                            return function() {
                                D && (D = Z = P.onload = P.onerror = P.onabort = P.ontimeout = P.onreadystatechange = null,
                                "abort" === p ? P.abort() : "error" === p ? "number" != typeof P.status ? C(0, "error") : C(P.status, P.statusText) : C(Yj[P.status] || P.status, P.statusText, "text" !== (P.responseType || "text") || "string" != typeof P.responseText ? {
                                    binary: P.response
                                } : {
                                    text: P.responseText
                                }, P.getAllResponseHeaders()));
                            };
                        }, P.onload = D(), Z = P.onerror = P.ontimeout = D("error"), void 0 !== P.onabort ? P.onabort = Z : P.onreadystatechange = function() {
                            4 === P.readyState && p.setTimeout((function() {
                                D && Z();
                            }));
                        }, D = D("abort");
                        try {
                            P.send(E.hasContent && E.data || null);
                        } catch (p) {
                            if (D) throw p;
                        }
                    },
                    abort: function() {
                        D && D();
                    }
                };
            })), q.ajaxPrefilter((function(p) {
                p.crossDomain && (p.contents.script = !1);
            })), q.ajaxSetup({
                accepts: {
                    script: "text/javascript, application/javascript, " + "application/ecmascript, application/x-ecmascript"
                },
                contents: {
                    script: /\b(?:java|ecma)script\b/
                },
                converters: {
                    "text script": function(p) {
                        return q.globalEval(p), p;
                    }
                }
            }), q.ajaxPrefilter("script", (function(p) {
                void 0 === p.cache && (p.cache = !1), p.crossDomain && (p.type = "GET");
            })), q.ajaxTransport("script", (function(p) {
                var E, D;
                if (p.crossDomain || p.scriptAttrs) return {
                    send: function(Z, k) {
                        E = q("<script>").attr(p.scriptAttrs || {}).prop({
                            charset: p.scriptCharset,
                            src: p.url
                        }).on("load error", D = function(p) {
                            E.remove(), D = null, p && k("error" === p.type ? 404 : 200, p.type);
                        }), J.head.appendChild(E[0]);
                    },
                    abort: function() {
                        D && D();
                    }
                };
            }));
            var FT = [], fc = /(=)\?(?=&|$)|\?\?/;
            q.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function() {
                    var p = FT.pop() || q.expando + "_" + jl.guid++;
                    return this[p] = !0, p;
                }
            }), q.ajaxPrefilter("json jsonp", (function(E, D, Z) {
                var k, C, F, P = !1 !== E.jsonp && (fc.test(E.url) ? "url" : "string" == typeof E.data && 0 === (E.contentType || "").indexOf("application/x-www-form-urlencoded") && fc.test(E.data) && "data");
                if (P || "jsonp" === E.dataTypes[0]) return k = E.jsonpCallback = l(E.jsonpCallback) ? E.jsonpCallback() : E.jsonpCallback,
                P ? E[P] = E[P].replace(fc, "$1" + k) : !1 !== E.jsonp && (E.url += (pG.test(E.url) ? "&" : "?") + E.jsonp + "=" + k),
                E.converters["script json"] = function() {
                    return F || q.error(k + " was not called"), F[0];
                }, E.dataTypes[0] = "json", C = p[k], p[k] = function() {
                    F = arguments;
                }, Z.always((function() {
                    void 0 === C ? q(p).removeProp(k) : p[k] = C, E[k] && (E.jsonpCallback = D.jsonpCallback,
                    FT.push(k)), F && l(C) && C(F[0]), F = C = void 0;
                })), "script";
            })), N.createHTMLDocument = function() {
                var p = J.implementation.createHTMLDocument("").body;
                return p.innerHTML = "<form></form><form></form>", 2 === p.childNodes.length;
            }(), q.parseHTML = function(p, E, D) {
                return "string" != typeof p ? [] : ("boolean" == typeof E && (D = E, E = !1), E || (N.createHTMLDocument ? ((Z = (E = J.implementation.createHTMLDocument("")).createElement("base")).href = J.location.href,
                E.head.appendChild(Z)) : E = J), C = !D && [], (k = K.exec(p)) ? [ E.createElement(k[1]) ] : (k = aO([ p ], E, C),
                C && C.length && q(C).remove(), q.merge([], k.childNodes)));
                var Z, k, C;
            }, q.fn.load = function(p, E, D) {
                var Z, k, C, F = this, P = p.indexOf(" ");
                return P > -1 && (Z = Jq(p.slice(P)), p = p.slice(0, P)), l(E) ? (D = E, E = void 0) : E && "object" == typeof E && (k = "POST"),
                F.length > 0 && q.ajax({
                    url: p,
                    type: k || "GET",
                    dataType: "html",
                    data: E
                }).done((function(p) {
                    C = arguments, F.html(Z ? q("<div>").append(q.parseHTML(p)).find(Z) : p);
                })).always(D && function(p, E) {
                    F.each((function() {
                        D.apply(this, C || [ p.responseText, E, p ]);
                    }));
                }), this;
            }, q.expr.pseudos.animated = function(p) {
                return q.grep(q.timers, (function(E) {
                    return p === E.elem;
                })).length;
            }, q.offset = {
                setOffset: function(p, E, D) {
                    var Z, k, C, F, P, M, B, Q = q.css(p, "position"), x = q(p), U = {};
                    "static" === Q && (p.style.position = "relative"), P = x.offset(), C = q.css(p, "top"),
                    M = q.css(p, "left"), (B = ("absolute" === Q || "fixed" === Q) && (C + M).indexOf("auto") > -1) ? (F = (Z = x.position()).top,
                    k = Z.left) : (F = parseFloat(C) || 0, k = parseFloat(M) || 0), l(E) && (E = E.call(p, D, q.extend({}, P))),
                    null != E.top && (U.top = E.top - P.top + F), null != E.left && (U.left = E.left - P.left + k),
                    "using" in E ? E.using.call(p, U) : x.css(U);
                }
            }, q.fn.extend({
                offset: function(p) {
                    if (arguments.length) return void 0 === p ? this : this.each((function(E) {
                        q.offset.setOffset(this, p, E);
                    }));
                    var E, D, Z = this[0];
                    return Z ? Z.getClientRects().length ? (E = Z.getBoundingClientRect(), D = Z.ownerDocument.defaultView,
                    {
                        top: E.top + D.pageYOffset,
                        left: E.left + D.pageXOffset
                    }) : {
                        top: 0,
                        left: 0
                    } : void 0;
                },
                position: function() {
                    if (this[0]) {
                        var p, E, D, Z = this[0], k = {
                            top: 0,
                            left: 0
                        };
                        if ("fixed" === q.css(Z, "position")) E = Z.getBoundingClientRect(); else {
                            for (E = this.offset(), D = Z.ownerDocument, p = Z.offsetParent || D.documentElement; p && (p === D.body || p === D.documentElement) && "static" === q.css(p, "position"); ) p = p.parentNode;
                            p && p !== Z && 1 === p.nodeType && ((k = q(p).offset()).top += q.css(p, "borderTopWidth", !0),
                            k.left += q.css(p, "borderLeftWidth", !0));
                        }
                        return {
                            top: E.top - k.top - q.css(Z, "marginTop", !0),
                            left: E.left - k.left - q.css(Z, "marginLeft", !0)
                        };
                    }
                },
                offsetParent: function() {
                    return this.map((function() {
                        for (var p = this.offsetParent; p && "static" === q.css(p, "position"); ) p = p.offsetParent;
                        return p || mw;
                    }));
                }
            }), q.each({
                scrollLeft: "pageXOffset",
                scrollTop: "pageYOffset"
            }, (function(p, E) {
                var D = "pageYOffset" === E;
                q.fn[p] = function(Z) {
                    return t(this, (function(p, Z, k) {
                        var C;
                        if (z(p) ? C = p : 9 === p.nodeType && (C = p.defaultView), void 0 === k) return C ? C[E] : p[Z];
                        C ? C.scrollTo(D ? C.pageXOffset : k, D ? k : C.pageYOffset) : p[Z] = k;
                    }), p, Z, arguments.length);
                };
            })), q.each([ "top", "left" ], (function(p, E) {
                q.cssHooks[E] = yo(N.pixelPosition, (function(p, D) {
                    if (D) return D = Iu(p, E), pP.test(D) ? q(p).position()[E] + "px" : D;
                }));
            })), q.each({
                Height: "height",
                Width: "width"
            }, (function(p, E) {
                q.each({
                    padding: "inner" + p,
                    content: E,
                    "": "outer" + p
                }, (function(D, Z) {
                    q.fn[Z] = function(k, C) {
                        var F = arguments.length && (D || "boolean" != typeof k), P = D || (!0 === k || !0 === C ? "margin" : "border");
                        return t(this, (function(E, D, k) {
                            var C;
                            return z(E) ? 0 === Z.indexOf("outer") ? E["inner" + p] : E.document.documentElement["client" + p] : 9 === E.nodeType ? (C = E.documentElement,
                            Math.max(E.body["scroll" + p], C["scroll" + p], E.body["offset" + p], C["offset" + p], C["client" + p])) : void 0 === k ? q.css(E, D, P) : q.style(E, D, k, P);
                        }), E, F ? k : void 0, F);
                    };
                }));
            })), q.each([ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], (function(p, E) {
                q.fn[E] = function(p) {
                    return this.on(E, p);
                };
            })), q.fn.extend({
                bind: function(p, E, D) {
                    return this.on(p, null, E, D);
                },
                unbind: function(p, E) {
                    return this.off(p, null, E);
                },
                delegate: function(p, E, D, Z) {
                    return this.on(E, p, D, Z);
                },
                undelegate: function(p, E, D) {
                    return 1 === arguments.length ? this.off(p, "**") : this.off(E, p || "**", D);
                },
                hover: function(p, E) {
                    return this.mouseenter(p).mouseleave(E || p);
                }
            }), q.each(("blur focus focusin focusout resize scroll click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup contextmenu").split(" "), (function(p, E) {
                q.fn[E] = function(p, D) {
                    return arguments.length > 0 ? this.on(E, null, p, D) : this.trigger(E);
                };
            }));
            var yI = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            q.proxy = function(p, E) {
                var D, Z, C;
                if ("string" == typeof E && (D = p[E], E = p, p = D), l(p)) return Z = k.call(arguments, 2),
                C = function() {
                    return p.apply(E || this, Z.concat(k.call(arguments)));
                }, C.guid = p.guid = p.guid || q.guid++, C;
            }, q.holdReady = function(p) {
                p ? q.readyWait++ : q.ready(!0);
            }, q.isArray = Array.isArray, q.parseJSON = JSON.parse, q.nodeName = Y, q.isFunction = l,
            q.isWindow = z, q.camelCase = G, q.type = o, q.now = Date.now, q.isNumeric = function(p) {
                var E = q.type(p);
                return ("number" === E || "string" === E) && !isNaN(p - parseFloat(p));
            }, q.trim = function(p) {
                return null == p ? "" : (p + "").replace(yI, "");
            }, "function" == typeof define && define.amd && define("jquery", [], (function() {
                return q;
            }));
            var AL = p.jQuery, XU = p.$;
            return q.noConflict = function(E) {
                return p.$ === q && (p.$ = XU), E && p.jQuery === q && (p.jQuery = AL), q;
            }, void 0 === E && (p.jQuery = p.$ = q), q;
        }));
    }, {} ],
    6: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.browser = p("webextension-polyfill");
    }, {
        "webextension-polyfill": 7
    } ],
    7: [ function(p, E, D) {
        "use strict";
        !function(p, Z) {
            if ("function" == typeof define && define.amd) define("webextension-polyfill", [ "module" ], Z); else if (void 0 !== D) Z(E); else {
                var k = {
                    exports: {}
                };
                Z(k), p.browser = k.exports;
            }
        }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0, (function(p) {
            if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
                const E = "The message port closed before a response was received.", D = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", Z = p => {
                    const D = {
                        alarms: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            clearAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        bookmarks: {
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getChildren: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getRecent: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getSubTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTree: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        browserAction: {
                            disable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            enable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            getBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getBadgeText: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            openPopup: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setBadgeText: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        browsingData: {
                            remove: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            removeCache: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCookies: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeDownloads: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFormData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeHistory: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeLocalStorage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePasswords: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePluginData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            settings: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        commands: {
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        contextMenus: {
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        cookies: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAllCookieStores: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        devtools: {
                            inspectedWindow: {
                                eval: {
                                    minArgs: 1,
                                    maxArgs: 2,
                                    singleCallbackArg: !1
                                }
                            },
                            panels: {
                                create: {
                                    minArgs: 3,
                                    maxArgs: 3,
                                    singleCallbackArg: !0
                                },
                                elements: {
                                    createSidebarPane: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            }
                        },
                        downloads: {
                            cancel: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            download: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            erase: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFileIcon: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            open: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            pause: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFile: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            resume: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        extension: {
                            isAllowedFileSchemeAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            isAllowedIncognitoAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        history: {
                            addUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            deleteRange: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getVisits: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        i18n: {
                            detectLanguage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAcceptLanguages: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        identity: {
                            launchWebAuthFlow: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        idle: {
                            queryState: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        management: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSelf: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setEnabled: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            uninstallSelf: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        notifications: {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPermissionLevel: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        pageAction: {
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            hide: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        permissions: {
                            contains: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            request: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        runtime: {
                            getBackgroundPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPlatformInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            openOptionsPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            requestUpdateCheck: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            sendMessage: {
                                minArgs: 1,
                                maxArgs: 3
                            },
                            sendNativeMessage: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            setUninstallURL: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        sessions: {
                            getDevices: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getRecentlyClosed: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            restore: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        storage: {
                            local: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            managed: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            sync: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        },
                        tabs: {
                            captureVisibleTab: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            detectLanguage: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            discard: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            duplicate: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            executeScript: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getZoom: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getZoomSettings: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goBack: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goForward: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            highlight: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            insertCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            query: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            reload: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            sendMessage: {
                                minArgs: 2,
                                maxArgs: 3
                            },
                            setZoom: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            setZoomSettings: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            update: {
                                minArgs: 1,
                                maxArgs: 2
                            }
                        },
                        topSites: {
                            get: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        webNavigation: {
                            getAllFrames: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFrame: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        webRequest: {
                            handlerBehaviorChanged: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        windows: {
                            create: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getLastFocused: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        }
                    };
                    if (0 === Object.keys(D).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                    class Z extends WeakMap {
                        constructor(p, E = void 0) {
                            super(E), this.createItem = p;
                        }
                        get(p) {
                            return this.has(p) || this.set(p, this.createItem(p)), super.get(p);
                        }
                    }
                    const k = p => p && "object" == typeof p && "function" == typeof p.then, C = (E, D) => (...Z) => {
                        p.runtime.lastError ? E.reject(new Error(p.runtime.lastError.message)) : D.singleCallbackArg || Z.length <= 1 && !1 !== D.singleCallbackArg ? E.resolve(Z[0]) : E.resolve(Z);
                    }, F = p => 1 == p ? "argument" : "arguments", P = (p, E) => function D(Z, ...k) {
                        if (k.length < E.minArgs) throw new Error(`Expected at least ${E.minArgs} ${F(E.minArgs)} for ${p}(), got ${k.length}`);
                        if (k.length > E.maxArgs) throw new Error(`Expected at most ${E.maxArgs} ${F(E.maxArgs)} for ${p}(), got ${k.length}`);
                        return new Promise(((D, F) => {
                            if (E.fallbackToNoCallback) try {
                                Z[p](...k, C({
                                    resolve: D,
                                    reject: F
                                }, E));
                            } catch (C) {
                                Z[p](...k), E.fallbackToNoCallback = !1, E.noCallback = !0, D();
                            } else E.noCallback ? (Z[p](...k), D()) : Z[p](...k, C({
                                resolve: D,
                                reject: F
                            }, E));
                        }));
                    }, M = (p, E, D) => new Proxy(E, {
                        apply: (E, Z, k) => D.call(Z, p, ...k)
                    });
                    let B = Function.call.bind(Object.prototype.hasOwnProperty);
                    const Q = (p, E = {}, D = {}) => {
                        let Z = Object.create(null), k = {
                            has: (E, D) => D in p || D in Z,
                            get(k, C, F) {
                                if (C in Z) return Z[C];
                                if (!(C in p)) return;
                                let x = p[C];
                                if ("function" == typeof x) if ("function" == typeof E[C]) x = M(p, p[C], E[C]); else if (B(D, C)) {
                                    let E = P(C, D[C]);
                                    x = M(p, p[C], E);
                                } else x = x.bind(p); else if ("object" == typeof x && null !== x && (B(E, C) || B(D, C))) x = Q(x, E[C], D[C]); else {
                                    if (!B(D, "*")) return Object.defineProperty(Z, C, {
                                        configurable: !0,
                                        enumerable: !0,
                                        get: () => p[C],
                                        set(E) {
                                            p[C] = E;
                                        }
                                    }), x;
                                    x = Q(x, E[C], D["*"]);
                                }
                                return Z[C] = x, x;
                            },
                            set: (E, D, k, C) => (D in Z ? Z[D] = k : p[D] = k, !0),
                            defineProperty: (p, E, D) => Reflect.defineProperty(Z, E, D),
                            deleteProperty: (p, E) => Reflect.deleteProperty(Z, E)
                        }, C = Object.create(p);
                        return new Proxy(C, k);
                    }, x = p => ({
                        addListener(E, D, ...Z) {
                            E.addListener(p.get(D), ...Z);
                        },
                        hasListener: (E, D) => E.hasListener(p.get(D)),
                        removeListener(E, D) {
                            E.removeListener(p.get(D));
                        }
                    }), U = new Z((p => "function" != typeof p ? p : function E(D) {
                        const Z = Q(D, {}, {
                            getContent: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        });
                        p(Z);
                    }));
                    let N = !1;
                    const l = new Z((p => "function" != typeof p ? p : function E(D, Z, C) {
                        let F = !1, P, M = new Promise((p => {
                            P = function(E) {
                                N || (N = !0), F = !0, p(E);
                            };
                        })), B;
                        try {
                            B = p(D, Z, P);
                        } catch (p) {
                            B = Promise.reject(p);
                        }
                        const Q = !0 !== B && k(B);
                        if (!0 !== B && !Q && !F) return !1;
                        const x = p => {
                            p.then((p => {
                                C(p);
                            }), (p => {
                                let E;
                                E = p && (p instanceof Error || "string" == typeof p.message) ? p.message : "An unexpected error occurred",
                                C({
                                    __mozWebExtensionPolyfillReject__: !0,
                                    message: E
                                });
                            })).catch((p => {}));
                        };
                        return x(Q ? B : M), !0;
                    })), z = ({reject: D, resolve: Z}, k) => {
                        p.runtime.lastError ? p.runtime.lastError.message === E ? Z() : D(new Error(p.runtime.lastError.message)) : k && k.__mozWebExtensionPolyfillReject__ ? D(new Error(k.message)) : Z(k);
                    }, J = (p, E, D, ...Z) => {
                        if (Z.length < E.minArgs) throw new Error(`Expected at least ${E.minArgs} ${F(E.minArgs)} for ${p}(), got ${Z.length}`);
                        if (Z.length > E.maxArgs) throw new Error(`Expected at most ${E.maxArgs} ${F(E.maxArgs)} for ${p}(), got ${Z.length}`);
                        return new Promise(((p, E) => {
                            const k = z.bind(null, {
                                resolve: p,
                                reject: E
                            });
                            Z.push(k), D.sendMessage(...Z);
                        }));
                    }, S = {
                        devtools: {
                            network: {
                                onRequestFinished: x(U)
                            }
                        },
                        runtime: {
                            onMessage: x(l),
                            onMessageExternal: x(l),
                            sendMessage: J.bind(null, "sendMessage", {
                                minArgs: 1,
                                maxArgs: 3
                            })
                        },
                        tabs: {
                            sendMessage: J.bind(null, "sendMessage", {
                                minArgs: 2,
                                maxArgs: 3
                            })
                        }
                    }, h = {
                        clear: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    };
                    return D.privacy = {
                        network: {
                            "*": h
                        },
                        services: {
                            "*": h
                        },
                        websites: {
                            "*": h
                        }
                    }, Q(p, S, D);
                };
                if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
                p.exports = Z(chrome);
            } else p.exports = browser;
        }));
    }, {} ],
    8: [ function(p, E, D) {
        "use strict";
        var Z = void 0 && (void 0).__importDefault || function(p) {
            return p && p.__esModule ? p : {
                default: p
            };
        };
        Object.defineProperty(D, "__esModule", {
            value: !0
        });
        const k = Z(p("i18n-iso-countries")), C = Z(p("i18n-iso-countries/langs/en.json")), F = Z(p("jquery")), P = p("webextension-polyfill-ts"), M = p("../../../vpn-core/src/js/connection");
        async function B() {
            const p = await P.browser.runtime.sendMessage({
                action: "getIp"
            });
            p && (0, F.default)("#ip").text(p);
        }
        function Q(p) {
            let E = 1;
            const D = p - 1;
            return E = D < 0 ? 0 : D > 3 ? 3 : D, E;
        }
        function x(p, E, D) {
            if (!p || !E) return !1;
            const Z = (0, F.default)(".current-location");
            return Z.find(".location-name").text(E), Z.find(".flag").css("background-image", `url(../images/flags/${p}.svg)`),
            Z.attr("data-code", p), Z.attr("data-quality", D), (0, F.default)(".location-item").removeClass("selected"),
            (0, F.default)(`.location-item[data-code="${p}"]`).addClass("selected"), !0;
        }
        async function U() {
            const p = undefined, E = (0, F.default)(".location-item")[0];
            if (!E) return !1;
            const D = (0, F.default)(E).find(".location-name").text(), Z = undefined, k = undefined;
            return x((0, F.default)(E).attr("data-code"), D, Number((0, F.default)(E).attr("data-quality")) || 3),
            !0;
        }
        async function N() {
            var p, E;
            const D = await P.browser.runtime.sendMessage({
                action: "getConnectionState"
            }), Z = null === (p = null == D ? void 0 : D.proxy) || void 0 === p ? void 0 : p.country, C = undefined, F = Q((null === (E = null == D ? void 0 : D.proxy) || void 0 === E ? void 0 : E.quality) || 4);
            if (!Z) return U(), !1;
            const M = k.default.getName(Z.toUpperCase(), "en", {
                select: "official"
            });
            return x(Z, M, F), !0;
        }
        function l(p) {
            const E = {
                16: "../icons/icon16.png",
                48: "../icons/icon48.png",
                128: "../icons/icon128.png",
                300: "../icons/icon300.png"
            }, D = {
                16: "../icons/disabled16.png",
                48: "../icons/disabled48.png",
                128: "../icons/disabled128.png",
                300: "../icons/disabled300.png"
            };
            P.browser.action.setIcon({
                path: p ? E : D
            });
        }
        async function z() {
            const p = await P.browser.runtime.sendMessage({
                action: "getConnectionState"
            });
            let E = "Unknown", D = "CONNECT", Z = "disconnected";
            p.status === M.ConnectionStatus.NotConnected ? (E = "Not connected", D = "Connect",
            Z = "disconnected", l(!1)) : p.status === M.ConnectionStatus.Connecting ? (E = "Connecting...",
            D = "Stop", Z = "connecting") : p.status === M.ConnectionStatus.Connected ? (E = "Connected",
            D = "Disconnect", Z = "connected", l(!0)) : p.status === M.ConnectionStatus.Cancelling && (E = "Cancelling...",
            D = "Disconnect", Z = "disconnected"), (0, F.default)(".content").removeClass([ "disconnected", "connected", "connecting" ]),
            (0, F.default)(".content").addClass(Z), (0, F.default)("#status").text(E), (0, F.default)("#btn-text").text(D),
            B(), P.browser.runtime.sendMessage({
                action: "updateIndicators"
            });
        }
        async function J() {
            const p = await P.browser.storage.local.get([ "indicator" ]), E = null == p ? void 0 : p.indicator;
            (0, F.default)("#indicator").prop("checked", E);
        }
        function S(p, E, D, Z) {
            const k = Q(D), C = document.createElement("div");
            C.classList.add("location-item", "w-100", "d-flex", "align-items-center");
            const F = document.createElement("div");
            F.classList.add("flag"), F.style.backgroundImage = `url(../images/flags/${p}.svg)`,
            C.appendChild(F);
            const P = document.createElement("div");
            P.classList.add("line"), C.appendChild(P);
            const M = document.createElement("span");
            M.classList.add("location-name"), M.textContent = E, C.appendChild(M);
            const B = document.createElement("div");
            B.classList.add("signal-level", "d-flex", "justify-content-between", "align-items-end");
            for (let p = 0; p < 3; p += 1) {
                const p = document.createElement("div");
                p.classList.add("signal-level-item"), B.appendChild(p);
            }
            C.appendChild(B);
            const x = document.createElement("div");
            return x.classList.add("location-item-arrow"), x.innerHTML = `<svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <path d="M1 1L4 4L1 7" stroke="#FAF2FC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n    </svg>`,
            C.appendChild(x), C.dataset.code = p, C.dataset.quality = String(k), Z && C.classList.add("selected"),
            C;
        }
        function h() {
            (0, F.default)(".location-item").on("click", (async function p() {
                var E;
                const {code: D} = this.dataset, Z = null === (E = this.querySelector(".location-name")) || void 0 === E ? void 0 : E.textContent;
                return !(!D || !Z) && ((0, F.default)(".location-item").removeClass("selected"),
                (0, F.default)(this).addClass("selected"), (0, F.default)(".location-list-wrapper").removeClass("d-flex").addClass("d-none"),
                (0, F.default)(".current-location").find(".location-name").text(Z), (0, F.default)(".current-location").find(".flag").css("background-image", `url(../images/flags/${D}.svg)`),
                (0, F.default)(".current-location").attr("data-code", D), await P.browser.runtime.sendMessage({
                    action: "disconnect"
                }), await P.browser.runtime.sendMessage({
                    action: "connect",
                    countryCode: D
                }), !0);
            }));
        }
        async function o() {
            var p;
            const E = await P.browser.runtime.sendMessage({
                action: "proxylist"
            }), D = await P.browser.runtime.sendMessage({
                action: "getConnectionState"
            }), Z = null === (p = null == D ? void 0 : D.proxy) || void 0 === p ? void 0 : p.country, C = [ ...new Set(E.map((p => p.country))) ], M = {};
            E.forEach((p => {
                M[p.country] = p.quality;
            }));
            const B = C.map((p => [ p, k.default.getName(p.toUpperCase(), "en", {
                select: "official"
            }) ])).sort(((p, E) => p[1].localeCompare(E[1])));
            (0, F.default)(".location-item").remove(), B.forEach((p => {
                const E = p[0], D = undefined, k = undefined, C = S(E, p[1], M[E], E === Z);
                (0, F.default)(".location-list").append(C);
            })), h();
        }
        (0, F.default)((async () => {
            (0, F.default)("#cross").on("click", (() => {
                (0, F.default)(".location-list-wrapper").removeClass("d-flex").addClass("d-none");
            })), (0, F.default)(".current-location").on("click", (() => {
                (0, F.default)(".location-list-wrapper").removeClass("d-none").addClass("d-flex");
            })), (0, F.default)("#indicator").on("click", (async () => {
                const p = (0, F.default)("#indicator").is(":checked");
                await P.browser.storage.local.set({
                    indicator: p
                }), P.browser.runtime.sendMessage({
                    action: "updateIndicators"
                });
            })), k.default.registerLocale(C.default), J(), z(), await o(), N(), setInterval(o, 1e4),
            (0, F.default)("#connect").on("click", (async () => {
                const p = await P.browser.runtime.sendMessage({
                    action: "getConnectionState"
                }), E = undefined, D = undefined, Z = {
                    action: "connect",
                    countryCode: (0, F.default)(".current-location").attr("data-code")
                };
                p.status === M.ConnectionStatus.NotConnected ? Z.action = "connect" : (p.status === M.ConnectionStatus.Connected || p.status === M.ConnectionStatus.Connecting) && (Z.action = "disconnect"),
                await P.browser.runtime.sendMessage(Z);
                const k = undefined;
                (await P.browser.runtime.sendMessage({
                    action: "getConnectionState"
                })).status === M.ConnectionStatus.NotConnected && o();
            })), P.browser.runtime.onMessage.addListener((async p => {
                "stateChanged" === (null == p ? void 0 : p.action) && await z();
            }));
        }));
    }, {
        "../../../vpn-core/src/js/connection": 11,
        "i18n-iso-countries": 3,
        "i18n-iso-countries/langs/en.json": 4,
        jquery: 5,
        "webextension-polyfill-ts": 6
    } ],
    9: [ function(p, E, D) {
        arguments[4][6][0].apply(D, arguments);
    }, {
        dup: 6,
        "webextension-polyfill": 10
    } ],
    10: [ function(p, E, D) {
        "use strict";
        !function(p, Z) {
            if ("function" == typeof define && define.amd) define("webextension-polyfill", [ "module" ], Z); else if (void 0 !== D) Z(E); else {
                var k = {
                    exports: {}
                };
                Z(k), p.browser = k.exports;
            }
        }("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0, (function(p) {
            if ("undefined" == typeof browser || Object.getPrototypeOf(browser) !== Object.prototype) {
                const E = "The message port closed before a response was received.", D = "Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)", Z = p => {
                    const D = {
                        alarms: {
                            clear: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            clearAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            get: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        bookmarks: {
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getChildren: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getRecent: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getSubTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTree: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeTree: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        browserAction: {
                            disable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            enable: {
                                minArgs: 0,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            getBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getBadgeText: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            openPopup: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setBadgeBackgroundColor: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setBadgeText: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        browsingData: {
                            remove: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            removeCache: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCookies: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeDownloads: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFormData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeHistory: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeLocalStorage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePasswords: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removePluginData: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            settings: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        commands: {
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        contextMenus: {
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        cookies: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAllCookieStores: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            set: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        devtools: {
                            inspectedWindow: {
                                eval: {
                                    minArgs: 1,
                                    maxArgs: 2,
                                    singleCallbackArg: !1
                                }
                            },
                            panels: {
                                create: {
                                    minArgs: 3,
                                    maxArgs: 3,
                                    singleCallbackArg: !0
                                },
                                elements: {
                                    createSidebarPane: {
                                        minArgs: 1,
                                        maxArgs: 1
                                    }
                                }
                            }
                        },
                        downloads: {
                            cancel: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            download: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            erase: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFileIcon: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            open: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            pause: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeFile: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            resume: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        extension: {
                            isAllowedFileSchemeAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            isAllowedIncognitoAccess: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        history: {
                            addUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            deleteRange: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            deleteUrl: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getVisits: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            search: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        i18n: {
                            detectLanguage: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAcceptLanguages: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        identity: {
                            launchWebAuthFlow: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        idle: {
                            queryState: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        management: {
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getSelf: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            setEnabled: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            uninstallSelf: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        notifications: {
                            clear: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPermissionLevel: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        },
                        pageAction: {
                            getPopup: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getTitle: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            hide: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setIcon: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            setPopup: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            setTitle: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            },
                            show: {
                                minArgs: 1,
                                maxArgs: 1,
                                fallbackToNoCallback: !0
                            }
                        },
                        permissions: {
                            contains: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            request: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        runtime: {
                            getBackgroundPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getPlatformInfo: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            openOptionsPage: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            requestUpdateCheck: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            sendMessage: {
                                minArgs: 1,
                                maxArgs: 3
                            },
                            sendNativeMessage: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            setUninstallURL: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        sessions: {
                            getDevices: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getRecentlyClosed: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            restore: {
                                minArgs: 0,
                                maxArgs: 1
                            }
                        },
                        storage: {
                            local: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            },
                            managed: {
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                }
                            },
                            sync: {
                                clear: {
                                    minArgs: 0,
                                    maxArgs: 0
                                },
                                get: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                getBytesInUse: {
                                    minArgs: 0,
                                    maxArgs: 1
                                },
                                remove: {
                                    minArgs: 1,
                                    maxArgs: 1
                                },
                                set: {
                                    minArgs: 1,
                                    maxArgs: 1
                                }
                            }
                        },
                        tabs: {
                            captureVisibleTab: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            create: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            detectLanguage: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            discard: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            duplicate: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            executeScript: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 0
                            },
                            getZoom: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getZoomSettings: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goBack: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            goForward: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            highlight: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            insertCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            move: {
                                minArgs: 2,
                                maxArgs: 2
                            },
                            query: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            reload: {
                                minArgs: 0,
                                maxArgs: 2
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            removeCSS: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            sendMessage: {
                                minArgs: 2,
                                maxArgs: 3
                            },
                            setZoom: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            setZoomSettings: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            update: {
                                minArgs: 1,
                                maxArgs: 2
                            }
                        },
                        topSites: {
                            get: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        webNavigation: {
                            getAllFrames: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            getFrame: {
                                minArgs: 1,
                                maxArgs: 1
                            }
                        },
                        webRequest: {
                            handlerBehaviorChanged: {
                                minArgs: 0,
                                maxArgs: 0
                            }
                        },
                        windows: {
                            create: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            get: {
                                minArgs: 1,
                                maxArgs: 2
                            },
                            getAll: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getCurrent: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            getLastFocused: {
                                minArgs: 0,
                                maxArgs: 1
                            },
                            remove: {
                                minArgs: 1,
                                maxArgs: 1
                            },
                            update: {
                                minArgs: 2,
                                maxArgs: 2
                            }
                        }
                    };
                    if (0 === Object.keys(D).length) throw new Error("api-metadata.json has not been included in browser-polyfill");
                    class Z extends WeakMap {
                        constructor(p, E = void 0) {
                            super(E), this.createItem = p;
                        }
                        get(p) {
                            return this.has(p) || this.set(p, this.createItem(p)), super.get(p);
                        }
                    }
                    const k = p => p && "object" == typeof p && "function" == typeof p.then, C = (E, D) => (...Z) => {
                        p.runtime.lastError ? E.reject(p.runtime.lastError) : D.singleCallbackArg || Z.length <= 1 && !1 !== D.singleCallbackArg ? E.resolve(Z[0]) : E.resolve(Z);
                    }, F = p => 1 == p ? "argument" : "arguments", P = (p, E) => function D(Z, ...k) {
                        if (k.length < E.minArgs) throw new Error(`Expected at least ${E.minArgs} ${F(E.minArgs)} for ${p}(), got ${k.length}`);
                        if (k.length > E.maxArgs) throw new Error(`Expected at most ${E.maxArgs} ${F(E.maxArgs)} for ${p}(), got ${k.length}`);
                        return new Promise(((D, F) => {
                            if (E.fallbackToNoCallback) try {
                                Z[p](...k, C({
                                    resolve: D,
                                    reject: F
                                }, E));
                            } catch (C) {
                                Z[p](...k), E.fallbackToNoCallback = !1, E.noCallback = !0, D();
                            } else E.noCallback ? (Z[p](...k), D()) : Z[p](...k, C({
                                resolve: D,
                                reject: F
                            }, E));
                        }));
                    }, M = (p, E, D) => new Proxy(E, {
                        apply: (E, Z, k) => D.call(Z, p, ...k)
                    });
                    let B = Function.call.bind(Object.prototype.hasOwnProperty);
                    const Q = (p, E = {}, D = {}) => {
                        let Z = Object.create(null), k = {
                            has: (E, D) => D in p || D in Z,
                            get(k, C, F) {
                                if (C in Z) return Z[C];
                                if (!(C in p)) return;
                                let x = p[C];
                                if ("function" == typeof x) if ("function" == typeof E[C]) x = M(p, p[C], E[C]); else if (B(D, C)) {
                                    let E = P(C, D[C]);
                                    x = M(p, p[C], E);
                                } else x = x.bind(p); else if ("object" == typeof x && null !== x && (B(E, C) || B(D, C))) x = Q(x, E[C], D[C]); else {
                                    if (!B(D, "*")) return Object.defineProperty(Z, C, {
                                        configurable: !0,
                                        enumerable: !0,
                                        get: () => p[C],
                                        set(E) {
                                            p[C] = E;
                                        }
                                    }), x;
                                    x = Q(x, E[C], D["*"]);
                                }
                                return Z[C] = x, x;
                            },
                            set: (E, D, k, C) => (D in Z ? Z[D] = k : p[D] = k, !0),
                            defineProperty: (p, E, D) => Reflect.defineProperty(Z, E, D),
                            deleteProperty: (p, E) => Reflect.deleteProperty(Z, E)
                        }, C = Object.create(p);
                        return new Proxy(C, k);
                    }, x = p => ({
                        addListener(E, D, ...Z) {
                            E.addListener(p.get(D), ...Z);
                        },
                        hasListener: (E, D) => E.hasListener(p.get(D)),
                        removeListener(E, D) {
                            E.removeListener(p.get(D));
                        }
                    });
                    let U = !1;
                    const N = new Z((p => "function" != typeof p ? p : function E(D, Z, C) {
                        let F = !1, P, M = new Promise((p => {
                            P = function(E) {
                                U || (U = !0), F = !0, p(E);
                            };
                        })), B;
                        try {
                            B = p(D, Z, P);
                        } catch (p) {
                            B = Promise.reject(p);
                        }
                        const Q = !0 !== B && k(B);
                        if (!0 !== B && !Q && !F) return !1;
                        const x = p => {
                            p.then((p => {
                                C(p);
                            }), (p => {
                                let E;
                                E = p && (p instanceof Error || "string" == typeof p.message) ? p.message : "An unexpected error occurred",
                                C({
                                    __mozWebExtensionPolyfillReject__: !0,
                                    message: E
                                });
                            })).catch((p => {}));
                        };
                        return x(Q ? B : M), !0;
                    })), l = ({reject: D, resolve: Z}, k) => {
                        p.runtime.lastError ? p.runtime.lastError.message === E ? Z() : D(p.runtime.lastError) : k && k.__mozWebExtensionPolyfillReject__ ? D(new Error(k.message)) : Z(k);
                    }, z = (p, E, D, ...Z) => {
                        if (Z.length < E.minArgs) throw new Error(`Expected at least ${E.minArgs} ${F(E.minArgs)} for ${p}(), got ${Z.length}`);
                        if (Z.length > E.maxArgs) throw new Error(`Expected at most ${E.maxArgs} ${F(E.maxArgs)} for ${p}(), got ${Z.length}`);
                        return new Promise(((p, E) => {
                            const k = l.bind(null, {
                                resolve: p,
                                reject: E
                            });
                            Z.push(k), D.sendMessage(...Z);
                        }));
                    }, J = {
                        runtime: {
                            onMessage: x(N),
                            onMessageExternal: x(N),
                            sendMessage: z.bind(null, "sendMessage", {
                                minArgs: 1,
                                maxArgs: 3
                            })
                        },
                        tabs: {
                            sendMessage: z.bind(null, "sendMessage", {
                                minArgs: 2,
                                maxArgs: 3
                            })
                        }
                    }, S = {
                        clear: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        get: {
                            minArgs: 1,
                            maxArgs: 1
                        },
                        set: {
                            minArgs: 1,
                            maxArgs: 1
                        }
                    };
                    return D.privacy = {
                        network: {
                            "*": S
                        },
                        services: {
                            "*": S
                        },
                        websites: {
                            "*": S
                        }
                    }, Q(p, J, D);
                };
                if ("object" != typeof chrome || !chrome || !chrome.runtime || !chrome.runtime.id) throw new Error("This script should only be loaded in a browser extension.");
                p.exports = Z(chrome);
            } else p.exports = browser;
        }));
    }, {} ],
    11: [ function(p, E, D) {
        "use strict";
        Object.defineProperty(D, "__esModule", {
            value: !0
        }), D.ConnectionStatus = D.Connection = void 0;
        const Z = p("webextension-polyfill-ts"), k = 3e3;
        var C;
        !function(p) {
            p[p["NotConnected"] = 0] = "NotConnected", p[p["Connecting"] = 1] = "Connecting",
            p[p["Cancelling"] = 2] = "Cancelling", p[p["Connected"] = 3] = "Connected", p[p["Unknown"] = 4] = "Unknown";
        }(C || (C = {})), D.ConnectionStatus = C;
        class F {
            constructor() {
                this.state = {
                    status: C.Unknown
                }, this.proxyList = [], this.listeners = [];
            }
            static async getCurrentConnectionState(p) {
                const E = undefined, D = (await new Promise((p => chrome.proxy.settings.get({}, p)))).value;
                if ("system" === D.mode) return {
                    status: C.NotConnected
                };
                if ("fixed_servers" === D.mode) {
                    const E = `${D.rules.singleProxy.host}:${D.rules.singleProxy.port}`, Z = p.find((p => p.host === E));
                    return Z ? {
                        status: C.Connected,
                        proxy: Z
                    } : {
                        status: C.Unknown
                    };
                }
                return {
                    status: C.Unknown
                };
            }
            static async getProxyList() {
                let p = [];
                const E = await fetch("https://api.nucleusvpn.com/api/proxy");
                if (E.ok) {
                    p = (await E.json()).proxy_list;
                    for (let E = 0; E < p.length; E += 1) p[E].country = p[E].country.toLowerCase();
                }
                return p;
            }
            static async checkProxy(p) {
                let E = !1;
                const D = {
                    mode: "pac_script",
                    pacScript: {
                        data: `function FindProxyForURL(url, host) {\n          if (dnsDomainIs(host,'ifconfig.me'))\n            return 'PROXY ${p}';\n          return 'DIRECT';\n        }`
                    }
                };
                await Z.browser.proxy.settings.set({
                    value: D,
                    scope: "regular"
                });
                const C = new AbortController;
                setTimeout((() => C.abort()), k);
                try {
                    const p = undefined;
                    E = (await fetch("https://ifconfig.me/ip", {
                        signal: C.signal
                    })).ok;
                } catch (p) {}
                return await Z.browser.proxy.settings.clear({}), E;
            }
            static async setProxy(p) {
                const [E, D] = p.split(":"), k = {
                    mode: "fixed_servers",
                    rules: {
                        singleProxy: {
                            host: E,
                            port: Number(D)
                        },
                        bypassList: [ "*api.nucleusvpn.com*" ]
                    }
                };
                await Z.browser.proxy.settings.set({
                    value: k,
                    scope: "regular"
                });
            }
            static async getIp() {
                let p = null;
                const E = new AbortController;
                setTimeout((() => E.abort()), k);
                try {
                    const D = await fetch("https://ifconfig.me/ip", {
                        signal: E.signal
                    });
                    p = await D.text();
                } catch (p) {}
                return p;
            }
            addStateChangeListener(p) {
                this.listeners.push(p);
            }
            async getProxyList() {
                return this.proxyList = await F.getProxyList(), this.proxyList;
            }
            getConnectionState() {
                return this.state.status === C.Unknown ? {
                    status: C.NotConnected,
                    proxy: this.state.proxy
                } : this.state;
            }
            setState(p) {
                if (this.state.status !== p.status) for (const E of this.listeners) E(p);
                this.state = p;
            }
            async connect(p) {
                if (this.state.status === C.Connecting) return void this.setState({
                    status: C.Cancelling
                });
                if (this.state.status === C.Connected) return void await this.disconnect();
                this.proxyList = await F.getProxyList();
                const E = this.proxyList.filter((E => E.country === p));
                if (0 !== E.length) {
                    E.sort(((p, E) => p.quality - E.quality || (Math.random() > .5 ? 1 : -1))), this.setState({
                        status: C.Connecting
                    });
                    for (const p of E) for (let E = 0; E < 2; E++) {
                        const E = await F.checkProxy(p.host);
                        if (this.state.status === C.Cancelling) break;
                        if (E) return await F.setProxy(p.host), void this.setState({
                            status: C.Connected,
                            proxy: p
                        });
                    }
                    this.setState({
                        status: C.NotConnected
                    });
                }
            }
            async disconnect() {
                this.state.status === C.Connecting && (this.setState({
                    status: C.Cancelling
                }), await new Promise((p => setTimeout(p, k + 1e3)))), await Z.browser.proxy.settings.clear({}),
                this.setState({
                    status: C.NotConnected
                });
            }
            async init() {
                this.proxyList = await F.getProxyList(), this.state = await F.getCurrentConnectionState(this.proxyList);
            }
        }
        D.Connection = F;
    }, {
        "webextension-polyfill-ts": 9
    } ]
}, {}, [ 8 ]);