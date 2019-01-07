# Stock price prediction
### By Alex Nguyen | Gettysburg College Class of 2022

This is the website developed with Reactjs as front-end and python as back-end. This website predicts the number that user draw on the website's canvas. 

I refer to these AI model in development:
[Train Model](github.com/sorki/python-mnist).
[Train Model](github.com/dan59314/MNIST-Deep-Learning).
[Serve a model with TF](tensorflow.org/serving/serving_basic).
[Deploy model as API](towardsdatascience.com/how-to-deploy-machine-learning-models-with-tensorflow-part-1-make-your-model-ready-for-serving-776a14ec3198).

## How to test the website in localhost
#### Requirements:
* Python Environment
* Nodejs Environment
* Reactjs

1. Change directory to client folder
```
cd ./client
```
2. Install dependency
```
npm install
```
or
```
yarn -d
```
3. Build pack
```
npm run build
```
4. Change directory to server folder
```
cd ../server
```
5. Install python requirement packages
```
pip install -r requirements.txt
```
6. Run server on localhost (Default PORT: 8080)
```
python server.py
```

# Have a good one!