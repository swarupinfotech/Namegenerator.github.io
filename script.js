// Created by Swarup Mahato

// I have changed some details in order to give the user the ability to customize the way their name will be designed

//If we change '#' to an emoji, then using '.' as separator will not actually results a nice design because the character '.' is actually not wide as emojis in size, for that we give the user also to choose the separator from emojies, in this way we can preserve the nice design☺️

//Its preferred if you want to use normal character as design character, to use a normal character as separator,also if we want to use an emoji as design character is preferred to use an emoji as separator

//Now you can swap between design character and separator by one click

//Now you can copy to clipboard by one click

//A bug in G character has been resolved to make sense waymore as G

//Many ideas can be done to improve this code and provide letters other than latin ones 😃

//If you have any idea do not hesitate to share it within comments 

//Hope you like this ! Enjoy 😁

function copyText() {

    let board = document.getElementById('board').value;
    
    if(board.trim().length == 0){
        alert("Nothing to copy yet ☺️");
        return false;
    }
    
    if(!confirm('Just remember that everything already copied to the clipboard might be replaced by new content')){
        return false;
    }
    
    // Get the textarea element
    const textarea = document.getElementById('board');
    //Select the text inside the textarea
    textarea.select();
    // Copy the selected text to the clipboard
    document.execCommand('copy');
    
    alert("Designed name has been copied to clipboard , you can paste it now where you want 😃\n\nCoding is fun 😃Enjoy ☺️🥳");
    }
    
    function repeat(_char,times){
        let output="";
        
        for(let i = 0;i<times;i++){
            output+=_char;
        }
        
        return output;
    }
    
    function swap(){
    [document.getElementById("char").value,document.getElementById("separator").value]=[document.getElementById("separator").value,document.getElementById("char").value];
    
    generate();
    }
    
    function print(message){
        console.log(message);
    }
    
    function generate(random = false){
    
    // First part is the name
    let ime = document.getElementById('name').value;
    
    if(ime.trim().length == 0){
        alert("Please enter name");
        return false;
    }
    // Default character to use in order to design the name
    
    // Default separator that forms the design
    
    let output = "";
    
    // Change the character to design the name
    let char = '#';
    if(document.getElementById("char").value){
        char = document.getElementById("char").value;
    }
    
    // Change the separator
    let separator = '.';
    if(document.getElementById("separator").value){
        separator = document.getElementById("separator").value;
    }
    // correction made by Swarup
    
    
    for(let c of ime){
        c = c.toUpperCase();
        
        if (c == "A")
            output += "..######..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n"
        else if (c == "B")
            output += "..######..\n..#....#..\n..#####...\n..#....#..\n..######..\n\n"
        else if (c == "C")
            output += "..######..\n..#.......\n..#.......\n..#.......\n..######..\n\n"
        else if (c == "D")
            output += "..#####...\n..#....#..\n..#....#..\n..#....#..\n..#####...\n\n"
        else if (c == "E")
            output += "..######..\n..#.......\n..#####...\n..#.......\n..######..\n\n"
        else if (c == "F")
            output += "..######..\n..#.......\n..#####...\n..#.......\n..#.......\n\n"
        else if (c == "G")
            output += "...####...\n..#.......\n..#.###...\n..#....#..\n...####...\n\n"
        else if (c == "H")
            output += "..#....#..\n..#....#..\n..######..\n..#....#..\n..#....#..\n\n"
        else if (c == "I")
            output += "..######..\n....##....\n....##....\n....##....\n..######..\n\n"
        else if (c == "J")
            output += "..######..\n....##....\n....##....\n..#.##....\n..####....\n\n"
        else if (c == "K")
            output += "..#...#...\n..#..#....\n..##......\n..#..#....\n..#...#...\n\n"
        else if (c == "L")
            output += "..#.......\n..#.......\n..#.......\n..#.......\n..######..\n\n"
        else if (c == "M")
            output += "..#....#..\n..##..##..\n..#.##.#..\n..#....#..\n..#....#..\n\n"
        else if (c == "N")
            output += "..#....#..\n..##...#..\n..#.#..#..\n..#..#.#..\n..#...##..\n\n"
        else if (c == "O")
            output += "..######..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n"
        else if (c == "P")
            output += "..######..\n..#....#..\n..######..\n..#.......\n..#.......\n\n"
        else if (c == "Q")
            output += "..######..\n..#....#..\n..#.#..#..\n..#..#.#..\n..######..\n\n"
        else if (c == "R")
            output += "..######..\n..#....#..\n..#.##...\n..#...#...\n..#....#..\n\n"
        else if (c == "S")
            output += "..######..\n..#.......\n..######..\n.......#..\n..######..\n\n"
        else if (c == "T")
            output += "..######..\n....##....\n....##....\n....##....\n....##....\n\n"
        else if (c == "U")
            output += "..#....#..\n..#....#..\n..#....#..\n..#....#..\n..######..\n\n"
        else if (c == "V")
            output += "..#....#..\n..#....#..\n..#....#..\n...#..#...\n....##....\n\n"
        else if (c == "W")
            output += "..#....#..\n..#....#..\n..#.##.#..\n..##..##..\n..#....#..\n\n"
        else if (c == "X")
            output += "..#....#..\n...#..#...\n....##....\n...#..#...\n..#....#..\n\n"
        else if (c == "Y")
            output += "..#....#..\n...#..#...\n....##....\n....##....\n....##....\n\n"
        else if (c == "Z")
            output += "..######..\n......#...\n.....#....\n....#.....\n..######..\n\n"
        else if (c == " ")
            output += "..........\n..........\n..........\n..........\n\n"
        else if (c == ".")
            output += "----..----\n\n"
        else
            output += `${repeat(repeat(c,10) +"\n",4)}\n`
            
        if(random){
            let emojies = ['😄','😃','🔥','🙋','🌺','👍🏻','🥳','💥','👍','☺️','🙏','🎉','🌲','🌼','🎈','💚','💙','❤️','😁','😅','🌝','😌','😍','🤩','🥰','😚','😘','😎','🥸','🌝','🌜','🌛','💥','⭐','🌟','🧡','💛','💜','🤎','🖤','🤍','💘','💝','💖','💗','💓','💞','💕','💌','💟','♥️','❣️','🙏','🌹','🌷','🌸','💮','🏵️','🌻','💐'];
            
            let random_char_index = Math.floor(Math.random() * emojies.length);
            
            let random_char = emojies[random_char_index];
            
            emojies.splice(random_char_index,1);
            
            let random_separator_index = Math.floor(Math.random() * emojies.length);
            
            let random_separator = emojies[random_separator_index];
            
            output = output.replace(/\#/g,random_char);
            output = output.replace(/\./g,random_separator);
        }
    }
    
    //const rx = new RegExp(char, "g");
    
    output = output.replace(/\#/g,char)
    output = output.replace(/\./g,separator)
    
    output += `Made by 'Make a special gift'🥳
    
    Check it from here 😃
    https://code.sololearn.com/WW19FbM6l25/?ref=app`;  
    
    document.getElementById("board").value = output;
    
    }
    
    print("______________________________________")
    print("If you like it!!! Please hit one like.")
    print("______________________________________")
    print("Thanks for all the likes people!")
    
    print("There is a repo for the original code that i have altered (not this one) in Bitbucket, so if you want you can compile it yourself")
    print("Or you can download exe just for fun :)")
    print("REPO: https://swarup@infotech.org/swarup/solo_magic.git")
    
    alert(`With this script, you can design your name or the name of your lovely one with custom emojies and send it as a special gift ☺️`);
    
    alert(`just choose the character emoji you want to design the name with, and choose the  right separator who make your lovely name look fancy 🥳\n`);
    
    alert(`If you find any idea that can improve this code, do not hesitate to share it within comments😄`);
    
    alert(`Coding is fun 😃\n\nEnjoy🥳🎈🥳`);
    