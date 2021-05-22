"use strict";
let Graph = require('../graph');


  test("can be successfully added to the graph", () => {
    let graph = new Graph();
    graph.AddNode(5);
    expect(graph.Size()).toBe(1);
  });
  test("can successfully add an edge to the graph", () => {
    let graph = new Graph();
    graph.AddNode(7);
    graph.AddNode(8);
    graph.AddEdge(7, 8, 5);
    expect(graph.GetNeighbors(7)[0].weight).toBe(5);
  });
  test("can successfully retrieved A collection of all nodes from thr graph", () => {
    let graph = new Graph();
    graph.AddNode(3);
    graph.AddNode(5);
    expect(graph.GetNodes()).toBeDefined();
  });
test("can successfully retrieved All appropriate neighbors from thr graph", () => {
    let graph = new Graph();
    graph.AddNode(3);
    graph.AddNode(5);
    graph.AddEdge(3, 5, 1);
    expect(graph.GetNeighbors(3)[0].vertex).toBe(5);
  });
test("can successfully return weight between two neighbors nodes", () => {
    let graph = new Graph();
    graph.AddNode(3);
    graph.AddNode(5);
    graph.AddEdge(3, 5, 8);
    expect(graph.GetNeighbors(3)[0].weight).toBe(8);
  });
  test("can successfully return the proper size of the graph, representing the number of nodes in the graph", () => {
    let graph = new Graph();
    graph.AddNode(9);
    graph.AddNode(7);
    graph.AddEdge(9, 7);
    expect(graph.Size()).toEqual(2);
  });

test("can successfully return the graph with one node and one edge", () => {
    let graph = new Graph();
    graph.AddNode(9);
    graph.AddEdge(9,9,2);
    expect(graph.Size()).toEqual(1);
  });
 
  test("can successfully return null when the graph is empty graph", () => {
    let graph = new Graph();
    expect(graph.Size()).toBe(0);
  });
