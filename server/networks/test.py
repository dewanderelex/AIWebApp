#Copyright (c) 2016-2017 Shafeen Tejani. Released under GPLv3.
from tensorflow.examples.tutorials.mnist import input_data

mnist = input_data.read_data_sets("MNIST_data/", one_hot=True)

print(len(mnist.test.images.tolist()[0]))
print(mnist.test.labels[0])
