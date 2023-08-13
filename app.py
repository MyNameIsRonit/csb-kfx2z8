from flask import Flask,render_template ,redirect,request


app=Flask(__name__)
@app.route("/")
def main():
    return render_template("index.html")

@app.route("/error")
def index_with_error():
    error_message = request.args.get("message")
    return render_template("index.html", error=error_message)

@app.route("/get_details",methods=["GET","POST"])
def details():
    global first_player_name
    global second_player_name
    first_player_name = request.form.get("frst_plyer")
    second_player_name = request.form.get("secnd_plyer")

    if not first_player_name.strip():
        error = "Please provide the first player's name!"
        return redirect(f"/error?message={error}")
    elif not second_player_name.strip():
        error = "Please provide the second player's name!"
        return redirect(f"/error?message={error}")
    elif first_player_name == second_player_name:
        error = "Same name not allowed"
        return redirect(f"/error?message={error}")
    else:
        return redirect("/game")
        
    




@app.route("/game")
def game():
    return render_template("game.html",first_player_name=first_player_name,second_player_name=second_player_name)

@app.route("/home")
def home():
    return redirect("/")



if __name__=="__main__":
    app.run(debug=True)