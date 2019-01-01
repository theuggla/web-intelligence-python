# Imports
from sklearn import neural_network
from scikit_classifier import SciKitClassifier

class SciKitNN(SciKitClassifier):

  # Builds the model with defaults parameters max_iterations=1000
  def build(self):
    self.model = neural_network.MLPClassifier(hidden_layer_sizes=(72, ), learning_rate_init=0.7, solver='adam')

  # Evaluates the model
  def evaluate(self):
    accuracy = SciKitClassifier.evaluate(self)
    loss = self.model.loss_
    return loss, accuracy