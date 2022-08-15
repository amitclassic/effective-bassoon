// Create login Function here.
function Login() {
    player_name = document.getElementById("playername").value;
    localStorage.setItem("player_name", player_name);
    console.log("playername");
    window.location = "gamepage.html"
}