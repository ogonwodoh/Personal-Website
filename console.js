				var str="import java.util.Ogochukwu_Nwodoh;";
				var str2="public static void main(String[] args){";
				var str3="Ogochukwu_Nwodoh Ogo = new Ogochukwu_Nwodoh(\'A black girl who codes\',\'a Collaborator\',\'a Content Creator\', \'Someone you should know\');"
				var super_str=str + str2+ str3;
				var m=1000;
				
				var great= super_str.length;
				

				function display_all(x){
					if (x==great){
						document.getElementById("import").innerHTML+="<br />"
						document.getElementById("import").innerHTML+="}"
						return;
					}
					if(x==33){
						document.getElementById("import").innerHTML+="<br />";						
						document.getElementById("import").innerHTML+="<br />";
						document.getElementById("import").innerHTML+= super_str.charAt(x+1);
						setTimeout(display_all, 100, x+1);
					}
					else if(x==72){
						document.getElementById("import").innerHTML+="<br />";
						document.getElementById("import").innerHTML+="&nbsp;&nbsp;&nbsp;&nbsp;" ;
						document.getElementById("import").innerHTML+= super_str.charAt(x+1);
						setTimeout(display_all, 100, x+1);
					}
					else{
						document.getElementById("import").innerHTML+= super_str.charAt(x+1);
						setTimeout(display_all, 100, x+1);
					}
					
				}
				var back=document.getElementById("courses").style.backgroundColor;

				
				function embolden(x){
					x.style.fontWeight="bolder";
					x.style.backgroundColor= "#78215e";
				}
				function goBack(x){
					x.style.fontWeight="normal";
					x.style.backgroundColor= back;

				}			
