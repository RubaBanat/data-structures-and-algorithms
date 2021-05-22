"use strict";

class Vertex {
  constructor(value) {
    this.value = value;
  }
}

class Edge {
  constructor(vertex, weight) {
    this.vertex = vertex;
    this.weight = weight;
  }
}

class Graph {
  constructor() {
    this._adjacencyList = new Map();
  }

  AddNode(vertex) {
    this._adjacencyList.set(vertex, []);
  }

  AddEdge(startVertex, endVertex, weight) {
    if (
      !this._adjacencyList.has(startVertex) ||
      !this._adjacencyList.has(endVertex)
    ) {
      console.log("INVALID NODE");
      return;
    }
    const adjacencies = this._adjacencyList.get(startVertex);
    adjacencies.push(new Edge(endVertex, weight)); // this values will be stored inside the Edge array
  }

  GetNeighbors(vertex) {
    if (!this._adjacencyList.has(vertex)) {
      console.log("NOT FOUND!");
      throw new Error('__ERROR__ Invalid Vertex', vertex);
    }
    return this._adjacencyList.get(vertex);
  }
  GetNodes() {
      return this._adjacencyList.entries();
    }
    Size() {
        return this._adjacencyList.size;
    }
    printAll() {
      for (const [vertex, edge] of this._adjacencyList.entries()) {
        console.log('Node', vertex);
        console.log("Edge", edge);
      }
  }
}

const graph = new Graph();

const one = new Vertex(1);
const three = new Vertex(3);
const four = new Vertex(4);
const six = new Vertex(6);
const nine = new Vertex(9);

graph.AddNode(one);
graph.AddNode(three);
graph.AddNode(four);
graph.AddNode(six);
graph.AddNode(nine);

graph.AddNode(one, four);
graph.AddNode(one, three);
graph.AddNode(three, six);
graph.AddNode(nine, one);
graph.AddNode(three, four);

console.log(graph.GetNeighbors(one));

module.exports = Graph;