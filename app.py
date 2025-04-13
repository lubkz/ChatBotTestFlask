import os
from flask import Flask, render_template, request
import ferramentas.ChatBotFunc as ChatBot
app = Flask(__name__)

@app.route('/')

def home():
    return render_template("index.html")

@app.route("/chatbot", methods=["GET", "POST"])
def ChatBotResposta():
    resposta = None
    if request.method == "POST":
        pergunta = request.form['pergunta']
        resposta = ChatBot.encontrar_resposta(pergunta=pergunta)
    return render_template("chatbot.html", resposta=resposta)





if __name__ == '__main__':
    app.run(debug=True)