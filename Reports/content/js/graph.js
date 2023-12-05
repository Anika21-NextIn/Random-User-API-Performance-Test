/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 892.0, "minX": 0.0, "maxY": 18314.0, "series": [{"data": [[0.0, 892.0], [0.1, 902.0], [0.2, 906.0], [0.3, 909.0], [0.4, 910.0], [0.5, 912.0], [0.6, 912.0], [0.7, 913.0], [0.8, 914.0], [0.9, 914.0], [1.0, 915.0], [1.1, 916.0], [1.2, 916.0], [1.3, 918.0], [1.4, 918.0], [1.5, 918.0], [1.6, 919.0], [1.7, 920.0], [1.8, 920.0], [1.9, 921.0], [2.0, 921.0], [2.1, 921.0], [2.2, 922.0], [2.3, 922.0], [2.4, 922.0], [2.5, 922.0], [2.6, 922.0], [2.7, 923.0], [2.8, 923.0], [2.9, 923.0], [3.0, 924.0], [3.1, 924.0], [3.2, 924.0], [3.3, 924.0], [3.4, 924.0], [3.5, 924.0], [3.6, 925.0], [3.7, 925.0], [3.8, 925.0], [3.9, 926.0], [4.0, 926.0], [4.1, 926.0], [4.2, 926.0], [4.3, 927.0], [4.4, 927.0], [4.5, 927.0], [4.6, 927.0], [4.7, 927.0], [4.8, 928.0], [4.9, 928.0], [5.0, 928.0], [5.1, 928.0], [5.2, 928.0], [5.3, 928.0], [5.4, 928.0], [5.5, 929.0], [5.6, 929.0], [5.7, 929.0], [5.8, 929.0], [5.9, 929.0], [6.0, 929.0], [6.1, 929.0], [6.2, 930.0], [6.3, 930.0], [6.4, 930.0], [6.5, 930.0], [6.6, 930.0], [6.7, 930.0], [6.8, 931.0], [6.9, 931.0], [7.0, 931.0], [7.1, 931.0], [7.2, 931.0], [7.3, 931.0], [7.4, 931.0], [7.5, 932.0], [7.6, 932.0], [7.7, 932.0], [7.8, 932.0], [7.9, 932.0], [8.0, 932.0], [8.1, 932.0], [8.2, 933.0], [8.3, 933.0], [8.4, 933.0], [8.5, 933.0], [8.6, 933.0], [8.7, 933.0], [8.8, 933.0], [8.9, 933.0], [9.0, 934.0], [9.1, 934.0], [9.2, 934.0], [9.3, 934.0], [9.4, 934.0], [9.5, 934.0], [9.6, 934.0], [9.7, 934.0], [9.8, 934.0], [9.9, 934.0], [10.0, 934.0], [10.1, 935.0], [10.2, 935.0], [10.3, 935.0], [10.4, 935.0], [10.5, 935.0], [10.6, 935.0], [10.7, 935.0], [10.8, 935.0], [10.9, 936.0], [11.0, 936.0], [11.1, 936.0], [11.2, 936.0], [11.3, 936.0], [11.4, 936.0], [11.5, 937.0], [11.6, 937.0], [11.7, 937.0], [11.8, 937.0], [11.9, 937.0], [12.0, 937.0], [12.1, 937.0], [12.2, 937.0], [12.3, 938.0], [12.4, 938.0], [12.5, 938.0], [12.6, 938.0], [12.7, 938.0], [12.8, 938.0], [12.9, 938.0], [13.0, 938.0], [13.1, 938.0], [13.2, 939.0], [13.3, 939.0], [13.4, 939.0], [13.5, 939.0], [13.6, 939.0], [13.7, 939.0], [13.8, 939.0], [13.9, 939.0], [14.0, 939.0], [14.1, 939.0], [14.2, 940.0], [14.3, 940.0], [14.4, 940.0], [14.5, 940.0], [14.6, 940.0], [14.7, 940.0], [14.8, 940.0], [14.9, 940.0], [15.0, 940.0], [15.1, 940.0], [15.2, 941.0], [15.3, 941.0], [15.4, 941.0], [15.5, 941.0], [15.6, 941.0], [15.7, 941.0], [15.8, 941.0], [15.9, 941.0], [16.0, 942.0], [16.1, 942.0], [16.2, 942.0], [16.3, 942.0], [16.4, 942.0], [16.5, 942.0], [16.6, 942.0], [16.7, 942.0], [16.8, 942.0], [16.9, 942.0], [17.0, 942.0], [17.1, 942.0], [17.2, 943.0], [17.3, 943.0], [17.4, 943.0], [17.5, 943.0], [17.6, 943.0], [17.7, 943.0], [17.8, 943.0], [17.9, 943.0], [18.0, 943.0], [18.1, 943.0], [18.2, 944.0], [18.3, 944.0], [18.4, 944.0], [18.5, 944.0], [18.6, 944.0], [18.7, 944.0], [18.8, 944.0], [18.9, 944.0], [19.0, 944.0], [19.1, 944.0], [19.2, 944.0], [19.3, 944.0], [19.4, 945.0], [19.5, 945.0], [19.6, 945.0], [19.7, 945.0], [19.8, 945.0], [19.9, 945.0], [20.0, 945.0], [20.1, 945.0], [20.2, 945.0], [20.3, 945.0], [20.4, 945.0], [20.5, 945.0], [20.6, 945.0], [20.7, 946.0], [20.8, 946.0], [20.9, 946.0], [21.0, 946.0], [21.1, 946.0], [21.2, 946.0], [21.3, 946.0], [21.4, 946.0], [21.5, 946.0], [21.6, 946.0], [21.7, 946.0], [21.8, 946.0], [21.9, 946.0], [22.0, 947.0], [22.1, 947.0], [22.2, 947.0], [22.3, 947.0], [22.4, 947.0], [22.5, 947.0], [22.6, 947.0], [22.7, 947.0], [22.8, 947.0], [22.9, 947.0], [23.0, 947.0], [23.1, 948.0], [23.2, 948.0], [23.3, 948.0], [23.4, 948.0], [23.5, 948.0], [23.6, 948.0], [23.7, 948.0], [23.8, 948.0], [23.9, 948.0], [24.0, 948.0], [24.1, 948.0], [24.2, 948.0], [24.3, 949.0], [24.4, 949.0], [24.5, 949.0], [24.6, 949.0], [24.7, 949.0], [24.8, 949.0], [24.9, 949.0], [25.0, 949.0], [25.1, 949.0], [25.2, 949.0], [25.3, 949.0], [25.4, 949.0], [25.5, 949.0], [25.6, 949.0], [25.7, 949.0], [25.8, 950.0], [25.9, 950.0], [26.0, 950.0], [26.1, 950.0], [26.2, 950.0], [26.3, 950.0], [26.4, 950.0], [26.5, 950.0], [26.6, 950.0], [26.7, 950.0], [26.8, 951.0], [26.9, 951.0], [27.0, 951.0], [27.1, 951.0], [27.2, 951.0], [27.3, 951.0], [27.4, 951.0], [27.5, 951.0], [27.6, 951.0], [27.7, 952.0], [27.8, 952.0], [27.9, 952.0], [28.0, 952.0], [28.1, 952.0], [28.2, 952.0], [28.3, 952.0], [28.4, 952.0], [28.5, 952.0], [28.6, 952.0], [28.7, 952.0], [28.8, 953.0], [28.9, 953.0], [29.0, 953.0], [29.1, 953.0], [29.2, 953.0], [29.3, 953.0], [29.4, 953.0], [29.5, 953.0], [29.6, 953.0], [29.7, 953.0], [29.8, 953.0], [29.9, 954.0], [30.0, 954.0], [30.1, 954.0], [30.2, 954.0], [30.3, 954.0], [30.4, 954.0], [30.5, 954.0], [30.6, 954.0], [30.7, 954.0], [30.8, 954.0], [30.9, 954.0], [31.0, 954.0], [31.1, 955.0], [31.2, 955.0], [31.3, 955.0], [31.4, 955.0], [31.5, 955.0], [31.6, 955.0], [31.7, 955.0], [31.8, 955.0], [31.9, 955.0], [32.0, 955.0], [32.1, 955.0], [32.2, 955.0], [32.3, 956.0], [32.4, 956.0], [32.5, 956.0], [32.6, 956.0], [32.7, 956.0], [32.8, 956.0], [32.9, 956.0], [33.0, 956.0], [33.1, 956.0], [33.2, 956.0], [33.3, 957.0], [33.4, 957.0], [33.5, 957.0], [33.6, 957.0], [33.7, 957.0], [33.8, 957.0], [33.9, 957.0], [34.0, 957.0], [34.1, 957.0], [34.2, 957.0], [34.3, 957.0], [34.4, 957.0], [34.5, 957.0], [34.6, 957.0], [34.7, 958.0], [34.8, 958.0], [34.9, 958.0], [35.0, 958.0], [35.1, 958.0], [35.2, 958.0], [35.3, 958.0], [35.4, 959.0], [35.5, 959.0], [35.6, 959.0], [35.7, 959.0], [35.8, 959.0], [35.9, 959.0], [36.0, 959.0], [36.1, 959.0], [36.2, 959.0], [36.3, 959.0], [36.4, 959.0], [36.5, 959.0], [36.6, 960.0], [36.7, 960.0], [36.8, 960.0], [36.9, 960.0], [37.0, 960.0], [37.1, 960.0], [37.2, 960.0], [37.3, 960.0], [37.4, 960.0], [37.5, 960.0], [37.6, 960.0], [37.7, 961.0], [37.8, 961.0], [37.9, 961.0], [38.0, 961.0], [38.1, 961.0], [38.2, 961.0], [38.3, 961.0], [38.4, 961.0], [38.5, 961.0], [38.6, 962.0], [38.7, 962.0], [38.8, 962.0], [38.9, 962.0], [39.0, 962.0], [39.1, 962.0], [39.2, 962.0], [39.3, 962.0], [39.4, 962.0], [39.5, 963.0], [39.6, 963.0], [39.7, 963.0], [39.8, 963.0], [39.9, 963.0], [40.0, 963.0], [40.1, 963.0], [40.2, 964.0], [40.3, 964.0], [40.4, 964.0], [40.5, 964.0], [40.6, 964.0], [40.7, 964.0], [40.8, 964.0], [40.9, 964.0], [41.0, 964.0], [41.1, 965.0], [41.2, 965.0], [41.3, 965.0], [41.4, 965.0], [41.5, 965.0], [41.6, 965.0], [41.7, 965.0], [41.8, 965.0], [41.9, 966.0], [42.0, 966.0], [42.1, 966.0], [42.2, 966.0], [42.3, 966.0], [42.4, 966.0], [42.5, 966.0], [42.6, 966.0], [42.7, 966.0], [42.8, 966.0], [42.9, 966.0], [43.0, 967.0], [43.1, 967.0], [43.2, 967.0], [43.3, 967.0], [43.4, 967.0], [43.5, 967.0], [43.6, 968.0], [43.7, 968.0], [43.8, 968.0], [43.9, 968.0], [44.0, 968.0], [44.1, 968.0], [44.2, 968.0], [44.3, 969.0], [44.4, 969.0], [44.5, 969.0], [44.6, 969.0], [44.7, 969.0], [44.8, 969.0], [44.9, 969.0], [45.0, 970.0], [45.1, 970.0], [45.2, 970.0], [45.3, 970.0], [45.4, 970.0], [45.5, 970.0], [45.6, 971.0], [45.7, 971.0], [45.8, 971.0], [45.9, 971.0], [46.0, 971.0], [46.1, 971.0], [46.2, 971.0], [46.3, 972.0], [46.4, 972.0], [46.5, 972.0], [46.6, 972.0], [46.7, 972.0], [46.8, 972.0], [46.9, 972.0], [47.0, 972.0], [47.1, 972.0], [47.2, 973.0], [47.3, 973.0], [47.4, 973.0], [47.5, 973.0], [47.6, 973.0], [47.7, 974.0], [47.8, 974.0], [47.9, 974.0], [48.0, 974.0], [48.1, 974.0], [48.2, 974.0], [48.3, 974.0], [48.4, 975.0], [48.5, 975.0], [48.6, 975.0], [48.7, 975.0], [48.8, 975.0], [48.9, 975.0], [49.0, 976.0], [49.1, 976.0], [49.2, 976.0], [49.3, 976.0], [49.4, 976.0], [49.5, 976.0], [49.6, 977.0], [49.7, 977.0], [49.8, 977.0], [49.9, 977.0], [50.0, 977.0], [50.1, 978.0], [50.2, 978.0], [50.3, 978.0], [50.4, 978.0], [50.5, 978.0], [50.6, 978.0], [50.7, 979.0], [50.8, 979.0], [50.9, 979.0], [51.0, 979.0], [51.1, 979.0], [51.2, 979.0], [51.3, 980.0], [51.4, 980.0], [51.5, 980.0], [51.6, 980.0], [51.7, 980.0], [51.8, 980.0], [51.9, 981.0], [52.0, 981.0], [52.1, 981.0], [52.2, 981.0], [52.3, 981.0], [52.4, 981.0], [52.5, 982.0], [52.6, 982.0], [52.7, 982.0], [52.8, 982.0], [52.9, 982.0], [53.0, 983.0], [53.1, 983.0], [53.2, 983.0], [53.3, 983.0], [53.4, 983.0], [53.5, 984.0], [53.6, 984.0], [53.7, 984.0], [53.8, 984.0], [53.9, 984.0], [54.0, 984.0], [54.1, 985.0], [54.2, 985.0], [54.3, 985.0], [54.4, 985.0], [54.5, 986.0], [54.6, 986.0], [54.7, 986.0], [54.8, 986.0], [54.9, 987.0], [55.0, 987.0], [55.1, 987.0], [55.2, 987.0], [55.3, 988.0], [55.4, 988.0], [55.5, 988.0], [55.6, 988.0], [55.7, 988.0], [55.8, 988.0], [55.9, 989.0], [56.0, 989.0], [56.1, 989.0], [56.2, 990.0], [56.3, 990.0], [56.4, 990.0], [56.5, 990.0], [56.6, 991.0], [56.7, 991.0], [56.8, 992.0], [56.9, 992.0], [57.0, 992.0], [57.1, 992.0], [57.2, 992.0], [57.3, 993.0], [57.4, 993.0], [57.5, 994.0], [57.6, 994.0], [57.7, 994.0], [57.8, 994.0], [57.9, 995.0], [58.0, 995.0], [58.1, 995.0], [58.2, 995.0], [58.3, 996.0], [58.4, 996.0], [58.5, 996.0], [58.6, 997.0], [58.7, 997.0], [58.8, 997.0], [58.9, 997.0], [59.0, 998.0], [59.1, 998.0], [59.2, 999.0], [59.3, 999.0], [59.4, 999.0], [59.5, 999.0], [59.6, 1000.0], [59.7, 1000.0], [59.8, 1000.0], [59.9, 1001.0], [60.0, 1001.0], [60.1, 1001.0], [60.2, 1001.0], [60.3, 1002.0], [60.4, 1003.0], [60.5, 1003.0], [60.6, 1004.0], [60.7, 1004.0], [60.8, 1005.0], [60.9, 1005.0], [61.0, 1007.0], [61.1, 1007.0], [61.2, 1007.0], [61.3, 1008.0], [61.4, 1008.0], [61.5, 1008.0], [61.6, 1009.0], [61.7, 1009.0], [61.8, 1009.0], [61.9, 1009.0], [62.0, 1010.0], [62.1, 1010.0], [62.2, 1011.0], [62.3, 1011.0], [62.4, 1012.0], [62.5, 1012.0], [62.6, 1013.0], [62.7, 1014.0], [62.8, 1014.0], [62.9, 1015.0], [63.0, 1016.0], [63.1, 1016.0], [63.2, 1016.0], [63.3, 1017.0], [63.4, 1017.0], [63.5, 1018.0], [63.6, 1018.0], [63.7, 1018.0], [63.8, 1019.0], [63.9, 1020.0], [64.0, 1021.0], [64.1, 1021.0], [64.2, 1022.0], [64.3, 1023.0], [64.4, 1023.0], [64.5, 1024.0], [64.6, 1025.0], [64.7, 1025.0], [64.8, 1026.0], [64.9, 1026.0], [65.0, 1027.0], [65.1, 1028.0], [65.2, 1029.0], [65.3, 1030.0], [65.4, 1030.0], [65.5, 1031.0], [65.6, 1032.0], [65.7, 1033.0], [65.8, 1033.0], [65.9, 1034.0], [66.0, 1034.0], [66.1, 1035.0], [66.2, 1035.0], [66.3, 1036.0], [66.4, 1037.0], [66.5, 1038.0], [66.6, 1039.0], [66.7, 1039.0], [66.8, 1040.0], [66.9, 1041.0], [67.0, 1041.0], [67.1, 1043.0], [67.2, 1044.0], [67.3, 1045.0], [67.4, 1047.0], [67.5, 1048.0], [67.6, 1048.0], [67.7, 1048.0], [67.8, 1050.0], [67.9, 1050.0], [68.0, 1050.0], [68.1, 1052.0], [68.2, 1053.0], [68.3, 1055.0], [68.4, 1056.0], [68.5, 1057.0], [68.6, 1058.0], [68.7, 1059.0], [68.8, 1061.0], [68.9, 1063.0], [69.0, 1064.0], [69.1, 1064.0], [69.2, 1066.0], [69.3, 1067.0], [69.4, 1069.0], [69.5, 1070.0], [69.6, 1071.0], [69.7, 1071.0], [69.8, 1072.0], [69.9, 1073.0], [70.0, 1074.0], [70.1, 1077.0], [70.2, 1077.0], [70.3, 1080.0], [70.4, 1080.0], [70.5, 1081.0], [70.6, 1083.0], [70.7, 1084.0], [70.8, 1085.0], [70.9, 1086.0], [71.0, 1088.0], [71.1, 1088.0], [71.2, 1091.0], [71.3, 1092.0], [71.4, 1094.0], [71.5, 1097.0], [71.6, 1098.0], [71.7, 1100.0], [71.8, 1102.0], [71.9, 1104.0], [72.0, 1106.0], [72.1, 1107.0], [72.2, 1108.0], [72.3, 1110.0], [72.4, 1111.0], [72.5, 1111.0], [72.6, 1114.0], [72.7, 1115.0], [72.8, 1118.0], [72.9, 1122.0], [73.0, 1126.0], [73.1, 1128.0], [73.2, 1129.0], [73.3, 1130.0], [73.4, 1132.0], [73.5, 1136.0], [73.6, 1142.0], [73.7, 1146.0], [73.8, 1150.0], [73.9, 1153.0], [74.0, 1156.0], [74.1, 1157.0], [74.2, 1163.0], [74.3, 1168.0], [74.4, 1171.0], [74.5, 1178.0], [74.6, 1181.0], [74.7, 1184.0], [74.8, 1187.0], [74.9, 1190.0], [75.0, 1203.0], [75.1, 1206.0], [75.2, 1209.0], [75.3, 1213.0], [75.4, 1217.0], [75.5, 1219.0], [75.6, 1224.0], [75.7, 1227.0], [75.8, 1231.0], [75.9, 1235.0], [76.0, 1236.0], [76.1, 1237.0], [76.2, 1239.0], [76.3, 1243.0], [76.4, 1245.0], [76.5, 1247.0], [76.6, 1250.0], [76.7, 1253.0], [76.8, 1254.0], [76.9, 1255.0], [77.0, 1257.0], [77.1, 1260.0], [77.2, 1261.0], [77.3, 1262.0], [77.4, 1263.0], [77.5, 1264.0], [77.6, 1267.0], [77.7, 1268.0], [77.8, 1271.0], [77.9, 1272.0], [78.0, 1274.0], [78.1, 1275.0], [78.2, 1277.0], [78.3, 1278.0], [78.4, 1281.0], [78.5, 1283.0], [78.6, 1285.0], [78.7, 1287.0], [78.8, 1291.0], [78.9, 1294.0], [79.0, 1297.0], [79.1, 1300.0], [79.2, 1301.0], [79.3, 1303.0], [79.4, 1304.0], [79.5, 1306.0], [79.6, 1309.0], [79.7, 1310.0], [79.8, 1311.0], [79.9, 1312.0], [80.0, 1314.0], [80.1, 1316.0], [80.2, 1317.0], [80.3, 1320.0], [80.4, 1322.0], [80.5, 1323.0], [80.6, 1325.0], [80.7, 1327.0], [80.8, 1329.0], [80.9, 1331.0], [81.0, 1334.0], [81.1, 1335.0], [81.2, 1336.0], [81.3, 1338.0], [81.4, 1339.0], [81.5, 1341.0], [81.6, 1342.0], [81.7, 1343.0], [81.8, 1344.0], [81.9, 1346.0], [82.0, 1347.0], [82.1, 1348.0], [82.2, 1349.0], [82.3, 1351.0], [82.4, 1353.0], [82.5, 1356.0], [82.6, 1357.0], [82.7, 1359.0], [82.8, 1362.0], [82.9, 1365.0], [83.0, 1365.0], [83.1, 1368.0], [83.2, 1370.0], [83.3, 1372.0], [83.4, 1375.0], [83.5, 1377.0], [83.6, 1379.0], [83.7, 1380.0], [83.8, 1383.0], [83.9, 1388.0], [84.0, 1394.0], [84.1, 1400.0], [84.2, 1403.0], [84.3, 1411.0], [84.4, 1420.0], [84.5, 1425.0], [84.6, 1434.0], [84.7, 1437.0], [84.8, 1445.0], [84.9, 1450.0], [85.0, 1458.0], [85.1, 1485.0], [85.2, 1501.0], [85.3, 1506.0], [85.4, 1517.0], [85.5, 1523.0], [85.6, 1528.0], [85.7, 1537.0], [85.8, 1543.0], [85.9, 1545.0], [86.0, 1551.0], [86.1, 1561.0], [86.2, 1571.0], [86.3, 1590.0], [86.4, 1600.0], [86.5, 1607.0], [86.6, 1611.0], [86.7, 1616.0], [86.8, 1619.0], [86.9, 1628.0], [87.0, 1631.0], [87.1, 1637.0], [87.2, 1644.0], [87.3, 1655.0], [87.4, 1659.0], [87.5, 1664.0], [87.6, 1670.0], [87.7, 1676.0], [87.8, 1685.0], [87.9, 1693.0], [88.0, 1698.0], [88.1, 1711.0], [88.2, 1723.0], [88.3, 1736.0], [88.4, 1754.0], [88.5, 1759.0], [88.6, 1798.0], [88.7, 1831.0], [88.8, 1842.0], [88.9, 1868.0], [89.0, 1901.0], [89.1, 1916.0], [89.2, 1928.0], [89.3, 1936.0], [89.4, 1939.0], [89.5, 1946.0], [89.6, 1948.0], [89.7, 1951.0], [89.8, 1953.0], [89.9, 1955.0], [90.0, 1958.0], [90.1, 1961.0], [90.2, 1962.0], [90.3, 1967.0], [90.4, 1972.0], [90.5, 1975.0], [90.6, 1980.0], [90.7, 1989.0], [90.8, 2000.0], [90.9, 2001.0], [91.0, 2012.0], [91.1, 2016.0], [91.2, 2037.0], [91.3, 2050.0], [91.4, 2052.0], [91.5, 2061.0], [91.6, 2065.0], [91.7, 2069.0], [91.8, 2071.0], [91.9, 2076.0], [92.0, 2078.0], [92.1, 2084.0], [92.2, 2087.0], [92.3, 2096.0], [92.4, 2098.0], [92.5, 2102.0], [92.6, 2108.0], [92.7, 2116.0], [92.8, 2124.0], [92.9, 2129.0], [93.0, 2136.0], [93.1, 2140.0], [93.2, 2143.0], [93.3, 2149.0], [93.4, 2152.0], [93.5, 2157.0], [93.6, 2163.0], [93.7, 2169.0], [93.8, 2172.0], [93.9, 2175.0], [94.0, 2181.0], [94.1, 2186.0], [94.2, 2191.0], [94.3, 2195.0], [94.4, 2200.0], [94.5, 2208.0], [94.6, 2215.0], [94.7, 2222.0], [94.8, 2225.0], [94.9, 2240.0], [95.0, 2244.0], [95.1, 2249.0], [95.2, 2255.0], [95.3, 2262.0], [95.4, 2278.0], [95.5, 2286.0], [95.6, 2296.0], [95.7, 2308.0], [95.8, 2338.0], [95.9, 2357.0], [96.0, 2403.0], [96.1, 2424.0], [96.2, 2433.0], [96.3, 2463.0], [96.4, 2491.0], [96.5, 2520.0], [96.6, 2537.0], [96.7, 2552.0], [96.8, 2581.0], [96.9, 2587.0], [97.0, 2606.0], [97.1, 2620.0], [97.2, 2675.0], [97.3, 2725.0], [97.4, 2753.0], [97.5, 2781.0], [97.6, 2822.0], [97.7, 2842.0], [97.8, 2881.0], [97.9, 2920.0], [98.0, 2989.0], [98.1, 3026.0], [98.2, 3077.0], [98.3, 3112.0], [98.4, 3143.0], [98.5, 3169.0], [98.6, 3206.0], [98.7, 3235.0], [98.8, 3278.0], [98.9, 3317.0], [99.0, 3364.0], [99.1, 3396.0], [99.2, 3446.0], [99.3, 3581.0], [99.4, 3781.0], [99.5, 4096.0], [99.6, 4234.0], [99.7, 4668.0], [99.8, 5012.0], [99.9, 6474.0], [100.0, 18314.0]], "isOverall": false, "label": "Random_User_Test", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 800.0, "maxY": 2380.0, "series": [{"data": [[8600.0, 1.0], [9400.0, 1.0], [800.0, 1.0], [900.0, 2380.0], [1000.0, 486.0], [1100.0, 131.0], [18300.0, 1.0], [1200.0, 163.0], [1300.0, 202.0], [1400.0, 42.0], [1500.0, 50.0], [1600.0, 65.0], [1700.0, 24.0], [1800.0, 15.0], [1900.0, 72.0], [2000.0, 66.0], [2100.0, 78.0], [2200.0, 50.0], [2300.0, 14.0], [2400.0, 18.0], [2500.0, 22.0], [2600.0, 11.0], [2800.0, 12.0], [2700.0, 11.0], [2900.0, 7.0], [3000.0, 11.0], [3100.0, 10.0], [3200.0, 12.0], [3300.0, 11.0], [3400.0, 5.0], [3500.0, 4.0], [3600.0, 1.0], [3700.0, 2.0], [3800.0, 2.0], [3900.0, 1.0], [4000.0, 1.0], [4100.0, 3.0], [4300.0, 1.0], [4200.0, 1.0], [4600.0, 1.0], [4500.0, 2.0], [4700.0, 3.0], [5000.0, 1.0], [5300.0, 2.0], [5500.0, 1.0], [6400.0, 1.0], [7800.0, 1.0]], "isOverall": false, "label": "Random_User_Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 18300.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 595.0, "minX": 1.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 3405.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 3405.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 595.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 4.460000000000003, "minX": 1.70177484E12, "maxY": 5.179104477611942, "series": [{"data": [[1.70177604E12, 4.468750000000001], [1.70177538E12, 5.179104477611942], [1.70177568E12, 4.73134328358209], [1.70177574E12, 4.753768844221106], [1.70177508E12, 4.567164179104478], [1.70177514E12, 4.519999999999997], [1.70177544E12, 4.949748743718593], [1.7017755E12, 5.040201005025127], [1.70177484E12, 4.490566037735849], [1.7017758E12, 4.681592039800996], [1.7017749E12, 4.489898989898989], [1.70177586E12, 4.460000000000003], [1.7017752E12, 4.527638190954774], [1.70177526E12, 4.62], [1.70177556E12, 5.085], [1.70177562E12, 4.7164179104477615], [1.70177598E12, 4.7878787878787845], [1.70177496E12, 4.816831683168316], [1.70177592E12, 4.899999999999998], [1.70177502E12, 4.69346733668342], [1.70177532E12, 4.775]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70177604E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 931.3333333333334, "minX": 1.0, "maxY": 3061.0, "series": [{"data": [[8.0, 1913.8095238095239], [4.0, 1121.5026427061275], [2.0, 969.0], [1.0, 1023.0], [9.0, 2251.8125000000005], [5.0, 1238.6123287671223], [10.0, 2248.5], [11.0, 3061.0], [6.0, 1357.9979296066265], [3.0, 931.3333333333334], [7.0, 1368.1217391304344]], "isOverall": false, "label": "Random_User_Test", "isController": false}, {"data": [[4.7387500000000005, 1209.8394999999982]], "isOverall": false, "label": "Random_User_Test-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 11.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 217.6, "minX": 1.70177484E12, "maxY": 5251.466666666666, "series": [{"data": [[1.70177604E12, 2496.516666666667], [1.70177538E12, 5238.466666666666], [1.70177568E12, 5219.883333333333], [1.70177574E12, 5175.033333333334], [1.70177508E12, 5226.483333333334], [1.70177514E12, 5196.733333333334], [1.70177544E12, 5175.716666666666], [1.7017755E12, 5176.083333333333], [1.70177484E12, 2753.9333333333334], [1.7017758E12, 5227.916666666667], [1.7017749E12, 5151.316666666667], [1.70177586E12, 5203.583333333333], [1.7017752E12, 5175.583333333333], [1.70177526E12, 5205.2], [1.70177556E12, 5203.416666666667], [1.70177562E12, 5231.2], [1.70177598E12, 5146.25], [1.70177496E12, 5251.466666666666], [1.70177592E12, 5201.866666666667], [1.70177502E12, 5175.433333333333], [1.70177532E12, 5195.516666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70177604E12, 217.6], [1.70177538E12, 455.6], [1.70177568E12, 455.6], [1.70177574E12, 451.06666666666666], [1.70177508E12, 455.6], [1.70177514E12, 453.3333333333333], [1.70177544E12, 451.06666666666666], [1.7017755E12, 451.06666666666666], [1.70177484E12, 240.26666666666668], [1.7017758E12, 455.6], [1.7017749E12, 448.8], [1.70177586E12, 453.3333333333333], [1.7017752E12, 451.06666666666666], [1.70177526E12, 453.3333333333333], [1.70177556E12, 453.3333333333333], [1.70177562E12, 455.6], [1.70177598E12, 448.8], [1.70177496E12, 457.8666666666667], [1.70177592E12, 453.3333333333333], [1.70177502E12, 451.06666666666666], [1.70177532E12, 453.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70177604E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 1118.5699999999997, "minX": 1.70177484E12, "maxY": 1360.2636815920396, "series": [{"data": [[1.70177604E12, 1134.5625], [1.70177538E12, 1360.2636815920396], [1.70177568E12, 1194.6069651741293], [1.70177574E12, 1204.195979899498], [1.70177508E12, 1163.2238805970146], [1.70177514E12, 1139.0650000000003], [1.70177544E12, 1279.9195979899491], [1.7017755E12, 1310.9547738693461], [1.70177484E12, 1128.5471698113204], [1.7017758E12, 1177.462686567164], [1.7017749E12, 1134.4242424242427], [1.70177586E12, 1118.5699999999997], [1.7017752E12, 1148.7587939698487], [1.70177526E12, 1145.4550000000002], [1.70177556E12, 1304.9649999999995], [1.70177562E12, 1211.7363184079607], [1.70177598E12, 1210.4343434343443], [1.70177496E12, 1239.0495049504948], [1.70177592E12, 1265.2400000000005], [1.70177502E12, 1185.8291457286437], [1.70177532E12, 1271.0850000000012]], "isOverall": false, "label": "Random_User_Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70177604E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 1118.5200000000007, "minX": 1.70177484E12, "maxY": 1360.2338308457695, "series": [{"data": [[1.70177604E12, 1134.53125], [1.70177538E12, 1360.2338308457695], [1.70177568E12, 1194.5820895522393], [1.70177574E12, 1204.1658291457286], [1.70177508E12, 1163.1840796019899], [1.70177514E12, 1139.0500000000002], [1.70177544E12, 1279.8944723618094], [1.7017755E12, 1310.919597989949], [1.70177484E12, 1128.254716981132], [1.7017758E12, 1177.4278606965177], [1.7017749E12, 1134.3333333333335], [1.70177586E12, 1118.5200000000007], [1.7017752E12, 1148.7035175879391], [1.70177526E12, 1145.4150000000009], [1.70177556E12, 1304.9399999999998], [1.70177562E12, 1211.6965174129357], [1.70177598E12, 1210.3939393939393], [1.70177496E12, 1238.9554455445545], [1.70177592E12, 1265.2099999999998], [1.70177502E12, 1185.753768844221], [1.70177532E12, 1271.055000000001]], "isOverall": false, "label": "Random_User_Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70177604E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 718.8600000000005, "minX": 1.70177484E12, "maxY": 877.6169154228859, "series": [{"data": [[1.70177604E12, 764.7499999999999], [1.70177538E12, 877.6169154228859], [1.70177568E12, 774.358208955224], [1.70177574E12, 801.0703517587937], [1.70177508E12, 754.2139303482587], [1.70177514E12, 750.3949999999994], [1.70177544E12, 848.2713567839198], [1.7017755E12, 854.4974874371859], [1.70177484E12, 751.8962264150944], [1.7017758E12, 759.7213930348261], [1.7017749E12, 739.146464646465], [1.70177586E12, 730.5649999999997], [1.7017752E12, 733.8291457286427], [1.70177526E12, 718.8600000000005], [1.70177556E12, 857.7500000000007], [1.70177562E12, 769.9253731343284], [1.70177598E12, 791.7222222222223], [1.70177496E12, 818.7920792079212], [1.70177592E12, 827.6000000000004], [1.70177502E12, 787.4271356783921], [1.70177532E12, 836.2149999999996]], "isOverall": false, "label": "Random_User_Test", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70177604E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 892.0, "minX": 1.70177484E12, "maxY": 18314.0, "series": [{"data": [[1.70177604E12, 4711.0], [1.70177538E12, 6474.0], [1.70177568E12, 4546.0], [1.70177574E12, 18314.0], [1.70177508E12, 3820.0], [1.70177514E12, 3171.0], [1.70177544E12, 5558.0], [1.7017755E12, 3396.0], [1.70177484E12, 2831.0], [1.7017758E12, 4096.0], [1.7017749E12, 4114.0], [1.70177586E12, 7811.0], [1.7017752E12, 4737.0], [1.70177526E12, 3064.0], [1.70177556E12, 3781.0], [1.70177562E12, 5012.0], [1.70177598E12, 5375.0], [1.70177496E12, 4357.0], [1.70177592E12, 5378.0], [1.70177502E12, 9499.0], [1.70177532E12, 8653.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70177604E12, 1562.6], [1.70177538E12, 2425.6], [1.70177568E12, 1970.8000000000002], [1.70177574E12, 1629.0], [1.70177508E12, 1694.400000000001], [1.70177514E12, 1636.4], [1.70177544E12, 2187.0], [1.7017755E12, 2084.0], [1.70177484E12, 1858.5], [1.7017758E12, 2073.0], [1.7017749E12, 1855.9999999999998], [1.70177586E12, 1319.8000000000002], [1.7017752E12, 1528.0], [1.70177526E12, 1507.3], [1.70177556E12, 2137.6000000000004], [1.70177562E12, 2004.0000000000005], [1.70177598E12, 1940.0], [1.70177496E12, 1968.1000000000001], [1.70177592E12, 2084.4], [1.70177502E12, 1698.0], [1.70177532E12, 2065.4]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70177604E12, 4711.0], [1.70177538E12, 4650.039999999991], [1.70177568E12, 4182.379999999994], [1.70177574E12, 3156.0], [1.70177508E12, 2903.3599999999983], [1.70177514E12, 3123.890000000004], [1.70177544E12, 3462.0], [1.7017755E12, 3367.0], [1.70177484E12, 2785.4999999999955], [1.7017758E12, 3323.199999999999], [1.7017749E12, 3452.679999999994], [1.70177586E12, 3135.79], [1.7017752E12, 3670.0], [1.70177526E12, 2918.3300000000017], [1.70177556E12, 3427.1900000000005], [1.70177562E12, 3306.6599999999985], [1.70177598E12, 4716.649999999994], [1.70177496E12, 4093.769999999999], [1.70177592E12, 4536.940000000002], [1.70177502E12, 3827.0], [1.70177532E12, 3589.91]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70177604E12, 2180.9999999999995], [1.70177538E12, 2754.7999999999984], [1.70177568E12, 2596.4999999999995], [1.70177574E12, 2185.0], [1.70177508E12, 2162.7], [1.70177514E12, 2184.7999999999993], [1.70177544E12, 2567.0], [1.7017755E12, 2528.0], [1.70177484E12, 2084.3], [1.7017758E12, 2296.4999999999986], [1.7017749E12, 2172.2], [1.70177586E12, 1925.4999999999977], [1.7017752E12, 2129.0], [1.70177526E12, 2238.9499999999994], [1.70177556E12, 2447.45], [1.70177562E12, 2250.7999999999997], [1.70177598E12, 2890.7999999999965], [1.70177496E12, 2198.2499999999995], [1.70177592E12, 2306.85], [1.70177502E12, 2149.0], [1.70177532E12, 2493.099999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70177604E12, 916.0], [1.70177538E12, 909.0], [1.70177568E12, 907.0], [1.70177574E12, 900.0], [1.70177508E12, 910.0], [1.70177514E12, 892.0], [1.70177544E12, 909.0], [1.7017755E12, 907.0], [1.70177484E12, 909.0], [1.7017758E12, 900.0], [1.7017749E12, 921.0], [1.70177586E12, 910.0], [1.7017752E12, 912.0], [1.70177526E12, 914.0], [1.70177556E12, 913.0], [1.70177562E12, 902.0], [1.70177598E12, 913.0], [1.70177496E12, 922.0], [1.70177592E12, 912.0], [1.70177502E12, 912.0], [1.70177532E12, 920.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70177604E12, 956.0], [1.70177538E12, 1033.0], [1.70177568E12, 963.0], [1.70177574E12, 962.0], [1.70177508E12, 978.0], [1.70177514E12, 966.0], [1.70177544E12, 983.0], [1.7017755E12, 1052.0], [1.70177484E12, 982.5], [1.7017758E12, 955.0], [1.7017749E12, 967.5], [1.70177586E12, 965.0], [1.7017752E12, 980.0], [1.70177526E12, 987.0], [1.70177556E12, 1013.0], [1.70177562E12, 977.0], [1.70177598E12, 958.5], [1.70177496E12, 994.5], [1.70177592E12, 984.5], [1.70177502E12, 971.0], [1.70177532E12, 997.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70177604E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 969.0, "minX": 1.0, "maxY": 1513.5, "series": [{"data": [[4.0, 978.0], [2.0, 971.0], [1.0, 971.5], [8.0, 1513.5], [5.0, 997.0], [3.0, 969.0], [6.0, 1268.5], [7.0, 1450.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 969.0, "minX": 1.0, "maxY": 1513.5, "series": [{"data": [[4.0, 978.0], [2.0, 971.0], [1.0, 971.5], [8.0, 1513.5], [5.0, 997.0], [3.0, 969.0], [6.0, 1268.5], [7.0, 1450.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.5166666666666666, "minX": 1.70177484E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.70177604E12, 1.5166666666666666], [1.70177538E12, 3.3333333333333335], [1.70177568E12, 3.3333333333333335], [1.70177574E12, 3.3333333333333335], [1.70177508E12, 3.3333333333333335], [1.70177514E12, 3.3333333333333335], [1.70177544E12, 3.3333333333333335], [1.7017755E12, 3.3333333333333335], [1.70177484E12, 1.8166666666666667], [1.7017758E12, 3.3333333333333335], [1.7017749E12, 3.3333333333333335], [1.70177586E12, 3.3333333333333335], [1.7017752E12, 3.3333333333333335], [1.70177526E12, 3.3333333333333335], [1.70177556E12, 3.3333333333333335], [1.70177562E12, 3.3333333333333335], [1.70177598E12, 3.3333333333333335], [1.70177496E12, 3.3333333333333335], [1.70177592E12, 3.3333333333333335], [1.70177502E12, 3.3333333333333335], [1.70177532E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70177604E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.6, "minX": 1.70177484E12, "maxY": 3.3666666666666667, "series": [{"data": [[1.70177604E12, 1.6], [1.70177538E12, 3.35], [1.70177568E12, 3.35], [1.70177574E12, 3.316666666666667], [1.70177508E12, 3.35], [1.70177514E12, 3.3333333333333335], [1.70177544E12, 3.316666666666667], [1.7017755E12, 3.316666666666667], [1.70177484E12, 1.7666666666666666], [1.7017758E12, 3.35], [1.7017749E12, 3.3], [1.70177586E12, 3.3333333333333335], [1.7017752E12, 3.316666666666667], [1.70177526E12, 3.3333333333333335], [1.70177556E12, 3.3333333333333335], [1.70177562E12, 3.35], [1.70177598E12, 3.3], [1.70177496E12, 3.3666666666666667], [1.70177592E12, 3.3333333333333335], [1.70177502E12, 3.316666666666667], [1.70177532E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.70177604E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.6, "minX": 1.70177484E12, "maxY": 3.3666666666666667, "series": [{"data": [[1.70177604E12, 1.6], [1.70177538E12, 3.35], [1.70177568E12, 3.35], [1.70177574E12, 3.316666666666667], [1.70177508E12, 3.35], [1.70177514E12, 3.3333333333333335], [1.70177544E12, 3.316666666666667], [1.7017755E12, 3.316666666666667], [1.70177484E12, 1.7666666666666666], [1.7017758E12, 3.35], [1.7017749E12, 3.3], [1.70177586E12, 3.3333333333333335], [1.7017752E12, 3.316666666666667], [1.70177526E12, 3.3333333333333335], [1.70177556E12, 3.3333333333333335], [1.70177562E12, 3.35], [1.70177598E12, 3.3], [1.70177496E12, 3.3666666666666667], [1.70177592E12, 3.3333333333333335], [1.70177502E12, 3.316666666666667], [1.70177532E12, 3.3333333333333335]], "isOverall": false, "label": "Random_User_Test-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70177604E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.6, "minX": 1.70177484E12, "maxY": 3.3666666666666667, "series": [{"data": [[1.70177604E12, 1.6], [1.70177538E12, 3.35], [1.70177568E12, 3.35], [1.70177574E12, 3.316666666666667], [1.70177508E12, 3.35], [1.70177514E12, 3.3333333333333335], [1.70177544E12, 3.316666666666667], [1.7017755E12, 3.316666666666667], [1.70177484E12, 1.7666666666666666], [1.7017758E12, 3.35], [1.7017749E12, 3.3], [1.70177586E12, 3.3333333333333335], [1.7017752E12, 3.316666666666667], [1.70177526E12, 3.3333333333333335], [1.70177556E12, 3.3333333333333335], [1.70177562E12, 3.35], [1.70177598E12, 3.3], [1.70177496E12, 3.3666666666666667], [1.70177592E12, 3.3333333333333335], [1.70177502E12, 3.316666666666667], [1.70177532E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.70177604E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

