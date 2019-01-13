import numpy as np
import matplotlib.pylab as plt
from matplotlib.axes import Axes

def plot():
    file = open('coordinates.txt', 'r')
    states = []
    latitude = []
    longitude = []
    for line in file:
        l = line.split('\t')
        states.append(l[0])
        latitude.append(float(l[1]))
        longitude.append(float(l[2]))
    file.close()

    x = np.array(longitude)
    y = np.array(latitude)

    fig = plt.figure(facecolor='black')
    ax = plt.gca()
    ax.axis('off')
    
    plt.axis([-130,-65,22,52])
    plt.scatter(x, y, 7, 'tab:cyan', alpha=0.8)
    plt.show()

plot()
