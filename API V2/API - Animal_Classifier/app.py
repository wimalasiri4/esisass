import tensorflow as tf
import os
import numpy as np

from keras.models import load_model
from flask import Flask, request, jsonify
from werkzeug.utils import secure_filename
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

IMAGE_SIZE = (128, 128)
MODEL_PATH = 'D:/Freelancing/SLIIT FYP/API V2/API - Animal_Classifier/Animal_Classifier.h5'

class_labels = ['Frog', 'Lizard', 'Moths']

model = load_model(MODEL_PATH)


@app.route('/predict', methods=['POST'])
def upload():
    f = request.files['image']
    basepath = os.path.dirname(__file__)
    file_path = os.path.join(basepath, 'uploads', secure_filename(f.filename))
    f.save(file_path)
    img = tf.keras.utils.load_img(file_path, target_size=IMAGE_SIZE)
    img = tf.keras.utils.img_to_array(img)
    img = np.expand_dims(img, axis=0)
    preds = model.predict(img)

    if np.amax(preds) > 0.7:
        result = class_labels[int(np.argmax(preds,axis=1))]
    else:
        result = "Invalid image"

    print(np.argmax(preds,axis=1))
    print(jsonify({'prediction' : result}))
    return jsonify({'class' : result})


if __name__ == '__main__':
    app.run(debug=True, port=4000)
