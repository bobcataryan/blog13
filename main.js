
var names = [];
set_to_0="yes"
function submit(){
        name_to_add= document.getElementById("name_input").value;
    names.push(name_to_add);
    console.log(name_to_add);
    console.log(names);
    current= names
    document.getElementById("normal_list").innerHTML = current
    }
    function shownames(){
        list= names.join("  ")
        document.getElementById("unsorted_names").innerHTML = list;
        console.log("list-success")
    }
    function sorting(){
         sorted_list =names.sort();
        console.log(sorted_list)
        document.getElementById("sorted_names").innerHTML = sorted_list.join("  ");
    }
    function search(){
    c=names
    length_of_names= c.length;
    names_found="0"
    for (var i=0; i<length_of_names; i++){
        name_to_check=document.getElementById("search_input").value;
        if (c[i]=name_to_check){
            names_found= names_found + 1
        }
        if (names_found=1){
            result_part= " name out of ";
        }
        else{
            result_part= " names out of";
        }
        document.getElementById("result").innerHTML= names_found +  result_part + length_of_names + " found.";}
    }
