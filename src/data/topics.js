/* eslint-disable no-template-curly-in-string */
const DS_STRUCTURE_DIAGRAM = `# COMPLETE STRUCTURED HIERARCHY OF DATA STRUCTURES

## (Including Specialized, Implementation, Application & Research-Based Extensions)

# DATA STRUCTURES

│
├── 1. PRIMITIVE DATA STRUCTURES
│ │
│ ├── Integer (int)
│ ├── Character (char)
│ ├── Float
│ ├── Double
│ ├── Boolean (bool)
│ └── Pointer
│
└── 2. NON-PRIMITIVE DATA STRUCTURES
│
├── A. LINEAR DATA STRUCTURES
│ │
│ ├── 1. STATIC LINEAR DS
│ │ │
│ │ ├── Array
│ │ │ ├── 1D Array
│ │ │ ├── 2D Array
│ │ │ ├── Multidimensional Array
│ │ │ ├── Character Array
│ │ │ └── Static Matrix
│ │ │
│ │ └── String
│ │ ├── Immutable String
│ │ ├── Mutable String
│ │ └── Character Sequence
│ │
│ └── 2. DYNAMIC LINEAR DS
│ │
│ ├── Linked List
│ │ ├── Singly Linked List
│ │ ├── Doubly Linked List
│ │ ├── Circular Linked List
│ │ └── Circular Doubly Linked List
│ │
│ ├── Stack
│ │ ├── Static Stack
│ │ ├── Dynamic Stack
│ │ ├── Monotonic Stack
│ │ └── Multiple Stack
│ │
│ ├── Queue
│ │ ├── Simple Queue
│ │ ├── Circular Queue
│ │ ├── Priority Queue
│ │ ├── Double Ended Queue (Deque)
│ │ ├── Monotonic Queue
│ │ └── Blocking Queue
│ │
│ ├── Deque
│ │ ├── Input Restricted Deque
│ │ └── Output Restricted Deque
│ │
│ └── Skip List
│
└── B. NON-LINEAR DATA STRUCTURES
│
├── 1. HIERARCHICAL DATA STRUCTURES
│ │
│ └── Trees
│ │
│ ├── A. BASIC TREES
│ │ │
│ │ ├── General Tree
│ │ ├── Binary Tree
│ │ ├── Threaded Binary Tree
│ │ ├── Expression Tree
│ │ └── Tournament Tree
│ │
│ ├── B. SEARCH TREES
│ │ │
│ │ ├── Binary Search Tree (BST)
│ │ ├── AVL Tree
│ │ ├── Red Black Tree
│ │ ├── Splay Tree
│ │ ├── Treap
│ │ ├── AA Tree
│ │ └── Cartesian Tree
│ │
│ ├── C. HEAP STRUCTURES
│ │ │
│ │ ├── Min Heap
│ │ ├── Max Heap
│ │ ├── Binomial Heap
│ │ ├── Fibonacci Heap
│ │ ├── Pairing Heap
│ │ └── Leftist Heap
│ │
│ ├── D. PREFIX / STRING TREES
│ │ │
│ │ ├── Trie
│ │ ├── Radix Trie
│ │ ├── Patricia Trie
│ │ ├── Suffix Tree
│ │ ├── Suffix Automaton
│ │ └── Ternary Search Tree
│ │
│ ├── E. RANGE QUERY TREES
│ │ │
│ │ ├── Segment Tree
│ │ │ ├── Lazy Segment Tree
│ │ │ ├── Persistent Segment Tree
│ │ │ └── Merge Sort Tree
│ │ │
│ │ ├── Fenwick Tree (BIT)
│ │ ├── Interval Tree
│ │ ├── Sparse Table
│ │ └── Wavelet Tree
│ │
│ ├── F. DATABASE / STORAGE TREES
│ │ │
│ │ ├── B Tree
│ │ ├── B+ Tree
│ │ ├── B* Tree
│ │ ├── LSM Tree
│ │ ├── Fractal Tree
│ │ └── SSTable Structures
│ │
│ ├── G. SPATIAL / GEOMETRIC TREES
│ │ │
│ │ ├── KD Tree
│ │ ├── Quad Tree
│ │ ├── Octree
│ │ ├── R Tree
│ │ ├── BSP Tree
│ │ └── Ball Tree
│ │
│ ├── H. BLOCKCHAIN / VERIFICATION TREES
│ │ │
│ │ ├── Merkle Tree
│ │ └── Patricia Merkle Trie
│ │
│ └── I. PERSISTENT / FUNCTIONAL TREES
│ ├── Persistent BST
│ ├── Persistent Segment Tree
│ ├── Finger Tree
│ └── Rope
│
├── 2. NETWORK DATA STRUCTURES
│ │
│ └── Graphs
│ │
│ ├── A. BASED ON DIRECTION
│ │ │
│ │ ├── Directed Graph
│ │ └── Undirected Graph
│ │
│ ├── B. BASED ON WEIGHT
│ │ │
│ │ ├── Weighted Graph
│ │ └── Unweighted Graph
│ │
│ ├── C. BASED ON CYCLES
│ │ │
│ │ ├── Cyclic Graph
│ │ └── Acyclic Graph
│ │
│ ├── D. SPECIALIZED GRAPHS
│ │ │
│ │ ├── DAG
│ │ ├── Bipartite Graph
│ │ ├── Complete Graph
│ │ ├── Multigraph
│ │ ├── Hypergraph
│ │ ├── Flow Network
│ │ └── Knowledge Graph
│ │
│ ├── E. GRAPH REPRESENTATIONS
│ │ │
│ │ ├── Adjacency Matrix
│ │ ├── Adjacency List
│ │ └── Edge List
│ │
│ └── F. DISTRIBUTED / MODERN GRAPHS
│ ├── Semantic Graph
│ ├── Social Graph
│ ├── Dependency Graph
│ └── Neural Graph Structures
│
├── 3. HASH-BASED DATA STRUCTURES
│ │
│ ├── Hash Table
│ ├── HashMap
│ ├── HashSet
│ ├── Ordered HashMap
│ ├── Concurrent HashMap
│ ├── Distributed Hash Table (DHT)
│ ├── Cuckoo Hashing
│ ├── Robin Hood Hashing
│ └── Hopscotch Hashing
│
├── 4. DISJOINT SET STRUCTURES
│ │
│ ├── DSU (Union Find)
│ ├── Persistent DSU
│ └── Dynamic Connectivity Structures
│
├── 5. PROBABILISTIC DATA STRUCTURES
│ │
│ ├── Bloom Filter
│ ├── Counting Bloom Filter
│ ├── Cuckoo Filter
│ ├── Count-Min Sketch
│ ├── HyperLogLog
│ ├── Quotient Filter
│ └── MinHash Structures
│
├── 6. CONCURRENT DATA STRUCTURES
│ │
│ ├── Lock-Free Queue
│ ├── Wait-Free Structures
│ ├── Concurrent Linked List
│ ├── Concurrent HashMap
│ └── Concurrent Skip List
│
├── 7. DISTRIBUTED SYSTEM DATA STRUCTURES
│ │
│ ├── Consistent Hash Ring
│ ├── Distributed Hash Table
│ ├── Vector Clock Structures
│ ├── Gossip Structures
│ ├── CRDT Structures
│ └── Distributed Cache Structures
│
├── 8. CACHE-OPTIMIZED DATA STRUCTURES
│ │
│ ├── LRU Cache
│ ├── LFU Cache
│ ├── ARC Cache
│ ├── CLOCK Cache
│ └── Adaptive Cache Structures
│
├── 9. AI / VECTOR DATA STRUCTURES
│ │
│ ├── Vector Index Structures
│ ├── HNSW Graph
│ ├── ANN Structures
│ ├── Embedding Indexes
│ ├── FAISS-like Structures
│ └── Semantic Retrieval Structures
│
└── 10. RESEARCH / SPECIALIZED STRUCTURES
│
├── Rope
├── Finger Tree
├── Succinct Data Structures
├── Compressed Data Structures
├── Persistent Arrays
├── Wavelet Matrix
├── Dynamic Trees
├── Euler Tour Trees
├── Link-Cut Trees
└── Advanced Functional Structures

---

# FINAL UNDERSTANDING

# ROOT LEVEL

Primitive DS
↓
Non-Primitive DS
↓
Linear / Non-Linear

---

# CORE FOUNDATIONAL IDEAS

Almost every modern Data Structure ultimately evolves from:

* Sequential Storage → Arrays
* Linked Storage → Linked Lists
* Hierarchical Storage → Trees
* Relational Storage → Graphs
* Key-Value Storage → Hash Structures

---

# AFTER CORE DS

Everything else becomes:

* specialization-specific
* implementation-specific
* optimization-specific
* application-specific
* distributed-system-specific
* database-specific
* AI-specific
* research-specific

---

# MODERN EVOLUTION

EARLY COMPUTING
↓
Arrays
↓
Linked Memory
↓
Linked Lists
↓
Execution Management
↓
Stacks & Queues
↓
Hierarchical Search
↓
Trees
↓
Fast Retrieval
↓
Hashing
↓
Relationship Modeling
↓
Graphs
↓
Database Optimization
↓
B Trees / LSM Trees
↓
Distributed Systems
↓
Distributed Hash Structures
↓
AI Retrieval Systems
↓
Vector & Semantic Structures`;

const ALGORITHM_STRUCTURE_DIAGRAM = `# COMPLETE STRUCTURED HIERARCHY OF ALGORITHMS

## (From Fundamental → Advanced → Modern AI/Distributed/Research Systems)

# ALGORITHMS

│
├── 1. FOUNDATIONAL / BASIC ALGORITHMS
│ │
│ ├── Arithmetic Algorithms
│ │ ├── Addition
│ │ ├── Multiplication
│ │ ├── Division
│ │ ├── Euclidean Algorithm
│ │ └── Modular Arithmetic
│ │
│ ├── Logical Algorithms
│ │ ├── Comparison
│ │ ├── Decision Making
│ │ ├── Boolean Logic
│ │ └── Conditional Evaluation
│ │
│ └── Brute Force Algorithms
│ ├── Exhaustive Search
│ ├── Trial & Error
│ ├── Naive Enumeration
│ └── Full Search
│
├── 2. SEARCHING ALGORITHMS
│ │
│ ├── Linear Search
│ ├── Binary Search
│ ├── Ternary Search
│ ├── Jump Search
│ ├── Interpolation Search
│ ├── Fibonacci Search
│ ├── Exponential Search
│ └── Binary Search on Answer
│
├── 3. SORTING ALGORITHMS
│ │
│ ├── Comparison Based Sorting
│ │ ├── Bubble Sort
│ │ ├── Selection Sort
│ │ ├── Insertion Sort
│ │ ├── Merge Sort
│ │ ├── Quick Sort
│ │ ├── Heap Sort
│ │ ├── Shell Sort
│ │ └── Tim Sort
│ │
│ ├── Non Comparison Sorting
│ │ ├── Counting Sort
│ │ ├── Radix Sort
│ │ ├── Bucket Sort
│ │ └── Pigeonhole Sort
│ │
│ └── Specialized Sorting
│ ├── External Sorting
│ ├── Parallel Sorting
│ ├── Distributed Sorting
│ └── Cache Optimized Sorting
│
├── 4. RECURSIVE & DIVIDE-CONQUER ALGORITHMS
│ │
│ ├── Recursion
│ ├── Tail Recursion
│ ├── Divide & Conquer
│ ├── Merge Sort
│ ├── Quick Sort
│ ├── Binary Search
│ ├── Closest Pair Problems
│ └── Fast Exponentiation
│
├── 5. BACKTRACKING ALGORITHMS
│ │
│ ├── N Queens
│ ├── Sudoku Solver
│ ├── Maze Solving
│ ├── Permutations
│ ├── Combination Sum
│ ├── Subset Generation
│ └── Constraint Solving
│
├── 6. GREEDY ALGORITHMS
│ │
│ ├── Activity Selection
│ ├── Huffman Coding
│ ├── Fractional Knapsack
│ ├── Job Sequencing
│ ├── Optimal Merge Pattern
│ ├── Minimum Platforms
│ └── Interval Scheduling
│
├── 7. DYNAMIC PROGRAMMING
│ │
│ ├── Memoization
│ ├── Tabulation
│ ├── 0/1 Knapsack
│ ├── LIS
│ ├── LCS
│ ├── Matrix Chain Multiplication
│ ├── Partition DP
│ ├── Digit DP
│ ├── Tree DP
│ ├── Interval DP
│ ├── Bitmask DP
│ └── State Machine DP
│
├── 8. STRING ALGORITHMS
│ │
│ ├── Pattern Matching
│ │ ├── KMP
│ │ ├── Rabin Karp
│ │ ├── Z Algorithm
│ │ └── Boyer Moore
│ │
│ ├── Hashing Based
│ │ ├── Rolling Hash
│ │ └── Polynomial Hashing
│ │
│ ├── Suffix Based
│ │ ├── Suffix Array
│ │ ├── Suffix Tree
│ │ └── LCP Array
│ │
│ └── Compression/String Processing
│ ├── Run Length Encoding
│ ├── Huffman Compression
│ └── Text Compression
│
├── 9. GRAPH ALGORITHMS
│ │
│ ├── Traversal Algorithms
│ │ ├── BFS
│ │ └── DFS
│ │
│ ├── Shortest Path Algorithms
│ │ ├── Dijkstra
│ │ ├── Bellman Ford
│ │ ├── Floyd Warshall
│ │ └── A* Search
│ │
│ ├── Minimum Spanning Tree
│ │ ├── Prim’s Algorithm
│ │ └── Kruskal Algorithm
│ │
│ ├── Connectivity Algorithms
│ │ ├── DSU
│ │ ├── SCC
│ │ ├── Bridges
│ │ └── Articulation Points
│ │
│ ├── Flow Algorithms
│ │ ├── Ford Fulkerson
│ │ ├── Edmonds Karp
│ │ └── Dinic Algorithm
│ │
│ └── Specialized Graph Algorithms
│ ├── Topological Sort
│ ├── Bipartite Matching
│ ├── Network Flow
│ └── PageRank
│
├── 10. COMPUTATIONAL GEOMETRY ALGORITHMS
│ │
│ ├── Convex Hull
│ ├── Line Intersection
│ ├── Closest Pair
│ ├── Sweep Line
│ ├── Voronoi Diagram
│ └── Delaunay Triangulation
│
├── 11. MATHEMATICAL ALGORITHMS
│ │
│ ├── Number Theory
│ │ ├── Prime Testing
│ │ ├── Sieve of Eratosthenes
│ │ ├── GCD/LCM
│ │ └── Euler Totient
│ │
│ ├── Combinatorics
│ │ ├── Permutations
│ │ ├── Combinations
│ │ └── Pascal Triangle
│ │
│ └── Numerical Algorithms
│ ├── Newton Raphson
│ ├── Matrix Operations
│ └── Numerical Approximation
│
├── 12. RANDOMIZED & PROBABILISTIC ALGORITHMS
│ │
│ ├── Monte Carlo Algorithms
│ ├── Las Vegas Algorithms
│ ├── Randomized Quick Sort
│ ├── Reservoir Sampling
│ └── Approximation Algorithms
│
├── 13. OPTIMIZATION ALGORITHMS
│ │
│ ├── Linear Programming
│ ├── Convex Optimization
│ ├── Simulated Annealing
│ ├── Genetic Algorithms
│ ├── Ant Colony Optimization
│ └── Particle Swarm Optimization
│
├── 14. PARALLEL & CONCURRENT ALGORITHMS
│ │
│ ├── Parallel Sorting
│ ├── Parallel Matrix Multiplication
│ ├── Concurrent Scheduling
│ ├── Synchronization Algorithms
│ └── GPU Parallel Algorithms
│
├── 15. DISTRIBUTED ALGORITHMS
│ │
│ ├── Consensus Algorithms
│ │ ├── Paxos
│ │ ├── Raft
│ │ └── Byzantine Consensus
│ │
│ ├── Distributed Coordination
│ │ ├── Gossip Protocol
│ │ ├── Leader Election
│ │ └── Clock Synchronization
│ │
│ └── Distributed Scheduling
│
├── 16. CRYPTOGRAPHIC ALGORITHMS
│ │
│ ├── Encryption
│ │ ├── RSA
│ │ ├── AES
│ │ └── ECC
│ │
│ ├── Hashing Algorithms
│ │ ├── SHA
│ │ ├── MD5
│ │ └── Blake3
│ │
│ └── Digital Signatures
│
├── 17. MACHINE LEARNING & AI ALGORITHMS
│ │
│ ├── Supervised Learning
│ │ ├── Linear Regression
│ │ ├── Logistic Regression
│ │ ├── Decision Trees
│ │ └── Random Forest
│ │
│ ├── Deep Learning
│ │ ├── Neural Networks
│ │ ├── CNN
│ │ ├── RNN
│ │ ├── Transformers
│ │ └── Attention Mechanisms
│ │
│ ├── Reinforcement Learning
│ │ ├── Q Learning
│ │ ├── Policy Gradient
│ │ └── Actor Critic
│ │
│ └── AI Optimization
│ ├── Gradient Descent
│ ├── Adam Optimizer
│ └── Backpropagation
│
├── 18. QUANTUM ALGORITHMS
│ │
│ ├── Grover Search
│ ├── Shor Algorithm
│ ├── Quantum Simulation
│ ├── Quantum Optimization
│ └── Quantum Cryptography
│
├── 19. BIOLOGICAL / EVOLUTIONARY ALGORITHMS
│ │
│ ├── Genetic Algorithms
│ ├── Evolutionary Computation
│ ├── Swarm Intelligence
│ ├── Artificial Life Algorithms
│ └── Bio Inspired Optimization
│
└── 20. FUTURE / RESEARCH ALGORITHMS
│
├── Autonomous Reasoning Algorithms
├── Self-Improving Algorithms
├── Neuromorphic Algorithms
├── AGI Planning Systems
├── Semantic Reasoning Systems
├── Cognitive Architectures
├── Quantum AI Algorithms
└── Adaptive Computational Systems

---

# ROOT EVOLUTION OF ALGORITHMS

Human Logical Thinking
↓
Mathematical Procedures
↓
Brute Force Computation
↓
Searching & Sorting
↓
Recursive Decomposition
↓
Optimization Algorithms
↓
Graph & Network Algorithms
↓
Distributed Algorithms
↓
AI & Learning Algorithms
↓
Quantum & Autonomous Systems

---

# CORE FOUNDATIONAL IDEAS

Almost every algorithm ultimately evolves from:

* Sequential Processing
* Recursive Decomposition
* Optimization
* Search
* Decision Making
* Relationship Traversal
* Probability
* Learning
* Parallelism

---

# AFTER CORE ALGORITHMS

Everything else becomes:

* optimization-specific
* AI-specific
* distributed-system-specific
* cryptographic-specific
* database-specific
* hardware-specific
* research-specific
* quantum-specific`;

const DAA_STRUCTURE_DIAGRAM = `DESIGN AND ANALYSIS OF ALGORITHMS
│
├── 1. ALGORITHM FOUNDATIONS
│   │
│   ├── What is an Algorithm
│   ├── Characteristics of Algorithms
│   ├── Correctness of Algorithms
│   ├── Pseudocode
│   ├── Flowcharts
│   ├── Computational Models
│   └── Performance Measurement
│
├── 2. ALGORITHM ANALYSIS
│   │
│   ├── Time Complexity
│   │   ├── Best Case
│   │   ├── Average Case
│   │   └── Worst Case
│   │
│   ├── Space Complexity
│   │
│   ├── Asymptotic Analysis
│   │   ├── Big-O Notation
│   │   ├── Big Omega
│   │   ├── Big Theta
│   │   ├── Little o
│   │   └── Little omega
│   │
│   ├── Recurrence Relations
│   │   ├── Substitution Method
│   │   ├── Recursion Tree Method
│   │   ├── Master Theorem
│   │   └── Iterative Method
│   │
│   ├── Trade-off Analysis
│   │   ├── Time vs Space
│   │   ├── Memory vs Speed
│   │   └── Optimization Tradeoffs
│   │
│   └── Amortized Analysis
│       ├── Aggregate Method
│       ├── Accounting Method
│       └── Potential Method
│
├── 3. ALGORITHM DESIGN PARADIGMS
│   │
│   ├── Brute Force
│   │   ├── Exhaustive Search
│   │   ├── Naive Enumeration
│   │   └── Trial and Error
│   │
│   ├── Divide and Conquer
│   │   ├── Merge Sort
│   │   ├── Quick Sort
│   │   ├── Binary Search
│   │   ├── Closest Pair Problem
│   │   └── Fast Exponentiation
│   │
│   ├── Greedy Algorithms
│   │   ├── Activity Selection
│   │   ├── Huffman Coding
│   │   ├── Fractional Knapsack
│   │   ├── Job Sequencing
│   │   ├── Optimal Merge Pattern
│   │   └── Interval Scheduling
│   │
│   ├── Dynamic Programming
│   │   ├── Memoization
│   │   ├── Tabulation
│   │   ├── Knapsack
│   │   ├── LIS
│   │   ├── LCS
│   │   ├── Matrix Chain Multiplication
│   │   ├── Tree DP
│   │   ├── Digit DP
│   │   ├── Bitmask DP
│   │   └── State Machine DP
│   │
│   ├── Backtracking
│   │   ├── N Queens
│   │   ├── Sudoku Solver
│   │   ├── Maze Solving
│   │   ├── Permutations
│   │   ├── Combinations
│   │   └── Constraint Satisfaction
│   │
│   ├── Branch and Bound
│   │   ├── Travelling Salesman Problem
│   │   ├── Knapsack Optimization
│   │   ├── State Space Search
│   │   └── Integer Programming
│   │
│   ├── Heuristic Algorithms
│   │   ├── Approximate Solving
│   │   ├── Intelligent Search
│   │   └── Near Optimal Solutions
│   │
│   └── Randomized Algorithms
│       ├── Monte Carlo
│       ├── Las Vegas
│       ├── Randomized Quick Sort
│       └── Reservoir Sampling
│
├── 4. SEARCHING ALGORITHMS
│   │
│   ├── Linear Search
│   ├── Binary Search
│   ├── Ternary Search
│   ├── Jump Search
│   ├── Interpolation Search
│   ├── Fibonacci Search
│   └── Exponential Search
│
├── 5. SORTING ALGORITHMS
│   │
│   ├── Bubble Sort
│   ├── Selection Sort
│   ├── Insertion Sort
│   ├── Merge Sort
│   ├── Quick Sort
│   ├── Heap Sort
│   ├── Shell Sort
│   ├── Tim Sort
│   ├── Counting Sort
│   ├── Radix Sort
│   ├── Bucket Sort
│   └── External Sorting
│
├── 6. STRING ALGORITHMS
│   │
│   ├── Pattern Matching
│   │   ├── KMP
│   │   ├── Rabin Karp
│   │   ├── Z Algorithm
│   │   └── Boyer Moore
│   │
│   ├── Hashing Based
│   │   ├── Rolling Hash
│   │   └── Polynomial Hashing
│   │
│   ├── Suffix Structures
│   │   ├── Suffix Array
│   │   ├── Suffix Tree
│   │   └── LCP Array
│   │
│   └── Compression Algorithms
│       ├── Run Length Encoding
│       ├── Huffman Compression
│       └── Text Compression
│
├── 7. GRAPH ALGORITHMS
│   │
│   ├── Traversal Algorithms
│   │   ├── BFS
│   │   └── DFS
│   │
│   ├── Shortest Path Algorithms
│   │   ├── Dijkstra
│   │   ├── Bellman Ford
│   │   ├── Floyd Warshall
│   │   └── A* Search
│   │
│   ├── Minimum Spanning Tree
│   │   ├── Prim Algorithm
│   │   └── Kruskal Algorithm
│   │
│   ├── Connectivity Algorithms
│   │   ├── SCC
│   │   ├── Bridges
│   │   ├── Articulation Points
│   │   └── DSU
│   │
│   ├── Flow Algorithms
│   │   ├── Ford Fulkerson
│   │   ├── Edmonds Karp
│   │   ├── Dinic Algorithm
│   │   └── Network Flow
│   │
│   └── Specialized Graph Algorithms
│       ├── Topological Sort
│       ├── Bipartite Matching
│       ├── PageRank
│       └── Network Optimization
│
├── 8. MATHEMATICAL ALGORITHMS
│   │
│   ├── Euclidean Algorithm
│   ├── Prime Testing
│   ├── Sieve of Eratosthenes
│   ├── Fast Exponentiation
│   ├── Modular Arithmetic
│   ├── Euler Totient
│   ├── Number Theory
│   ├── Combinatorics
│   └── Numerical Algorithms
│
├── 9. COMPUTATIONAL GEOMETRY
│   │
│   ├── Convex Hull
│   ├── Closest Pair
│   ├── Sweep Line
│   ├── Voronoi Diagram
│   ├── Delaunay Triangulation
│   └── Line Intersection
│
├── 10. COMPUTABILITY & COMPLEXITY THEORY
│   │
│   ├── Computability
│   ├── Complexity Classes
│   │   ├── P
│   │   ├── NP
│   │   ├── NP Complete
│   │   ├── NP Hard
│   │   ├── PSPACE
│   │   └── EXPTIME
│   │
│   ├── Cook’s Theorem
│   ├── Reduction Techniques
│   ├── Tractable Problems
│   └── Intractable Problems
│
├── 11. PARALLEL & DISTRIBUTED ALGORITHMS
│   │
│   ├── Parallel Algorithms
│   ├── GPU Algorithms
│   ├── Synchronization Algorithms
│   ├── Consensus Algorithms
│   │   ├── Paxos
│   │   ├── Raft
│   │   └── Byzantine Consensus
│   │
│   ├── Gossip Protocols
│   ├── Leader Election
│   └── Distributed Scheduling
│
├── 12. CRYPTOGRAPHIC ALGORITHMS
│   │
│   ├── RSA
│   ├── AES
│   ├── ECC
│   ├── SHA
│   ├── Digital Signatures
│   └── Blockchain Consensus
│
├── 13. OPTIMIZATION & AI ALGORITHMS
│   │
│   ├── Linear Programming
│   ├── Convex Optimization
│   ├── Simulated Annealing
│   ├── Genetic Algorithms
│   ├── Swarm Intelligence
│   ├── Machine Learning Algorithms
│   ├── Neural Networks
│   ├── Reinforcement Learning
│   └── Transformer Architectures
│
├── 14. QUANTUM & FUTURE ALGORITHMS
│   │
│   ├── Grover Search
│   ├── Shor Algorithm
│   ├── Quantum Optimization
│   ├── Quantum Cryptography
│   ├── Neuromorphic Algorithms
│   ├── Autonomous Reasoning
│   ├── AGI Planning Systems
│   └── Adaptive Intelligence Systems
│
└── 15. IMPLEMENTATION LAYER
    │
    ├── C Algorithms
    ├── C++ Algorithms
    ├── Python Algorithms
    ├── Memory Optimization
    ├── Cache Optimization
    ├── Performance Engineering
    └── Real World System Design`;

const DSA_LEARNING_FLOW_DIAGRAM = `DSA LEARNING FLOW
│
├── 1. COMPUTATIONAL FOUNDATIONS
│   │
│   ├── Problem Solving
│   ├── Logical Thinking
│   ├── Flowcharts
│   ├── Pseudocode
│   ├── Input / Output
│   ├── Variables
│   ├── Conditions
│   ├── Loops
│   └── Functions
│
├── 2. COMPLEXITY ANALYSIS
│   │
│   ├── Time Complexity
│   ├── Space Complexity
│   ├── Big-O
│   ├── Big-Omega
│   ├── Big-Theta
│   ├── Recurrence Relations
│   └── Tradeoffs
│
├── 3. BASIC DATA STRUCTURES
│   │
│   ├── Arrays
│   ├── Strings
│   ├── Matrices
│   ├── Linked Lists
│   ├── Stack
│   ├── Queue
│   └── Deque
│
├── 4. BASIC ALGORITHMS
│   │
│   ├── Searching
│   │   ├── Linear Search
│   │   └── Binary Search
│   │
│   ├── Sorting
│   │   ├── Bubble Sort
│   │   ├── Selection Sort
│   │   ├── Insertion Sort
│   │   ├── Merge Sort
│   │   ├── Quick Sort
│   │   └── Heap Sort
│   │
│   └── Recursion
│
├── 5. PROBLEM SOLVING PATTERNS
│   │
│   ├── Two Pointers
│   ├── Sliding Window
│   ├── Prefix Sum
│   ├── Binary Search on Answer
│   ├── Greedy
│   ├── Backtracking
│   ├── Divide & Conquer
│   └── Dynamic Programming
│
├── 6. INTERMEDIATE DATA STRUCTURES
│   │
│   ├── HashMap
│   ├── HashSet
│   ├── Heap
│   ├── Priority Queue
│   ├── Trie
│   ├── BST
│   ├── AVL Tree
│   ├── Red Black Tree
│   ├── Segment Tree
│   ├── Fenwick Tree
│   └── Disjoint Set Union
│
├── 7. GRAPH THEORY
│   │
│   ├── Graph Representation
│   ├── BFS
│   ├── DFS
│   ├── Shortest Path
│   ├── Minimum Spanning Tree
│   ├── Topological Sort
│   ├── SCC
│   ├── Bridges
│   ├── Articulation Points
│   ├── Network Flow
│   └── Bipartite Matching
│
├── 8. ADVANCED DYNAMIC PROGRAMMING
│   │
│   ├── Knapsack
│   ├── LIS
│   ├── LCS
│   ├── Matrix Chain Multiplication
│   ├── Tree DP
│   ├── Digit DP
│   ├── Interval DP
│   └── Bitmask DP
│
├── 9. ADVANCED STRING ALGORITHMS
│   │
│   ├── KMP
│   ├── Rabin Karp
│   ├── Z Algorithm
│   ├── Rolling Hash
│   ├── Suffix Array
│   ├── Suffix Tree
│   └── Pattern Matching
│
├── 10. MATHEMATICAL & NUMBER THEORY
│   │
│   ├── GCD / LCM
│   ├── Sieve
│   ├── Modular Arithmetic
│   ├── Fast Exponentiation
│   ├── Prime Factorization
│   ├── Euler Totient
│   └── Combinatorics
│
├── 11. ADVANCED ALGORITHMS
│   │
│   ├── Randomized Algorithms
│   ├── Approximation Algorithms
│   ├── Heuristic Algorithms
│   ├── Computational Geometry
│   ├── Parallel Algorithms
│   ├── Distributed Algorithms
│   ├── Cryptographic Algorithms
│   └── Optimization Algorithms
│
├── 12. SYSTEM DESIGN CONNECTIONS
│   │
│   ├── Caching Systems
│   ├── Database Indexing
│   ├── Search Engines
│   ├── Recommendation Systems
│   ├── Distributed Storage
│   ├── Scheduling Systems
│   ├── Network Routing
│   └── Memory Optimization
│
├── 13. AI & MODERN COMPUTING
│   │
│   ├── Vector Databases
│   ├── Embedding Search
│   ├── ANN Search
│   ├── Transformer Architectures
│   ├── Reinforcement Learning
│   ├── Neural Networks
│   ├── Semantic Retrieval
│   └── Autonomous Systems
│
└── 14. FUTURE / RESEARCH DOMAINS
    │
    ├── Quantum Algorithms
    ├── Neuromorphic Systems
    ├── AGI Architectures
    ├── Self-Improving Systems
    ├── Cognitive Computing
    ├── Autonomous Reasoning
    └── Adaptive Intelligence`;

export const topics = [
  {
    "id": "fullstack-workflow",
    "name": "Full Stack Workflow",
    "icon": "🧭",
    "category": "Workflow",
    "level": "beginner",
    "color": "#22c55e",
    "bgColor": "#0f2016",
    "desc": "Set up any machine, build React and Django, run locally, build for production, and deploy",
    "sections": [
      {
        "title": "Start Here: Machine to Production Roadmap",
        "sub": "Read this first · complete workflow",
        "phase": "Start",
        "content": "## Machine to Production Roadmap\n\nThis topic is the missing bridge between learning tools and building a real React + Django project.\n\nBy the end, a learner can use Windows, macOS, or Linux and know:\n- What to install\n- Which terminal to use\n- How to create React\n- How to create Django\n- How to run both together\n- How to connect React to Django\n- How to build for production\n- How to push to GitHub\n- How to deploy\n\n### Complete order\n\n1. Prepare your operating system\n2. Install required tools\n3. Create the project folders\n4. Build the Django backend\n5. Build the React frontend\n6. Connect React to Django\n7. Run both locally\n8. Build production files\n9. Use Git and GitHub\n10. Deploy frontend and backend\n11. Debug common machine problems\n\n### Folder we will build\n\n```text\nmy-fullstack-app/\n├── backend/          # Django project\n├── frontend/         # React project\n├── README.md\n└── .gitignore\n```",
        "order": 1
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How Full Stack Workflow Fits the Full Project\n\nThis website teaches a complete React + Django project, not isolated tricks. Here is where **Full Stack Workflow** appears in the real workflow.\n\n### In local development\n\nYou use this topic while building and testing the project on your own machine. The goal is to understand the command, the folder it runs in, and the file it changes.\n\n### In production\n\nYou use this topic again when the app is pushed to GitHub, built by a hosting platform, and served to real users. Production usually changes URLs, secrets, databases, and build commands.\n\n### What to remember\n\n- Know which folder the command must run from.\n- Know whether the command is for development or production.\n- Know what output proves the command worked.\n- Know the next topic in the workflow so you can keep moving without guessing.",
        "order": 2
      },
      {
        "title": "Operating System Setup",
        "sub": "Windows · macOS · Linux",
        "phase": "Foundation",
        "content": "## Operating System Setup\n\nDifferent machines use different terminals, but the project workflow is the same.\n\n### Windows recommended setup\n\nUse **PowerShell** for beginner commands. Use **Git Bash** when following Linux-style commands.\n\nInstall:\n- Node.js active LTS from nodejs.org\n- Python from python.org\n- Git from git-scm.com\n- VS Code\n\nCheck installs:\n\n```powershell\nnode --version\nnpm --version\npython --version\npip --version\ngit --version\n```\n\nIf `python` does not work, try:\n\n```powershell\npy --version\npy -m pip --version\n```\n\n### macOS recommended setup\n\nUse **Terminal** or **iTerm2**.\n\nInstall:\n- Node.js active LTS from nodejs.org\n- Python 3 from python.org or Homebrew\n- Git\n- VS Code\n\nCheck installs:\n\n```bash\nnode --version\nnpm --version\npython3 --version\npip3 --version\ngit --version\n```\n\n### Linux recommended setup\n\nUse the default terminal.\n\nUbuntu/Debian example:\n\n```bash\nsudo apt update\nsudo apt install git python3 python3-pip python3-venv\n```\n\nInstall Node.js from nodejs.org or your preferred Node version manager.\n\nCheck installs:\n\n```bash\nnode --version\nnpm --version\npython3 --version\npip3 --version\ngit --version\n```",
        "order": 3
      },
      {
        "title": "Terminal Command Differences",
        "sub": "Know which command to type on your machine",
        "phase": "Foundation",
        "content": "## Terminal Command Differences\n\nMost errors happen because a learner copies a command for the wrong operating system.\n\n### Change folder\n\n```bash\ncd my-fullstack-app\n```\n\nWorks on Windows, macOS, and Linux.\n\n### Create folder\n\n```bash\nmkdir my-fullstack-app\n```\n\nWorks on Windows, macOS, and Linux.\n\n### Activate Python virtual environment\n\nWindows PowerShell:\n\n```powershell\n.\\venv\\Scripts\\Activate.ps1\n```\n\nWindows Command Prompt:\n\n```bat\nvenv\\Scripts\\activate.bat\n```\n\nmacOS/Linux:\n\n```bash\nsource venv/bin/activate\n```\n\n### Stop a running server\n\nPress:\n\n```text\nCtrl + C\n```\n\n### Clear terminal\n\nWindows PowerShell:\n\n```powershell\ncls\n```\n\nmacOS/Linux:\n\n```bash\nclear\n```",
        "order": 4
      },
      {
        "title": "Command Accuracy Checklist",
        "sub": "Read before copying commands",
        "phase": "Foundation",
        "generated": true,
        "content": "## Command Accuracy Checklist\n\nBefore running any command on this website, check four things. This prevents most beginner errors.\n\n### 1. Which folder am I in?\n\nRun this first:\n\n```bash\npwd\n```\n\nWindows PowerShell also supports:\n\n```powershell\npwd\n```\n\nYou should know whether you are in:\n- Project root\n- `frontend/`\n- `backend/`\n- A folder that contains `package.json`\n- A folder that contains `manage.py`\n\n### 2. Which tool should run this command?\n\nReact uses Node/npm:\n\n```bash\nnpm run dev\nnpm run build\n```\n\nDjango uses Python:\n\n```bash\npython manage.py runserver\npython manage.py migrate\n```\n\nGit uses Git:\n\n```bash\ngit status\ngit commit -m \"message\"\n```\n\nDocker uses Docker:\n\n```bash\ndocker compose up --build\n```\n\n### 3. Is this development or production?\n\nDevelopment commands start local servers:\n\n```bash\nnpm run dev\npython manage.py runserver\n```\n\nProduction commands build or run deploy versions:\n\n```bash\nnpm run build\npython manage.py collectstatic\ngunicorn config.wsgi:application\n```\n\n### 4. What output means success?\n\nReact success usually shows a localhost URL.\nDjango success usually shows `Starting development server`.\nGit success usually shows a clean status or a new commit hash.\nDocker success usually shows running containers in `docker ps`.\nDeployment success means the public URL opens and the API health endpoint responds.\n\nIf the output is different, do not keep typing random commands. Read the first real error and check folder, OS, environment variables, and installed tools.",
        "order": 5
      },
      {
        "title": "Create Project Folder",
        "sub": "One parent folder for backend and frontend",
        "phase": "Build",
        "content": "## Create Project Folder\n\nStart from a place where you keep code projects, then create one parent folder.\n\nWindows PowerShell:\n\n```powershell\nmkdir my-fullstack-app\ncd my-fullstack-app\nmkdir backend\nmkdir frontend\n```\n\nmacOS/Linux:\n\n```bash\nmkdir my-fullstack-app\ncd my-fullstack-app\nmkdir backend frontend\n```\n\nYour structure should be:\n\n```text\nmy-fullstack-app/\n├── backend/\n└── frontend/\n```\n\nWhy this structure?\n- Backend and frontend have different dependencies\n- Django uses Python packages\n- React uses npm packages\n- Deployment platforms often deploy them separately",
        "order": 6
      },
      {
        "title": "Create Django Backend",
        "sub": "Install Django and run the backend server",
        "phase": "Build",
        "content": "## Create Django Backend\n\nGo into the backend folder.\n\nWindows PowerShell:\n\n```powershell\ncd backend\npython -m venv venv\n.\\venv\\Scripts\\Activate.ps1\npython -m pip install --upgrade pip\npip install django djangorestframework django-cors-headers\n```\n\nmacOS/Linux:\n\n```bash\ncd backend\npython3 -m venv venv\nsource venv/bin/activate\npython -m pip install --upgrade pip\npip install django djangorestframework django-cors-headers\n```\n\nCreate the Django project:\n\n```bash\ndjango-admin startproject config .\npython manage.py startapp api\npython manage.py migrate\npython manage.py runserver\n```\n\nOpen:\n\n```text\nhttp://127.0.0.1:8000/\n```\n\nIf you see the Django welcome page, the backend is working.\n\n### Save backend dependencies\n\n```bash\npip freeze > requirements.txt\n```\n\nCommit this file to Git so another machine can install the same packages.",
        "order": 7
      },
      {
        "title": "Create React Frontend",
        "sub": "Create React and run the frontend server",
        "phase": "Build",
        "content": "## Create React Frontend\n\nOpen a second terminal. Keep Django running in the first terminal.\n\nFrom the project root:\n\n```bash\ncd frontend\nnpm create vite@latest . -- --template react\nnpm install\nnpm run dev\n```\n\nOpen the URL shown in the terminal. It is usually:\n\n```text\nhttp://localhost:5173/\n```\n\nIf you use Create React App instead of Vite:\n\n```bash\nnpx create-react-app frontend\ncd frontend\nnpm start\n```\n\nCreate React App usually runs at:\n\n```text\nhttp://localhost:3000/\n```\n\n### Which one should a beginner use?\n\nUse Vite for new projects. It starts faster and the commands are simpler for modern React learning.",
        "order": 8
      },
      {
        "title": "Connect React to Django",
        "sub": "CORS, API URL, and fetch examples",
        "phase": "Build",
        "content": "## Connect React to Django\n\nReact runs on one port. Django runs on another port.\n\nExample:\n- React: http://localhost:5173\n- Django: http://127.0.0.1:8000\n\nBecause they are different origins, Django must allow React using CORS.\n\n### Django settings.py\n\nInstall was already done with:\n\n```bash\npip install django-cors-headers\n```\n\nAdd to `INSTALLED_APPS`:\n\n```python\nINSTALLED_APPS = [\n    # ...\n    'corsheaders',\n    'rest_framework',\n    'api',\n]\n```\n\nAdd middleware near the top:\n\n```python\nMIDDLEWARE = [\n    'corsheaders.middleware.CorsMiddleware',\n    # ...\n]\n```\n\nAllow the React dev server:\n\n```python\nCORS_ALLOWED_ORIGINS = [\n    'http://localhost:5173',\n    'http://localhost:3000',\n]\n```\n\n### Simple Django API view\n\n```python\n# api/views.py\nfrom django.http import JsonResponse\n\ndef health(request):\n    return JsonResponse({'status': 'ok', 'message': 'Django API is working'})\n```\n\n```python\n# api/urls.py\nfrom django.urls import path\nfrom .views import health\n\nurlpatterns = [\n    path('health/', health),\n]\n```\n\n```python\n# config/urls.py\nfrom django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('api/', include('api.urls')),\n]\n```\n\nTest backend:\n\n```text\nhttp://127.0.0.1:8000/api/health/\n```\n\n### React fetch example\n\n```jsx\nimport { useEffect, useState } from 'react';\n\nfunction App() {\n  const [message, setMessage] = useState('Loading...');\n\n  useEffect(() => {\n    fetch('http://127.0.0.1:8000/api/health/')\n      .then((res) => res.json())\n      .then((data) => setMessage(data.message))\n      .catch(() => setMessage('Could not reach Django'));\n  }, []);\n\n  return <h1>{message}</h1>;\n}\n\nexport default App;\n```",
        "order": 9
      },
      {
        "title": "Run Both Servers",
        "sub": "Two terminals workflow",
        "phase": "Build",
        "content": "## Run Both Servers\n\nA full-stack project usually needs two terminals in development.\n\n### Terminal 1: Django backend\n\nWindows:\n\n```powershell\ncd my-fullstack-app\\backend\n.\\venv\\Scripts\\Activate.ps1\npython manage.py runserver\n```\n\nmacOS/Linux:\n\n```bash\ncd my-fullstack-app/backend\nsource venv/bin/activate\npython manage.py runserver\n```\n\nBackend URL:\n\n```text\nhttp://127.0.0.1:8000/\n```\n\n### Terminal 2: React frontend\n\n```bash\ncd my-fullstack-app/frontend\nnpm run dev\n```\n\nFrontend URL:\n\n```text\nhttp://localhost:5173/\n```\n\n### Common beginner mistake\n\nDo not close the backend terminal and expect React API calls to work. React is only the UI. Django must also be running for API requests.",
        "order": 10
      },
      {
        "title": "All Commands Quick Reference",
        "sub": "One-page command list for the whole project",
        "phase": "Build",
        "generated": true,
        "content": "## All Commands Quick Reference\n\n### How to use these commands\n\nThis quick reference is for learners who already read the setup lessons. If a command fails, go back to the operating-system lesson and confirm the correct terminal, Python command, and active folder.\n\n### Create folders\n\n```bash\nmkdir my-fullstack-app\ncd my-fullstack-app\nmkdir backend frontend\n```\n\n### Backend\n\n```bash\ncd backend\npython -m venv venv\nsource venv/bin/activate\npip install django djangorestframework django-cors-headers\ndjango-admin startproject config .\npython manage.py startapp api\npython manage.py migrate\npython manage.py runserver\n```\n\nWindows activation:\n\n```powershell\n.\\venv\\Scripts\\Activate.ps1\n```\n\n### Frontend\n\n```bash\ncd ../frontend\nnpm create vite@latest . -- --template react\nnpm install\nnpm run dev\n```\n\n### Build\n\n```bash\ncd frontend\nnpm run build\n\ncd ../backend\npip freeze > requirements.txt\npython manage.py collectstatic\n```\n\n### GitHub\n\n```bash\ngit init\ngit add .\ngit commit -m \"Build full-stack app\"\ngit remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git\ngit branch -M main\ngit push -u origin main\n```",
        "order": 11
      },
      {
        "title": "Build for Production",
        "sub": "React build and Django production preparation",
        "phase": "Production",
        "content": "## Build for Production\n\nDevelopment servers are not production servers.\n\n### Build React\n\nFrom the frontend folder:\n\n```bash\nnpm run build\n```\n\nVite creates:\n\n```text\nfrontend/dist/\n```\n\nCreate React App creates:\n\n```text\nfrontend/build/\n```\n\nThe build folder contains static HTML, CSS, and JavaScript that can be deployed.\n\n### Prepare Django for production\n\nFrom the backend folder:\n\n```bash\npip install gunicorn whitenoise psycopg2-binary dj-database-url python-decouple\npip freeze > requirements.txt\npython manage.py check\npython manage.py collectstatic\n```\n\nWindows note: `gunicorn` does not run natively on Windows. That is okay. You can install it for deployment and run Django locally with `python manage.py runserver`.\n\n### Important production settings\n\nIn production:\n- `DEBUG = False`\n- `SECRET_KEY` comes from environment variables\n- `ALLOWED_HOSTS` includes your deployed domain\n- Database should be PostgreSQL or another managed production database\n- Static files must be collected or served by your platform\n\n### Build vs run\n\nReact:\n- `npm run dev` = development\n- `npm run build` = production files\n\nDjango:\n- `python manage.py runserver` = development\n- `gunicorn config.wsgi` = production server command on Linux hosting",
        "order": 12
      },
      {
        "title": "Git and GitHub Workflow",
        "sub": "Save code and prepare for deployment",
        "phase": "Production",
        "content": "## Git and GitHub Workflow\n\nFrom the project root:\n\n```bash\ngit init\ngit add .\ngit commit -m \"Initial full-stack project\"\n```\n\nCreate `.gitignore` in the project root:\n\n```gitignore\n# Python\nvenv/\n__pycache__/\n*.pyc\n.env\n*.sqlite3\nstaticfiles/\n\n# Node\nnode_modules/\ndist/\nbuild/\n.env.local\n\n# OS/editor\n.DS_Store\n.vscode/\n```\n\nConnect to GitHub:\n\n```bash\ngit remote add origin https://github.com/YOUR_USERNAME/my-fullstack-app.git\ngit branch -M main\ngit push -u origin main\n```\n\nAfter this, Render/Vercel can deploy directly from GitHub.",
        "order": 13
      },
      {
        "title": "Deployment Map",
        "sub": "Where each part goes",
        "phase": "Production",
        "content": "## Deployment Map\n\nA common beginner-friendly deployment split:\n\n| Part | Platform | Output |\n|------|----------|--------|\n| React frontend | Vercel | Public website URL |\n| Django backend | Render | Public API URL |\n| Database | Render PostgreSQL | Production data |\n| Images/media | Cloud storage | Uploaded files |\n| Secrets | Platform env vars | Safe configuration |\n\n### Frontend deployment command\n\nReact build command:\n\n```bash\nnpm run build\n```\n\nVite publish folder:\n\n```text\ndist\n```\n\nCreate React App publish folder:\n\n```text\nbuild\n```\n\n### Backend deployment commands\n\nRender build command:\n\n```bash\npip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate\n```\n\nRender start command:\n\n```bash\ngunicorn config.wsgi:application\n```\n\n### Environment variables\n\nFrontend:\n\n```text\nVITE_API_URL=https://your-backend.onrender.com\n```\n\nDjango backend:\n\n```text\nSECRET_KEY=your-secret-key\nDEBUG=False\nALLOWED_HOSTS=your-backend.onrender.com\nDATABASE_URL=postgres://...\nCORS_ALLOWED_ORIGINS=https://your-frontend.vercel.app\n```",
        "order": 14
      },
      {
        "title": "Common Machine Errors",
        "sub": "Fix setup and command problems fast",
        "phase": "Mastery",
        "content": "## Common Machine Errors\n\n### node is not recognized\n\nNode.js is not installed or terminal was opened before install.\n\nFix:\n1. Install Node.js active LTS\n2. Close terminal\n3. Open terminal again\n4. Run `node --version`\n\n### python is not recognized\n\nOn Windows, try:\n\n```powershell\npy --version\npy -m pip --version\n```\n\nOn macOS/Linux, try:\n\n```bash\npython3 --version\npip3 --version\n```\n\n### Scripts disabled on Windows PowerShell\n\nIf activating venv fails with execution policy error, run PowerShell as your user and type:\n\n```powershell\nSet-ExecutionPolicy -Scope CurrentUser RemoteSigned\n```\n\nThen activate again:\n\n```powershell\n.\\venv\\Scripts\\Activate.ps1\n```\n\n### Port already in use\n\nSomething is already running on the port.\n\nStop it with `Ctrl + C`, or use another port.\n\nDjango alternate port:\n\n```bash\npython manage.py runserver 8001\n```\n\nVite alternate port:\n\n```bash\nnpm run dev -- --port 5174\n```\n\n### CORS error in browser\n\nReact can reach the backend URL, but Django blocks the origin.\n\nFix:\n- Install `django-cors-headers`\n- Add `corsheaders` to `INSTALLED_APPS`\n- Add middleware\n- Add React URL to `CORS_ALLOWED_ORIGINS`",
        "order": 15
      }
    ]
  },
  {
    "id": "react",
    "name": "React",
    "icon": "⚛️",
    "category": "Frontend",
    "level": "intermediate",
    "color": "#61dafb",
    "bgColor": "#0d2137",
    "desc": "Build modern UIs with components",
    "sections": [
      {
        "title": "Start Here: Complete Roadmap",
        "sub": "Read this first · React path",
        "phase": "Start",
        "generated": true,
        "content": "## Start Here: React Complete Roadmap\n\nThis topic is arranged so a learner can start at the first lesson and keep going without leaving the website.\n\n### What you will master\n\n- Understand components, JSX, props, state, events, hooks, forms, API calls, context, and custom hooks.\n\n- Read the original ReactLearn source lessons and connect each concept to working code.\n\n- Build a complete interactive frontend that talks to an API and keeps UI state predictable.\n\n### Before you start\n\nBasic HTML, CSS, JavaScript, and comfort using the terminal.\n\n### Learning order\n\n1. What is React? — History & why it was created\n\n2. Core Concepts — Components, JSX, Props, State\n\n3. React Hooks — useState, useEffect, useContext, useRef\n\n4. Advantages & Disadvantages — When to use React vs alternatives\n\n5. Project Structure — How to organize a React app\n\n6. ReactLearn Project Roadmap — React-learn archive · README and learning order\n\n7. App shell and page switching — React-learn archive · src/App.jsx\n\n8. Navbar, props, events, and .map navigation — React-learn archive · src/components/Navbar.jsx\n\n9. Basics lab — React-learn archive · src/pages/HomePage.jsx\n\n10. State lab — React-learn archive · src/pages/TaskPage.jsx\n\n11. Forms lab — React-learn archive · src/pages/ProfilePage.jsx\n\n12. API lab — React-learn archive · src/pages/ApiFetchPage.jsx\n\n13. Context lab — React-learn archive · src/context/ThemeContext.jsx\n\n14. Reusable hooks — React-learn archive · src/hooks/customHooks.js\n\n### How to study this topic\n\n1. Read each lesson in order.\n\n2. Type the commands and code examples yourself.\n\n3. After every Build or Production lesson, explain the concept back in your own words.\n\n4. Finish with the final project and checklist section.",
        "order": 1
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How React Fits the Full Project\n\nThis website teaches a complete React + Django project, not isolated tricks. Here is where **React** appears in the real workflow.\n\n### In local development\n\nYou use this topic while building and testing the project on your own machine. The goal is to understand the command, the folder it runs in, and the file it changes.\n\n### In production\n\nYou use this topic again when the app is pushed to GitHub, built by a hosting platform, and served to real users. Production usually changes URLs, secrets, databases, and build commands.\n\n### What to remember\n\n- Know which folder the command must run from.\n- Know whether the command is for development or production.\n- Know what output proves the command worked.\n- Know the next topic in the workflow so you can keep moving without guessing.",
        "order": 2
      },
      {
        "title": "What is React?",
        "sub": "History & why it was created",
        "content": "## What is React?\n\nReact is a JavaScript library built by **Facebook (Meta)** in 2013 to solve a big problem: keeping the UI in sync with data. Before React, developers had to manually update the DOM which was slow and bug-prone.\n\n### Why was it created?\nFacebook's news feed had thousands of elements updating constantly. jQuery wasn't scaling. React solved this with:\n- **Component-based architecture** — break UI into small reusable pieces\n- **Virtual DOM** — React compares changes and updates only what changed\n- **One-way data flow** — data flows down, events go up\n\n### Key Milestones\n| Year | Event |\n|------|-------|\n| 2013 | Open-sourced by Facebook |\n| 2015 | React Native launched |\n| 2019 | Hooks introduced (useState, useEffect) |\n| 2022 | React 18 with concurrent features |\n| 2023 | React Server Components stable |",
        "phase": "Foundation",
        "order": 3
      },
      {
        "title": "Core Concepts",
        "sub": "Components, JSX, Props, State",
        "content": "## Core Concepts\n\n### 1. Component — A reusable piece of UI (like a LEGO block)\n```jsx\nfunction Button({ label, onClick }) {\n  return <button onClick={onClick}>{label}</button>;\n}\n```\n\n### 2. JSX — Write HTML inside JavaScript\n```jsx\nconst element = <h1>Hello, World!</h1>;\n// JSX compiles to:\nconst element = React.createElement('h1', null, 'Hello, World!');\n```\n\n### 3. Props — Data passed from parent to child\n```jsx\nfunction Greeting({ name, age }) {\n  return <h2>Hello {name}, you are {age} years old!</h2>;\n}\n// Usage:\n<Greeting name=\"Aarav\" age={12} />\n```\n\n### 4. State — Data that changes over time\n```jsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <p>Count: {count}</p>\n      <button onClick={() => setCount(count + 1)}>+1</button>\n    </div>\n  );\n}\n```",
        "phase": "Foundation",
        "order": 4
      },
      {
        "title": "React Hooks",
        "sub": "useState, useEffect, useContext, useRef",
        "content": "## React Hooks\n\nHooks were introduced in React 16.8 to use state and lifecycle features in function components.\n\n### useState — Add state\n```jsx\nconst [name, setName] = useState(\"Riya\");\nconst [isLoggedIn, setIsLoggedIn] = useState(false);\nconst [items, setItems] = useState([]);\n```\n\n### useEffect — Side effects (API calls, timers, subscriptions)\n```jsx\nuseEffect(() => {\n  // Runs after every render\n  document.title = name;\n}, [name]); // Only runs when 'name' changes\n\nuseEffect(() => {\n  // Runs only once (like componentDidMount)\n  fetchData();\n}, []); // Empty array = run once\n```\n\n### useContext — Share data without prop drilling\n```jsx\nconst ThemeContext = React.createContext('light');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Child />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Child() {\n  const theme = useContext(ThemeContext); // 'dark'\n  return <div className={theme}>Hello!</div>;\n}\n```\n\n### useRef — Access DOM elements\n```jsx\nconst inputRef = useRef(null);\n// inputRef.current.focus() — focuses the input\n```",
        "phase": "Foundation",
        "order": 5
      },
      {
        "title": "Advantages & Disadvantages",
        "sub": "When to use React vs alternatives",
        "content": "## Advantages of React\n\n✅ **Huge ecosystem** — npm has thousands of React libraries\n✅ **Reusable components** — build once, use everywhere\n✅ **Virtual DOM** — efficient updates, fast performance\n✅ **React Native** — use same skills for iOS & Android apps\n✅ **Huge job market** — most in-demand frontend skill\n✅ **Used by giants** — Facebook, Instagram, Airbnb, Netflix, Uber\n\n## Disadvantages\n\n❌ **Just a UI library** — need extra tools for routing (React Router), state management (Redux/Zustand)\n❌ **JSX learning curve** — mixing HTML and JS feels weird at first\n❌ **Fast-changing ecosystem** — what's best practice changes often\n❌ **SEO out of the box** — need Next.js for server-side rendering\n\n## Alternatives\n| Framework | Best For |\n|-----------|----------|\n| Vue.js | Gentle learning curve, templates |\n| Angular | Enterprise, full framework |\n| Svelte | Tiny bundle, no virtual DOM |\n| Next.js | React + SSR + routing (best for production) |",
        "phase": "Foundation",
        "order": 6
      },
      {
        "title": "Project Structure",
        "sub": "How to organize a React app",
        "content": "## React Project Structure\n\n```\nmy-app/\n├── public/\n│   └── index.html          ← Single HTML file\n├── src/\n│   ├── index.js            ← Entry point\n│   ├── App.js              ← Root component\n│   ├── components/         ← Reusable components\n│   │   ├── Navbar.jsx\n│   │   ├── Button.jsx\n│   │   └── Card.jsx\n│   ├── pages/              ← Page-level components\n│   │   ├── Home.jsx\n│   │   └── About.jsx\n│   ├── hooks/              ← Custom hooks\n│   │   └── useFetch.js\n│   ├── context/            ← Context providers\n│   │   └── AuthContext.js\n│   ├── styles/             ← CSS files\n│   │   └── App.css\n│   └── utils/              ← Helper functions\n│       └── api.js\n├── package.json\n└── README.md\n```\n\n## Commands to get started\n```bash\nnpx create-react-app my-app\ncd my-app\nnpm start\n```",
        "phase": "Foundation",
        "order": 7
      },
      {
        "title": "React Project Commands",
        "sub": "Create, run, build, preview, and deploy React",
        "phase": "Build",
        "content": "## React Project Commands\n\nUse this section when you want to build an actual React project from zero.\n\n### New React project with Vite\n\n```bash\nnpm create vite@latest my-react-app -- --template react\ncd my-react-app\nnpm install\nnpm run dev\n```\n\nOpen the local URL shown in terminal, usually:\n\n```text\nhttp://localhost:5173/\n```\n\n### Build React for production\n\n```bash\nnpm run build\n```\n\nVite output folder:\n\n```text\ndist/\n```\n\n### Preview production build locally\n\n```bash\nnpm run preview\n```\n\n### Environment variables in Vite\n\nCreate `.env`:\n\n```text\nVITE_API_URL=http://127.0.0.1:8000\n```\n\nUse it in React:\n\n```javascript\nconst API_URL = import.meta.env.VITE_API_URL;\n```\n\n### Create React App commands, if using CRA\n\n```bash\nnpx create-react-app my-react-app\ncd my-react-app\nnpm start\nnpm run build\n```\n\nCRA output folder:\n\n```text\nbuild/\n```",
        "order": 8
      },
      {
        "title": "ReactLearn Project Roadmap",
        "sub": "React-learn archive · README and learning order",
        "content": "## ReactLearn Project Roadmap\n\n# ⚛️ React Learning Project\n## Complete Guide: Basics → Advanced (With Comments)\n\n---\n\n## 🚀 How to Run This Project\n\n```bash\n# Step 1: Install Node.js from https://nodejs.org (LTS version)\n# Verify: node --version  (should show v18+)\n\n# Step 2: Install dependencies\nnpm install\n\n# Step 3: Start development server\nnpm run dev\n\n# Step 4: Open browser at http://localhost:5173\n```\n\n---\n\n## 📁 Project Structure\n\n```\nreact-learning-project/\n│\n├── index.html              ← Single HTML file (React mounts here)\n├── vite.config.js          ← Build tool config\n├── package.json            ← Dependencies & scripts\n│\n└── src/\n    ├── main.jsx            ← Entry point (mounts App to DOM)\n    ├── App.jsx             ← Root component (routing between pages)\n    │\n    ├── context/\n    │   └── ThemeContext.jsx  ← 🔴 Context API + Custom Hook\n    │\n    ├── components/\n    │   └── Navbar.jsx        ← 🔰 Props, .map(), Events\n    │\n    ├── pages/\n    │   ├── HomePage.jsx      ← 🔰 JSX, useState, Conditional Render\n    │   ├── TaskPage.jsx      ← 🟡 Array state, Lifting State Up\n    │   ├── ProfilePage.jsx   ← 🟡 Forms, Validation, useRef\n    │   └── ApiFetchPage.jsx  ← 🔴 useEffect, Async, Custom Hooks\n    │\n    └── hooks/\n        └── customHooks.js    ← 🔴 useLocalStorage, useDebounce\n```\n\n---\n\n## 📚 Concepts by Difficulty\n\n### 🔰 BASIC (Start Here)\n| Concept | Where to Find |\n|---------|--------------|\n| JSX syntax and rules | HomePage.jsx — ConceptCard component |\n| useState (counter) | HomePage.jsx — CounterDemo component |\n| Props (parent → child) | Navbar.jsx, TaskItem component |\n| Conditional rendering (`&&`, ternary) | Navbar.jsx, TaskPage.jsx |\n| Array .map() for lists | Navbar.jsx navItems, TaskPage task list |\n| key prop in lists | Every .map() call |\n| Event handlers (onClick, onChange) | Navbar.jsx, TaskPage.jsx |\n| Controlled inputs | TaskForm, ProfilePage |\n\n### 🟡 INTERMEDIATE\n| Concept | Where to Find |\n|---------|--------------|\n| useState with arrays | TaskPage.jsx — addTask, deleteTask, toggleTask |\n| Immutable array updates (spread) | TaskPage.jsx |\n| Lifting state up | TaskForm → TaskPage |\n| Single onChange handler | ProfilePage.jsx — handleChange |\n| Form validation | ProfilePage.jsx — validate() |\n| Derived state | TaskPage (completedCount, filteredTasks) |\n| useEffect basics | ApiFetchPage.jsx |\n| 3-state pattern (loading/error/data) | ApiFetchPage.jsx |\n| Object spread updates | ProfilePage.jsx |\n\n### 🔴 ADVANCED\n| Concept | Where to Find |\n|---------|--------------|\n| Context API (createContext, Provider) | ThemeContext.jsx |\n| Custom Hook (useTheme, useFetch) | ThemeContext.jsx, ApiFetchPage.jsx |\n| useRef (DOM access) | ProfilePage.jsx — nameInputRef |\n| useCallback (memoization) | ApiFetchPage.jsx — handleDemoChange |\n| AbortController (cleanup) | ApiFetchPage.jsx — useFetch hook |\n| useLocalStorage hook | hooks/customHooks.js |\n| useDebounce hook | hooks/customHooks.js |\n| Lazy useState initialization | hooks/customHooks.js |\n\n---\n\n## 🇬🇧 Business English — Developer Terms\n\nUse these in interviews and at work:\n\n| Term | Meaning |\n|------|---------|\n| **Component** | Reusable piece of UI (like a Python class) |\n| **State** | Data that can change and triggers re-render |\n| **Props** | Data passed from parent to child component |\n| **Hook** | Special React function (starts with 'use') |\n| **Side effect** | Code that interacts with outside world (API, timer) |\n| **Memoization** | Caching results to avoid recalculation |\n| **Lifting state up** | Moving state to parent for sharing |\n| **Controlled component** | Input value managed by React state |\n| **Prop drilling** | Passing props through many layers (problem) |\n| **Context** | Global state solution (solves prop drilling) |\n| **Custom hook** | Reusable stateful logic extracted to a function |\n| **Immutable update** | Creating new array/object instead of modifying |\n| **Derived state** | Values computed from existing state |\n| **Reconciliation** | React's process of updating only changed DOM parts |\n| **Virtual DOM** | React's in-memory representation of the UI |\n\n---\n\n## 🗺️ What to Learn Next (After This Project)\n\n1. **React Router** — Real URL-based navigation (`npm install react-router-dom`)\n2. **Axios** — Better HTTP client than fetch (`npm install axios`)\n3. **React Query / TanStack Query** — Advanced data fetching & caching\n4. **Zustand** — Simple global state management\n5. **Redux Toolkit** — Enterprise-grade state management\n6. **TypeScript** — Type safety for React (`npm install typescript`)\n7. **Next.js** — Full-stack React framework (like Django but for React)\n8. **Tailwind CSS** — Utility-first CSS framework\n9. **React Testing Library** — Testing your components\n10. **Storybook** — Component documentation\n\n---\n\n## 💼 Interview Tips (Business English)\n\n**\"Can you explain React's component lifecycle?\"**\n> \"In React, components go through mounting (initial render), updating (when state or props change), and unmounting (removal from DOM). We handle side effects at each stage using the useEffect hook.\"\n\n**\"What is the difference between state and props?\"**\n> \"State is internal data managed by a component that can change over time. Props are external data passed from a parent component and are read-only within the child.\"\n\n**\"How do you handle async operations in React?\"**\n> \"I use the useEffect hook to trigger async operations after render, combined with async/await for clean syntax. I always implement a 3-state pattern — loading, error, and data — to handle all possible outcomes gracefully.\"\n\n---\n\n*Built with React 18 + Vite | For learning purposes*\n",
        "phase": "Build",
        "order": 9
      },
      {
        "title": "App shell and page switching",
        "sub": "React-learn archive · src/App.jsx",
        "content": "## App shell and page switching\n\nThis section preserves the original source from `src/App.jsx` so the lesson stays connected to the working example from the archive.\n\n\n\n```jsx\n// ============================================================\n// 📁 App.jsx — ROOT COMPONENT (Entry point of React App)\n// ============================================================\n// CONCEPT: Every React app has ONE root component called App.\n// It is like Django's urls.py — it decides what page to show.\n// React renders this component inside index.html's <div id=\"root\">\n// ============================================================\n\n// 🔰 BASIC: Importing React and hooks from the React library\n// In modern React (v18+), you don't need to import React for JSX,\n// but importing hooks is always required.\nimport { useState } from \"react\";\n\n// 🔰 BASIC: Importing components we built ourselves\n// Each component is a separate file (separation of concerns)\nimport Navbar from \"./components/Navbar\";\nimport HomePage from \"./pages/HomePage\";\nimport TaskPage from \"./pages/TaskPage\";\nimport ProfilePage from \"./pages/ProfilePage\";\nimport ApiFetchPage from \"./pages/ApiFetchPage\";\n\n// 🟡 INTERMEDIATE: Importing Context Provider\n// Context allows sharing data across ALL components\n// without passing props manually (like Django's session/middleware)\nimport { ThemeProvider } from \"./context/ThemeContext\";\n\n// ============================================================\n// 🔰 BASIC: What is a Component?\n// A component is just a JavaScript FUNCTION that returns JSX.\n// JSX = HTML-like syntax inside JavaScript.\n// Django equivalent: a template that returns HTML\n// ============================================================\nfunction App() {\n\n  // 🔰 BASIC: useState Hook\n  // useState lets us store and update data inside a component.\n  // When state changes, React re-renders the component automatically.\n  //\n  // Syntax: const [value, setValue] = useState(initialValue)\n  // - \"currentPage\" is the current value\n  // - \"setCurrentPage\" is the function to update it\n  // - \"home\" is the initial/default value\n  //\n  // Django equivalent: like session data that triggers page reload\n  const [currentPage, setCurrentPage] = useState(\"home\");\n\n  // ============================================================\n  // 🔰 BASIC: Conditional Rendering\n  // Showing different components based on state/conditions.\n  // Django equivalent: {% if %} {% elif %} {% endif %} in templates\n  // ============================================================\n  const renderPage = () => {\n    // This is a switch statement — like if/elif/else in Python\n    switch (currentPage) {\n      case \"home\":\n        return <HomePage />;\n      case \"tasks\":\n        return <TaskPage />;\n      case \"profile\":\n        return <ProfilePage />;\n      case \"api\":\n        return <ApiFetchPage />;\n      default:\n        return <HomePage />;\n    }\n  };\n\n  // ============================================================\n  // 🔰 BASIC: JSX — Return Statement\n  // Every component MUST return JSX (the UI).\n  // JSX looks like HTML but it is actually JavaScript.\n  //\n  // KEY RULES of JSX:\n  // 1. Must return ONE root element (wrap in <div> or <>)\n  // 2. Use className instead of class (class is a JS reserved word)\n  // 3. JavaScript expressions go inside {} curly braces\n  // 4. Self-closing tags must have /> at the end: <img />\n  // ============================================================\n  return (\n    // 🟡 INTERMEDIATE: ThemeProvider wraps everything\n    // This gives ALL child components access to theme data\n    // without passing it as props manually\n    <ThemeProvider>\n\n      {/* \n        🔰 BASIC: JSX Comments use  syntax\n        Regular HTML comments <!-- --> do NOT work in JSX!\n      */}\n\n      {/* \n        🔰 BASIC: Passing Props to Components\n        Props = Properties = data passed from parent to child\n        Django equivalent: {{ variable }} passed to template\n        \n        Here we pass \"currentPage\" and \"setCurrentPage\" as props\n        to the Navbar so it can show active state and navigate\n      */}\n      <Navbar\n        currentPage={currentPage}\n        setCurrentPage={setCurrentPage}\n      />\n\n      {/* \n        🔰 BASIC: Rendering dynamic content with {}\n        renderPage() is a function — calling it returns the correct page component\n      */}\n      <main style={{ minHeight: \"calc(100vh - 70px)\" }}>\n        {renderPage()}\n      </main>\n\n    </ThemeProvider>\n  );\n}\n\n// 🔰 BASIC: Exporting the component\n// Every component file must export the component.\n// \"default export\" means this is the main thing exported from the file.\n// Django equivalent: defining a view function in views.py\nexport default App;\n\n```",
        "phase": "Build",
        "order": 10
      },
      {
        "title": "Navbar, props, events, and .map navigation",
        "sub": "React-learn archive · src/components/Navbar.jsx",
        "content": "## Navbar, props, events, and .map navigation\n\nThis section preserves the original source from `src/components/Navbar.jsx` so the lesson stays connected to the working example from the archive.\n\n\n\n```jsx\n// ============================================================\n// 📁 components/Navbar.jsx\n// ============================================================\n// 🔰 BASIC: A reusable Navbar component\n//\n// CONCEPTS COVERED:\n// ✅ Props (receiving data from parent)\n// ✅ Array.map() to render lists\n// ✅ Event handlers (onClick)\n// ✅ Conditional className (active state)\n// ✅ useTheme custom hook (Context)\n// ============================================================\n\nimport { useTheme } from \"../context/ThemeContext\";\n\n// ============================================================\n// 🔰 BASIC: Props — Receiving data from parent (App.jsx)\n//\n// Props are like function parameters.\n// App.jsx passes: currentPage=\"home\" setCurrentPage={fn}\n// We receive them here by destructuring:\n// { currentPage, setCurrentPage } = props\n//\n// Django equivalent: variables passed to template context\n// render(request, 'page.html', {'currentPage': 'home'})\n// ============================================================\nfunction Navbar({ currentPage, setCurrentPage }) {\n\n  // 🟡 INTERMEDIATE: Using our custom Context hook\n  // This gives us access to theme, toggleTheme, and colors\n  // WITHOUT needing them passed as props from App.jsx\n  const { theme, toggleTheme, colors } = useTheme();\n\n  // ============================================================\n  // 🔰 BASIC: Array of objects — data for navigation items\n  // Instead of hardcoding 4 <button> elements, we store data\n  // in an array and use .map() to generate them dynamically.\n  // Django equivalent: passing a list of nav items to a template\n  // ============================================================\n  const navItems = [\n    { id: \"home\",    label: \"🏠 Home\",     title: \"React Basics\" },\n    { id: \"tasks\",   label: \"✅ Tasks\",    title: \"State & Events\" },\n    { id: \"profile\", label: \"👤 Profile\",  title: \"Forms & Props\" },\n    { id: \"api\",     label: \"🌐 API Fetch\", title: \"useEffect & Async\" },\n  ];\n\n  return (\n    <nav style={{\n      backgroundColor: colors.surface,\n      borderBottom: `2px solid ${colors.accent}`,\n      padding: \"0 24px\",\n      display: \"flex\",\n      alignItems: \"center\",\n      justifyContent: \"space-between\",\n      height: \"70px\",\n      position: \"sticky\",  // stays at top while scrolling\n      top: 0,\n      zIndex: 100,\n      boxShadow: `0 4px 20px ${colors.accentGlow}`,\n    }}>\n\n      {/* LOGO */}\n      <div style={{\n        fontSize: \"20px\",\n        fontWeight: \"bold\",\n        color: colors.accent,\n        letterSpacing: \"2px\"\n      }}>\n        ⚛️ REACT<span style={{ color: colors.text }}>LEARN</span>\n      </div>\n\n      {/* \n        ============================================================\n        🔰 BASIC: Array.map() — Rendering a list of components\n        \n        .map() loops through each item and returns JSX for each.\n        Python equivalent: [render_item(item) for item in items]\n        \n        ⚠️ KEY RULE: Every item in a .map() MUST have a unique \"key\" prop.\n        React uses \"key\" to track which items changed/added/removed.\n        Always use a unique ID, not the array index (index causes bugs).\n        ============================================================\n      */}\n      <div style={{ display: \"flex\", gap: \"8px\" }}>\n        {navItems.map((item) => (\n          <button\n            key={item.id}  // 🔰 BASIC: Unique key required for lists!\n\n            // 🔰 BASIC: onClick Event Handler\n            // When button is clicked, call setCurrentPage with item.id\n            // setCurrentPage is a function passed from App.jsx via props\n            // Arrow function () => prevents immediate execution\n            onClick={() => setCurrentPage(item.id)}\n\n            style={{\n              padding: \"8px 16px\",\n              borderRadius: \"8px\",\n              border: \"none\",\n              cursor: \"pointer\",\n              fontSize: \"13px\",\n              fontWeight: \"600\",\n              fontFamily: \"'Courier New', monospace\",\n              transition: \"all 0.2s ease\",\n\n              // 🔰 BASIC: Conditional Styling\n              // If this item is the current page, show accent color\n              // Otherwise show default surface color\n              // Python equivalent: 'active' if item.id == currentPage else 'inactive'\n              backgroundColor: currentPage === item.id ? colors.accent : colors.card,\n              color: currentPage === item.id ? \"#fff\" : colors.textMuted,\n              boxShadow: currentPage === item.id ? `0 0 12px ${colors.accentGlow}` : \"none\",\n            }}\n          >\n            {item.label}\n          </button>\n        ))}\n      </div>\n\n      {/* Theme Toggle Button */}\n      <button\n        onClick={toggleTheme}  // 🔰 BASIC: Calling a function from Context\n        style={{\n          background: colors.card,\n          border: `1px solid ${colors.border}`,\n          borderRadius: \"50%\",\n          width: \"40px\",\n          height: \"40px\",\n          cursor: \"pointer\",\n          fontSize: \"18px\",\n        }}\n        title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}\n      >\n        {/* 🔰 BASIC: Ternary operator — short if/else in JSX */}\n        {theme === \"dark\" ? \"☀️\" : \"🌙\"}\n      </button>\n\n    </nav>\n  );\n}\n\nexport default Navbar;\n\n```",
        "phase": "Build",
        "order": 11
      },
      {
        "title": "Basics lab",
        "sub": "React-learn archive · src/pages/HomePage.jsx",
        "content": "## Basics lab: JSX, props, useState, rendering lists\n\nThis section preserves the original source from `src/pages/HomePage.jsx` so the lesson stays connected to the working example from the archive.\n\n\n\n```jsx\n// ============================================================\n// 📁 pages/HomePage.jsx\n// ============================================================\n// 🔰 BASIC: HomePage — Covers React Fundamentals\n//\n// CONCEPTS COVERED:\n// ✅ JSX syntax and rules\n// ✅ Components and reusability\n// ✅ Props passing (parent → child)\n// ✅ useState counter example\n// ✅ Conditional rendering\n// ✅ Lists with .map()\n// ✅ Inline styles vs className\n// ============================================================\n\nimport { useState } from \"react\";\nimport { useTheme } from \"../context/ThemeContext\";\n\n// ============================================================\n// 🔰 BASIC: Child Component — ConceptCard\n//\n// This is a REUSABLE component. We define it once and use it\n// multiple times with different props (data).\n//\n// Django equivalent: A template include ({% include 'card.html' %})\n// that accepts different variables each time.\n//\n// Props received:\n// - title: the card heading\n// - level: \"BASIC\", \"INTERMEDIATE\", or \"ADVANCED\"\n// - children: whatever JSX is put between <ConceptCard>...</ConceptCard>\n// ============================================================\nfunction ConceptCard({ title, level, children }) {\n  const { colors } = useTheme();\n\n  // Color based on level — a simple mapping object\n  // Python equivalent: a dictionary lookup\n  const levelColors = {\n    \"BASIC\": colors.success,\n    \"INTERMEDIATE\": colors.warning,\n    \"ADVANCED\": colors.danger,\n  };\n\n  return (\n    <div style={{\n      backgroundColor: colors.card,\n      border: `1px solid ${colors.border}`,\n      borderLeft: `4px solid ${levelColors[level]}`,\n      borderRadius: \"12px\",\n      padding: \"20px\",\n      marginBottom: \"16px\",\n    }}>\n      {/* Header row with title and level badge */}\n      <div style={{ display: \"flex\", justifyContent: \"space-between\", marginBottom: \"12px\" }}>\n        <h3 style={{ color: colors.accent, margin: 0, fontSize: \"16px\" }}>{title}</h3>\n        <span style={{\n          backgroundColor: levelColors[level] + \"22\",  // \"22\" adds transparency in hex\n          color: levelColors[level],\n          padding: \"2px 8px\",\n          borderRadius: \"20px\",\n          fontSize: \"11px\",\n          fontWeight: \"bold\",\n        }}>\n          {level}\n        </span>\n      </div>\n\n      {/* \n        🔰 BASIC: {children} prop\n        This renders whatever is put BETWEEN the component tags.\n        <ConceptCard>THIS PART IS CHILDREN</ConceptCard>\n      */}\n      <div style={{ color: colors.textMuted, fontSize: \"14px\", lineHeight: \"1.6\" }}>\n        {children}\n      </div>\n    </div>\n  );\n}\n\n// ============================================================\n// 🔰 BASIC: Counter Component\n// Classic example to understand useState\n// ============================================================\nfunction CounterDemo() {\n  const { colors } = useTheme();\n\n  // useState returns [currentValue, updaterFunction]\n  // Initial value is 0\n  const [count, setCount] = useState(0);\n\n  // 🔰 BASIC: Event handler functions\n  // Best practice: define handlers as named functions above JSX\n  const increment = () => setCount(count + 1);\n  const decrement = () => setCount(count - 1);\n  const reset     = () => setCount(0);\n\n  return (\n    <div style={{ textAlign: \"center\", padding: \"16px\" }}>\n      {/* \n        🔰 BASIC: Displaying state value in JSX\n        Wrap JavaScript variables in {} to render them\n      */}\n      <div style={{\n        fontSize: \"48px\",\n        fontWeight: \"bold\",\n        color: count > 0 ? colors.success : count < 0 ? colors.danger : colors.accent,\n        margin: \"12px 0\",\n        transition: \"color 0.3s\"\n      }}>\n        {count}\n      </div>\n\n      <div style={{ display: \"flex\", gap: \"8px\", justifyContent: \"center\" }}>\n        {/* 🔰 BASIC: onClick with inline arrow function */}\n        <button onClick={decrement} style={btnStyle(colors.danger)}>− Decrease</button>\n        <button onClick={reset}     style={btnStyle(colors.textMuted)}>↺ Reset</button>\n        <button onClick={increment} style={btnStyle(colors.success)}>+ Increase</button>\n      </div>\n\n      {/* \n        🔰 BASIC: Conditional Rendering with && operator\n        If count > 5, show the message. Otherwise show nothing.\n        Python equivalent: {% if count > 5 %}...{% endif %}\n      */}\n      {count > 5 && (\n        <p style={{ color: colors.warning, marginTop: \"8px\", fontSize: \"13px\" }}>\n          ⚠️ Count is getting high!\n        </p>\n      )}\n\n      {/* \n        🔰 BASIC: Ternary for two different outcomes\n        Python equivalent: \"Positive\" if count > 0 else \"Negative/Zero\"\n      */}\n      <p style={{ color: colors.textMuted, fontSize: \"12px\", marginTop: \"4px\" }}>\n        Status: {count > 0 ? \"✅ Positive\" : count < 0 ? \"❌ Negative\" : \"⚪ Zero\"}\n      </p>\n    </div>\n  );\n}\n\n// Helper function for button styles — reused multiple times\n// 🔰 BASIC: Functions can return style objects (reusability!)\nfunction btnStyle(color) {\n  return {\n    backgroundColor: color + \"22\",\n    color: color,\n    border: `1px solid ${color}`,\n    padding: \"8px 16px\",\n    borderRadius: \"8px\",\n    cursor: \"pointer\",\n    fontSize: \"13px\",\n    fontWeight: \"bold\",\n    fontFamily: \"'Courier New', monospace\",\n  };\n}\n\n// ============================================================\n// MAIN HomePage COMPONENT\n// ============================================================\nfunction HomePage() {\n  const { colors } = useTheme();\n\n  // ============================================================\n  // 🔰 BASIC: Array of objects — data separate from JSX\n  // Always keep data separate from your UI code.\n  // Django equivalent: queryset data passed to template\n  // ============================================================\n  const reactFacts = [\n    { id: 1, emoji: \"⚛️\",  fact: \"React is a JavaScript library for building UIs\" },\n    { id: 2, emoji: \"🧩\",  fact: \"Everything in React is a Component (reusable piece of UI)\" },\n    { id: 3, emoji: \"🔄\",  fact: \"When state changes, React automatically re-renders the component\" },\n    { id: 4, emoji: \"📦\",  fact: \"Props pass data from Parent component to Child component\" },\n    { id: 5, emoji: \"🪝\",  fact: \"Hooks (useState, useEffect) are special functions for adding features\" },\n    { id: 6, emoji: \"🌳\",  fact: \"React builds a Virtual DOM and updates only what changed (fast!)\" },\n  ];\n\n  return (\n    <div style={{ maxWidth: \"900px\", margin: \"0 auto\", padding: \"32px 24px\" }}>\n\n      {/* PAGE HEADER */}\n      <div style={{ textAlign: \"center\", marginBottom: \"40px\" }}>\n        <h1 style={{\n          fontSize: \"36px\",\n          color: colors.accent,\n          letterSpacing: \"3px\",\n          marginBottom: \"8px\",\n        }}>\n          ⚛️ REACT FUNDAMENTALS\n        </h1>\n        <p style={{ color: colors.textMuted, fontSize: \"16px\" }}>\n          Your complete guide from beginner to advanced — with every concept explained\n        </p>\n      </div>\n\n      {/* ==================== SECTION 1: FACTS ==================== */}\n      <ConceptCard title=\"📚 What is React? Key Facts\" level=\"BASIC\">\n        {/*\n          🔰 BASIC: .map() to render a list\n          For each item in reactFacts array, return a <div>\n          Always add key={item.id} — use unique ID, not index!\n        */}\n        {reactFacts.map((item) => (\n          <div\n            key={item.id}\n            style={{\n              display: \"flex\",\n              gap: \"12px\",\n              padding: \"8px 0\",\n              borderBottom: `1px solid ${colors.border}`,\n            }}\n          >\n            <span style={{ fontSize: \"20px\" }}>{item.emoji}</span>\n            <span>{item.fact}</span>\n          </div>\n        ))}\n      </ConceptCard>\n\n      {/* ==================== SECTION 2: JSX ==================== */}\n      <ConceptCard title=\"🏗️ JSX — HTML inside JavaScript\" level=\"BASIC\">\n        <p>JSX is what makes React special. It lets you write HTML-like code inside JavaScript.</p>\n        <pre style={{\n          backgroundColor: colors.surface,\n          padding: \"16px\",\n          borderRadius: \"8px\",\n          border: `1px solid ${colors.border}`,\n          fontSize: \"13px\",\n          overflow: \"auto\",\n          color: colors.text,\n          lineHeight: \"1.8\",\n          marginTop: \"12px\",\n        }}>\n{`// ✅ JSX Rules:\n// 1. Return ONE root element\n// 2. Use className (not class)\n// 3. JavaScript goes inside {}\n// 4. Self-close empty tags: <br />\n\nfunction MyComponent() {\n  const name = \"John\";           // JS variable\n  const isLoggedIn = true;       // JS boolean\n\n  return (\n    <div className=\"container\">            {/* className, not class! */}\n      <h1>Hello, {name}!</h1>             {/* {} for JS expressions */}\n      {isLoggedIn && <p>Welcome back</p>} {/* conditional rendering */}\n      {isLoggedIn ? \"✅ Online\" : \"❌ Offline\"} {/* ternary */}\n      <img src=\"photo.jpg\" />             {/* self-closing */}\n    </div>\n  );\n}`}\n        </pre>\n      </ConceptCard>\n\n      {/* ==================== SECTION 3: COUNTER ==================== */}\n      <ConceptCard title=\"🔢 useState — Interactive Counter Demo\" level=\"BASIC\">\n        <p style={{ marginBottom: \"16px\" }}>\n          <strong style={{ color: colors.accent }}>useState</strong> is the most important hook.\n          It stores data that can change. When it changes, the UI updates automatically.\n          Think of it like Django's session — but instant, no page reload!\n        </p>\n        {/* 🔰 BASIC: Rendering a child component */}\n        <CounterDemo />\n      </ConceptCard>\n\n      {/* ==================== SECTION 4: PROPS ==================== */}\n      <ConceptCard title=\"📨 Props — Passing Data Between Components\" level=\"BASIC\">\n        <p>Props flow ONE way: Parent → Child. Like Django passing context to a template.</p>\n        <pre style={{\n          backgroundColor: colors.surface,\n          padding: \"16px\",\n          borderRadius: \"8px\",\n          border: `1px solid ${colors.border}`,\n          fontSize: \"13px\",\n          overflow: \"auto\",\n          color: colors.text,\n          lineHeight: \"1.8\",\n          marginTop: \"12px\",\n        }}>\n{`// PARENT component sends data via props:\nfunction Parent() {\n  const user = { name: \"Alice\", age: 25 };\n\n  return (\n    <Child\n      name={user.name}     // string prop\n      age={user.age}       // number prop\n      isAdmin={true}       // boolean prop\n      greet={() => \"Hi!\"}  // function prop\n    />\n  );\n}\n\n// CHILD component receives props:\nfunction Child({ name, age, isAdmin, greet }) {\n  return (\n    <div>\n      <h2>{name}</h2>                    // \"Alice\"\n      <p>Age: {age}</p>                  // \"25\"\n      {isAdmin && <p>🔑 Admin User</p>}  // shows if true\n      <button onClick={greet}>Hi</button>\n    </div>\n  );\n}`}\n        </pre>\n      </ConceptCard>\n\n      {/* ==================== SECTION 5: COMPONENT TREE ==================== */}\n      <ConceptCard title=\"🌳 Component Tree — How React Apps Are Structured\" level=\"INTERMEDIATE\">\n        <p>React apps are a TREE of components. Data flows DOWN from parent to child.</p>\n        <pre style={{\n          backgroundColor: colors.surface,\n          padding: \"16px\",\n          borderRadius: \"8px\",\n          border: `1px solid ${colors.border}`,\n          fontSize: \"13px\",\n          overflow: \"auto\",\n          color: colors.accent,\n          lineHeight: \"2\",\n          marginTop: \"12px\",\n        }}>\n{`App (root)\n├── Navbar (receives: currentPage, setCurrentPage)\n│   └── NavButton × 4 (receives: label, isActive)\n│\n├── HomePage\n│   ├── ConceptCard × 5 (receives: title, level, children)\n│   └── CounterDemo (has its own local state)\n│\n├── TaskPage\n│   ├── TaskForm (receives: onAddTask function)\n│   └── TaskList (receives: tasks array)\n│       └── TaskItem × N (receives: task, onDelete, onToggle)\n│\n└── ThemeProvider (provides: theme, colors to ALL above)`}\n        </pre>\n      </ConceptCard>\n\n      {/* ==================== SECTION 6: HOOKS OVERVIEW ==================== */}\n      <ConceptCard title=\"🪝 React Hooks — Quick Reference\" level=\"INTERMEDIATE\">\n        {[\n          { hook: \"useState()\",      use: \"Store local state (counter, form values, toggles)\" },\n          { hook: \"useEffect()\",     use: \"Side effects (API calls, timers, localStorage)\" },\n          { hook: \"useContext()\",    use: \"Read from Context (global state)\" },\n          { hook: \"useRef()\",        use: \"Access DOM elements directly (like document.getElementById)\" },\n          { hook: \"useMemo()\",       use: \"Cache expensive calculations (performance)\" },\n          { hook: \"useCallback()\",   use: \"Cache functions to prevent re-renders (performance)\" },\n          { hook: \"useReducer()\",    use: \"Complex state logic (alternative to useState)\" },\n          { hook: \"custom hooks\",    use: \"Extract reusable stateful logic into functions\" },\n        ].map((item, index) => (\n          <div key={index} style={{\n            display: \"flex\",\n            gap: \"16px\",\n            padding: \"8px 0\",\n            borderBottom: `1px solid ${colors.border}`,\n            fontSize: \"13px\",\n          }}>\n            <code style={{\n              color: colors.accent,\n              minWidth: \"140px\",\n              fontFamily: \"monospace\",\n            }}>\n              {item.hook}\n            </code>\n            <span style={{ color: colors.textMuted }}>{item.use}</span>\n          </div>\n        ))}\n      </ConceptCard>\n\n      {/* NEXT PAGE CTA */}\n      <div style={{\n        textAlign: \"center\",\n        padding: \"24px\",\n        backgroundColor: colors.card,\n        borderRadius: \"12px\",\n        border: `1px dashed ${colors.accent}`,\n        marginTop: \"24px\",\n      }}>\n        <p style={{ color: colors.textMuted, marginBottom: \"8px\" }}>\n          Ready to practice? Go to the next section:\n        </p>\n        <p style={{ color: colors.accent, fontSize: \"18px\", fontWeight: \"bold\" }}>\n          ✅ Tasks Page → Learn State Management & Events\n        </p>\n      </div>\n\n    </div>\n  );\n}\n\nexport default HomePage;\n\n```",
        "phase": "Build",
        "order": 12
      },
      {
        "title": "React Command Center",
        "sub": "Commands to create, run, build, test, and deploy React",
        "phase": "Build",
        "generated": true,
        "content": "## React Command Center\n\nUse these commands whenever you build a React project.\n\n### How to use these commands\n\nUse the **create** command once when starting a new app. Use **dev** every day while coding. Use **build** before deploying or checking if production compilation works. If a command fails, read the error from the first red line upward and confirm you are inside the React project folder that contains `package.json`.\n\n### Check machine\n\n```bash\nnode --version\nnpm --version\n```\n\n### Create React project with Vite\n\n```bash\nnpm create vite@latest my-react-app -- --template react\ncd my-react-app\nnpm install\nnpm run dev\n```\n\nLocal URL is usually:\n\n```text\nhttp://localhost:5173/\n```\n\n### Daily React workflow\n\n```bash\nnpm install          # install dependencies after cloning\nnpm run dev          # start development server\nnpm run build        # create production build\nnpm run preview      # preview production build locally\n```\n\n### Install common packages\n\n```bash\nnpm install react-router-dom\nnpm install axios\nnpm install @tanstack/react-query\nnpm install zustand\n```\n\n### Environment variables in Vite\n\n```bash\n# .env\nVITE_API_URL=http://127.0.0.1:8000\n```\n\nUse in code:\n\n```javascript\nconst API_URL = import.meta.env.VITE_API_URL;\n```\n\n### Build output\n\n```bash\nnpm run build\n```\n\nVite creates:\n\n```text\ndist/\n```\n\n### Deploy build settings\n\nVercel/Render static site:\n\n```text\nBuild command: npm run build\nPublish directory: dist\n```\n\nCreate React App uses:\n\n```text\nBuild command: npm run build\nPublish directory: build\n```",
        "order": 13
      },
      {
        "title": "State lab",
        "sub": "React-learn archive · src/pages/TaskPage.jsx",
        "content": "## State lab: arrays, events, filters, derived state\n\nThis section preserves the original source from `src/pages/TaskPage.jsx` so the lesson stays connected to the working example from the archive.\n\n\n\n```jsx\n// ============================================================\n// 📁 pages/TaskPage.jsx\n// ============================================================\n// 🟡 INTERMEDIATE: Task Manager — Real-World State Management\n//\n// CONCEPTS COVERED:\n// ✅ useState with arrays (adding, removing, updating items)\n// ✅ Controlled inputs (form state)\n// ✅ Event handlers (onChange, onSubmit, onClick)\n// ✅ Lifting state up (child communicates to parent)\n// ✅ Array methods: filter, map, find\n// ✅ Spread operator for immutable updates\n// ✅ Unique IDs with Date.now()\n// ✅ Conditional rendering based on array length\n// ============================================================\n\nimport { useState } from \"react\";\nimport { useTheme } from \"../context/ThemeContext\";\n\n// ============================================================\n// 🟡 INTERMEDIATE: TaskForm Component\n//\n// This component handles the ADD TASK form.\n// Notice: it does NOT store the tasks array itself.\n// It only handles the input field and calls onAddTask when submitted.\n//\n// This is called \"LIFTING STATE UP\" — the tasks array lives in\n// the PARENT (TaskPage) and TaskForm just sends new tasks UP.\n// ============================================================\nfunction TaskForm({ onAddTask }) {\n  const { colors } = useTheme();\n\n  // ============================================================\n  // 🔰 BASIC: Controlled Input\n  // In React, form inputs are \"controlled\" — meaning their value\n  // is stored in state and updated on every keystroke.\n  //\n  // Uncontrolled (old/bad): input stores its own value in DOM\n  // Controlled (React way): state stores the value, input displays it\n  //\n  // Django equivalent: request.POST.get('text') — but real-time\n  // ============================================================\n  const [text, setText] = useState(\"\");         // task text\n  const [priority, setPriority] = useState(\"medium\"); // priority level\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Form Submit Handler\n  //\n  // Steps:\n  // 1. Prevent default browser form submission (page reload)\n  // 2. Validate input (don't add empty tasks)\n  // 3. Create new task object\n  // 4. Call parent's function to add it (lifting state up)\n  // 5. Reset form fields\n  // ============================================================\n  const handleSubmit = (e) => {\n    // e.preventDefault() — same as Django's form handling!\n    // Without this, the browser would reload the page on submit\n    e.preventDefault();\n\n    // Validation: trim() removes whitespace, check if empty\n    if (!text.trim()) return;  // Early return pattern — stop if empty\n\n    // Create the new task object\n    // Date.now() gives a unique timestamp as ID (simple approach)\n    // In production, you'd use uuid library or backend-generated ID\n    const newTask = {\n      id: Date.now(),             // unique ID (timestamp)\n      text: text.trim(),          // the task text (cleaned)\n      priority: priority,         // \"low\", \"medium\", or \"high\"\n      completed: false,           // default: not completed\n      createdAt: new Date().toLocaleDateString(\"en-IN\"), // formatted date\n    };\n\n    // 🟡 INTERMEDIATE: Calling parent's function (Lifting State Up)\n    // We DON'T store tasks here — we send it UP to TaskPage\n    // TaskPage has the tasks array and manages it\n    onAddTask(newTask);\n\n    // Reset the form after submission\n    setText(\"\");\n    setPriority(\"medium\");\n  };\n\n  return (\n    <form onSubmit={handleSubmit} style={{\n      backgroundColor: colors.card,\n      border: `1px solid ${colors.border}`,\n      borderRadius: \"12px\",\n      padding: \"20px\",\n      marginBottom: \"24px\",\n    }}>\n      <h3 style={{ color: colors.accent, marginTop: 0 }}>➕ Add New Task</h3>\n\n      {/* \n        🔰 BASIC: Controlled Text Input\n        value={text} — input displays whatever is in state\n        onChange={e => setText(e.target.value)} — updates state on every keystroke\n        \n        Django equivalent: <input type=\"text\" name=\"text\" value=\"{{ text }}\">\n        but in React it's LIVE (no form submit needed to see the value)\n      */}\n      <div style={{ display: \"flex\", gap: \"12px\", flexWrap: \"wrap\" }}>\n        <input\n          type=\"text\"\n          value={text}                                      // controlled: value from state\n          onChange={(e) => setText(e.target.value)}         // update state on change\n          placeholder=\"What needs to be done?\"\n          style={{\n            flex: 1,\n            padding: \"10px 14px\",\n            borderRadius: \"8px\",\n            border: `1px solid ${colors.border}`,\n            backgroundColor: colors.surface,\n            color: colors.text,\n            fontSize: \"14px\",\n            fontFamily: \"'Courier New', monospace\",\n            minWidth: \"200px\",\n          }}\n        />\n\n        {/* \n          🔰 BASIC: Controlled Select (Dropdown)\n          Same pattern as input — value from state, onChange updates state\n        */}\n        <select\n          value={priority}\n          onChange={(e) => setPriority(e.target.value)}\n          style={{\n            padding: \"10px 14px\",\n            borderRadius: \"8px\",\n            border: `1px solid ${colors.border}`,\n            backgroundColor: colors.surface,\n            color: colors.text,\n            fontSize: \"14px\",\n            fontFamily: \"'Courier New', monospace\",\n          }}\n        >\n          <option value=\"low\">🟢 Low Priority</option>\n          <option value=\"medium\">🟡 Medium Priority</option>\n          <option value=\"high\">🔴 High Priority</option>\n        </select>\n\n        <button\n          type=\"submit\"\n          style={{\n            backgroundColor: colors.accent,\n            color: \"#fff\",\n            border: \"none\",\n            padding: \"10px 20px\",\n            borderRadius: \"8px\",\n            cursor: \"pointer\",\n            fontWeight: \"bold\",\n            fontSize: \"14px\",\n            fontFamily: \"'Courier New', monospace\",\n          }}\n        >\n          Add Task\n        </button>\n      </div>\n\n      {/* \n        🔰 BASIC: Live preview of typed text using state\n        This proves the input IS controlled — state updates instantly\n      */}\n      {text && (\n        <p style={{ color: colors.textMuted, fontSize: \"12px\", marginBottom: 0, marginTop: \"8px\" }}>\n          Preview: <em>\"{text}\"</em> — {priority} priority\n        </p>\n      )}\n    </form>\n  );\n}\n\n// ============================================================\n// 🔰 BASIC: TaskItem Component\n// Represents a single task in the list.\n// Receives task data and handler functions as props.\n// ============================================================\nfunction TaskItem({ task, onToggle, onDelete }) {\n  const { colors } = useTheme();\n\n  const priorityColors = {\n    low: colors.success,\n    medium: colors.warning,\n    high: colors.danger,\n  };\n\n  return (\n    <div style={{\n      display: \"flex\",\n      alignItems: \"center\",\n      gap: \"12px\",\n      padding: \"14px 16px\",\n      backgroundColor: colors.card,\n      border: `1px solid ${colors.border}`,\n      borderLeft: `4px solid ${priorityColors[task.priority]}`,\n      borderRadius: \"8px\",\n      marginBottom: \"8px\",\n      // Dim completed tasks\n      opacity: task.completed ? 0.6 : 1,\n      transition: \"all 0.2s ease\",\n    }}>\n\n      {/* Checkbox to toggle completed */}\n      <input\n        type=\"checkbox\"\n        checked={task.completed}\n        // 🟡 INTERMEDIATE: Calling parent's function with task.id\n        // onToggle is passed from TaskPage — it knows how to update the array\n        onChange={() => onToggle(task.id)}\n        style={{ width: \"18px\", height: \"18px\", cursor: \"pointer\" }}\n      />\n\n      {/* Task info */}\n      <div style={{ flex: 1 }}>\n        <span style={{\n          color: colors.text,\n          fontSize: \"15px\",\n          // Strikethrough if completed\n          textDecoration: task.completed ? \"line-through\" : \"none\",\n        }}>\n          {task.text}\n        </span>\n        <div style={{ fontSize: \"11px\", color: colors.textMuted, marginTop: \"2px\" }}>\n          {task.createdAt} · {task.priority} priority\n        </div>\n      </div>\n\n      {/* Priority badge */}\n      <span style={{\n        color: priorityColors[task.priority],\n        fontSize: \"11px\",\n        fontWeight: \"bold\",\n        border: `1px solid ${priorityColors[task.priority]}`,\n        padding: \"2px 8px\",\n        borderRadius: \"20px\",\n      }}>\n        {task.priority.toUpperCase()}\n      </span>\n\n      {/* Delete button */}\n      <button\n        onClick={() => onDelete(task.id)}\n        style={{\n          background: colors.danger + \"22\",\n          color: colors.danger,\n          border: `1px solid ${colors.danger}`,\n          borderRadius: \"6px\",\n          padding: \"4px 10px\",\n          cursor: \"pointer\",\n          fontSize: \"13px\",\n          fontFamily: \"'Courier New', monospace\",\n        }}\n      >\n        🗑️\n      </button>\n    </div>\n  );\n}\n\n// ============================================================\n// MAIN TaskPage COMPONENT\n// ============================================================\nfunction TaskPage() {\n  const { colors } = useTheme();\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: useState with Array\n  // The tasks array is the \"single source of truth\".\n  // ALL changes to tasks happen here and flow DOWN to children.\n  // ============================================================\n  const [tasks, setTasks] = useState([\n    // Initial demo tasks\n    { id: 1, text: \"Learn React useState hook\", priority: \"high\", completed: true, createdAt: \"01/05/2026\" },\n    { id: 2, text: \"Build a full-stack app with Django + React\", priority: \"high\", completed: false, createdAt: \"01/05/2026\" },\n    { id: 3, text: \"Practice JavaScript .map() and .filter()\", priority: \"medium\", completed: false, createdAt: \"01/05/2026\" },\n  ]);\n\n  // Filter state for showing different task subsets\n  const [filter, setFilter] = useState(\"all\"); // \"all\", \"active\", \"completed\"\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Adding an Item to State Array\n  //\n  // ⚠️ NEVER mutate state directly:\n  //   tasks.push(newTask) ❌ — React won't detect this change!\n  //\n  // ✅ ALWAYS create a NEW array using spread operator:\n  //   setTasks([...tasks, newTask]) ✅ — React sees a new array and re-renders\n  //\n  // Django equivalent: you don't modify the queryset in-place,\n  // you save a new object to the database.\n  // ============================================================\n  const addTask = (newTask) => {\n    setTasks([...tasks, newTask]);  // spread existing tasks + add new one\n  };\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Removing an Item from State Array\n  //\n  // .filter() creates a NEW array excluding the item with matching id.\n  // Django equivalent: Model.objects.exclude(id=task_id)\n  // ============================================================\n  const deleteTask = (taskId) => {\n    setTasks(tasks.filter(task => task.id !== taskId));\n  };\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Updating an Item in State Array\n  //\n  // .map() creates a NEW array. For the matching item, we return\n  // a modified version using spread. For others, return unchanged.\n  //\n  // This is the IMMUTABLE UPDATE pattern — very important in React!\n  // ============================================================\n  const toggleTask = (taskId) => {\n    setTasks(tasks.map(task =>\n      task.id === taskId\n        ? { ...task, completed: !task.completed }  // spread + override completed\n        : task                                       // return unchanged\n    ));\n  };\n\n  // Clear all completed tasks\n  const clearCompleted = () => {\n    setTasks(tasks.filter(task => !task.completed));\n  };\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Derived State (computed values)\n  // Don't store these in useState — derive them from existing state!\n  // Django equivalent: properties/annotations on a queryset\n  // ============================================================\n  const completedCount = tasks.filter(t => t.completed).length;\n  const activeCount    = tasks.filter(t => !t.completed).length;\n  const totalCount     = tasks.length;\n\n  // Filtered tasks based on current filter selection\n  const filteredTasks = tasks.filter(task => {\n    if (filter === \"active\")    return !task.completed;\n    if (filter === \"completed\") return task.completed;\n    return true; // \"all\"\n  });\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Sorting — creates a NEW sorted array\n  // .sort() on a copy (using spread) to avoid mutating state\n  // ============================================================\n  const priorityOrder = { high: 0, medium: 1, low: 2 };\n  const sortedFilteredTasks = [...filteredTasks].sort(\n    (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]\n  );\n\n  return (\n    <div style={{ maxWidth: \"800px\", margin: \"0 auto\", padding: \"32px 24px\" }}>\n\n      {/* PAGE HEADER */}\n      <div style={{ textAlign: \"center\", marginBottom: \"32px\" }}>\n        <h1 style={{ fontSize: \"32px\", color: colors.accent, letterSpacing: \"2px\" }}>\n          ✅ TASK MANAGER\n        </h1>\n        <p style={{ color: colors.textMuted }}>\n          Learn state management: adding, removing, and updating items in arrays\n        </p>\n      </div>\n\n      {/* STATS BAR */}\n      <div style={{\n        display: \"flex\",\n        gap: \"12px\",\n        marginBottom: \"24px\",\n        justifyContent: \"center\",\n        flexWrap: \"wrap\",\n      }}>\n        {[\n          { label: \"Total\", value: totalCount, color: colors.accent },\n          { label: \"Active\", value: activeCount, color: colors.warning },\n          { label: \"Done\", value: completedCount, color: colors.success },\n        ].map(stat => (\n          <div key={stat.label} style={{\n            backgroundColor: colors.card,\n            border: `1px solid ${stat.color}`,\n            borderRadius: \"8px\",\n            padding: \"10px 20px\",\n            textAlign: \"center\",\n            minWidth: \"80px\",\n          }}>\n            <div style={{ fontSize: \"24px\", color: stat.color, fontWeight: \"bold\" }}>{stat.value}</div>\n            <div style={{ fontSize: \"12px\", color: colors.textMuted }}>{stat.label}</div>\n          </div>\n        ))}\n      </div>\n\n      {/* ADD TASK FORM */}\n      {/* \n        🟡 INTERMEDIATE: Passing a function as prop (Lifting State Up)\n        onAddTask={addTask} — child form calls this when task is submitted\n        The actual state update happens HERE in the parent\n      */}\n      <TaskForm onAddTask={addTask} />\n\n      {/* FILTER BUTTONS */}\n      <div style={{ display: \"flex\", gap: \"8px\", marginBottom: \"16px\", flexWrap: \"wrap\" }}>\n        {[\"all\", \"active\", \"completed\"].map(f => (\n          <button\n            key={f}\n            onClick={() => setFilter(f)}\n            style={{\n              padding: \"6px 16px\",\n              borderRadius: \"20px\",\n              border: `1px solid ${colors.border}`,\n              cursor: \"pointer\",\n              fontFamily: \"'Courier New', monospace\",\n              fontSize: \"13px\",\n              backgroundColor: filter === f ? colors.accent : colors.card,\n              color: filter === f ? \"#fff\" : colors.textMuted,\n            }}\n          >\n            {f.charAt(0).toUpperCase() + f.slice(1)}\n          </button>\n        ))}\n\n        {completedCount > 0 && (\n          <button\n            onClick={clearCompleted}\n            style={{\n              padding: \"6px 16px\",\n              borderRadius: \"20px\",\n              border: `1px solid ${colors.danger}`,\n              cursor: \"pointer\",\n              fontFamily: \"'Courier New', monospace\",\n              fontSize: \"13px\",\n              backgroundColor: colors.danger + \"22\",\n              color: colors.danger,\n              marginLeft: \"auto\",\n            }}\n          >\n            🗑️ Clear Completed\n          </button>\n        )}\n      </div>\n\n      {/* TASK LIST */}\n      {/* \n        🔰 BASIC: Conditional Rendering — show empty state if no tasks\n      */}\n      {sortedFilteredTasks.length === 0 ? (\n        <div style={{\n          textAlign: \"center\",\n          padding: \"40px\",\n          color: colors.textMuted,\n          backgroundColor: colors.card,\n          borderRadius: \"12px\",\n          border: `1px dashed ${colors.border}`,\n        }}>\n          {filter === \"all\" ? \"🎉 No tasks yet! Add one above.\" : `No ${filter} tasks.`}\n        </div>\n      ) : (\n        // 🔰 BASIC: .map() to render the task list\n        sortedFilteredTasks.map(task => (\n          <TaskItem\n            key={task.id}\n            task={task}          // pass task data as prop\n            onToggle={toggleTask} // pass toggle function as prop\n            onDelete={deleteTask} // pass delete function as prop\n          />\n        ))\n      )}\n\n      {/* CONCEPT SUMMARY BOX */}\n      <div style={{\n        backgroundColor: colors.card,\n        border: `1px solid ${colors.accent}`,\n        borderRadius: \"12px\",\n        padding: \"20px\",\n        marginTop: \"32px\",\n      }}>\n        <h3 style={{ color: colors.accent, marginTop: 0 }}>📚 What You Just Learned</h3>\n        {[\n          \"useState with arrays — never mutate, always create new array\",\n          \"Spread operator: [...array, newItem] to add items\",\n          \".filter() to remove items or filter a list\",\n          \".map() to update a specific item in the array\",\n          \"Lifting state up — child components call parent's functions\",\n          \"Controlled inputs — form values stored in useState\",\n          \"Derived state — computing values from existing state\",\n        ].map((item, i) => (\n          <div key={i} style={{ color: colors.textMuted, padding: \"4px 0\", fontSize: \"14px\" }}>\n            ✅ {item}\n          </div>\n        ))}\n      </div>\n\n    </div>\n  );\n}\n\nexport default TaskPage;\n\n```",
        "phase": "Production",
        "order": 14
      },
      {
        "title": "Forms lab",
        "sub": "React-learn archive · src/pages/ProfilePage.jsx",
        "content": "## Forms lab: controlled inputs, validation, useRef\n\nThis section preserves the original source from `src/pages/ProfilePage.jsx` so the lesson stays connected to the working example from the archive.\n\n\n\n```jsx\n// ============================================================\n// 📁 pages/ProfilePage.jsx\n// ============================================================\n// 🟡 INTERMEDIATE → 🔴 ADVANCED: Forms, Validation & useRef\n//\n// CONCEPTS COVERED:\n// ✅ Complex form state (object in useState)\n// ✅ Single onChange handler for all fields\n// ✅ Form validation with error messages\n// ✅ useRef — accessing DOM elements directly\n// ✅ Controlled vs Uncontrolled inputs\n// ✅ Object spread for immutable updates\n// ✅ Computed error state\n// ============================================================\n\nimport { useState, useRef } from \"react\";\nimport { useTheme } from \"../context/ThemeContext\";\n\nfunction ProfilePage() {\n  const { colors } = useTheme();\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Form State as Object\n  //\n  // Instead of creating separate useState for each field:\n  //   const [name, setName] = useState(\"\")      ← BAD for many fields\n  //   const [email, setEmail] = useState(\"\")\n  //   const [bio, setBio] = useState(\"\")\n  //\n  // Store ALL form fields in ONE object:\n  //   const [formData, setFormData] = useState({...}) ← GOOD\n  //\n  // Django equivalent: A Django Form class with multiple fields\n  // ============================================================\n  const [formData, setFormData] = useState({\n    name: \"\",\n    email: \"\",\n    role: \"frontend\",\n    bio: \"\",\n    experience: \"1\",\n    skills: [],\n    newsletter: false,\n  });\n\n  // Errors object — one error per field (like Django form.errors)\n  const [errors, setErrors] = useState({});\n\n  // Submission state\n  const [submitted, setSubmitted] = useState(false);\n  const [isEditing, setIsEditing] = useState(true);\n\n  // ============================================================\n  // 🔴 ADVANCED: useRef Hook\n  //\n  // useRef gives you a direct reference to a DOM element.\n  // It does NOT trigger re-renders when changed (unlike useState).\n  //\n  // Common uses:\n  // 1. Focus an input programmatically\n  // 2. Store a value without re-rendering (like a mutable variable)\n  // 3. Access DOM element properties (scrollHeight, offsetWidth, etc.)\n  //\n  // Django equivalent: Like using JavaScript to directly manipulate\n  // an element after the template renders.\n  // ============================================================\n  const nameInputRef = useRef(null);  // will point to the name <input>\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Single onChange Handler for All Fields\n  //\n  // e.target.name → which field changed (matches name=\"...\" on input)\n  // e.target.value → the new value\n  //\n  // We use computed property names: { [fieldName]: newValue }\n  // to update only the changed field while keeping others intact.\n  //\n  // Django equivalent: form.cleaned_data[field_name] = new_value\n  // ============================================================\n  const handleChange = (e) => {\n    const { name, value, type, checked } = e.target;\n\n    setFormData(prev => ({\n      ...prev,  // spread existing form data (keep all other fields)\n\n      // For checkboxes: use \"checked\" boolean\n      // For everything else: use \"value\" string\n      [name]: type === \"checkbox\" ? checked : value,\n    }));\n\n    // Clear the error for this field as user types\n    // User-friendly: errors disappear as they fix them\n    if (errors[name]) {\n      setErrors(prev => ({ ...prev, [name]: \"\" }));\n    }\n  };\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Multi-checkbox handling for skills array\n  //\n  // Unlike a regular checkbox (boolean), skill checkboxes ADD/REMOVE\n  // items from an array.\n  // ============================================================\n  const handleSkillChange = (skill) => {\n    setFormData(prev => ({\n      ...prev,\n      skills: prev.skills.includes(skill)\n        ? prev.skills.filter(s => s !== skill)  // remove if already selected\n        : [...prev.skills, skill],               // add if not selected\n    }));\n  };\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Form Validation\n  //\n  // Like Django's form.is_valid() — checks all fields and returns\n  // errors for each invalid field.\n  //\n  // Returns true if valid, false if there are errors.\n  // ============================================================\n  const validate = () => {\n    const newErrors = {};\n\n    // Name validation\n    if (!formData.name.trim()) {\n      newErrors.name = \"Name is required\";\n    } else if (formData.name.trim().length < 2) {\n      newErrors.name = \"Name must be at least 2 characters\";\n    }\n\n    // Email validation using regex\n    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    if (!formData.email.trim()) {\n      newErrors.email = \"Email is required\";\n    } else if (!emailRegex.test(formData.email)) {\n      newErrors.email = \"Please enter a valid email address\";\n    }\n\n    // Bio validation\n    if (formData.bio && formData.bio.length > 200) {\n      newErrors.bio = \"Bio must be under 200 characters\";\n    }\n\n    // Skills validation\n    if (formData.skills.length === 0) {\n      newErrors.skills = \"Please select at least one skill\";\n    }\n\n    setErrors(newErrors);\n\n    // Object.keys().length === 0 means no errors (empty object)\n    return Object.keys(newErrors).length === 0;\n  };\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Form Submit Handler\n  // ============================================================\n  const handleSubmit = (e) => {\n    e.preventDefault();  // prevent page reload\n\n    // Run validation — stop if invalid\n    if (!validate()) {\n      // 🔴 ADVANCED: useRef — focus the first error field programmatically\n      // nameInputRef.current is the actual DOM <input> element\n      nameInputRef.current?.focus();  // ?. = optional chaining (won't error if null)\n      return;\n    }\n\n    // If valid, show success state\n    setSubmitted(true);\n    setIsEditing(false);\n  };\n\n  const handleEdit = () => {\n    setIsEditing(true);\n    setSubmitted(false);\n  };\n\n  // Available skills for checkboxes\n  const availableSkills = [\"Python\", \"Django\", \"JavaScript\", \"React\", \"HTML/CSS\", \"REST API\", \"SQL\", \"Git\"];\n  const roles = [\n    { value: \"frontend\", label: \"Frontend Developer\" },\n    { value: \"backend\",  label: \"Backend Developer\" },\n    { value: \"fullstack\", label: \"Full Stack Developer\" },\n    { value: \"devops\",   label: \"DevOps Engineer\" },\n  ];\n\n  // Shared input style — reusable function\n  const inputStyle = (hasError) => ({\n    width: \"100%\",\n    padding: \"10px 14px\",\n    borderRadius: \"8px\",\n    border: `1px solid ${hasError ? colors.danger : colors.border}`,\n    backgroundColor: colors.surface,\n    color: colors.text,\n    fontSize: \"14px\",\n    fontFamily: \"'Courier New', monospace\",\n    boxSizing: \"border-box\",\n    outline: \"none\",\n  });\n\n  // ============================================================\n  // SUCCESS VIEW — shown after valid submission\n  // ============================================================\n  if (!isEditing && submitted) {\n    return (\n      <div style={{ maxWidth: \"600px\", margin: \"40px auto\", padding: \"0 24px\" }}>\n        <div style={{\n          backgroundColor: colors.card,\n          border: `2px solid ${colors.success}`,\n          borderRadius: \"16px\",\n          padding: \"32px\",\n          textAlign: \"center\",\n        }}>\n          <div style={{ fontSize: \"48px\", marginBottom: \"16px\" }}>✅</div>\n          <h2 style={{ color: colors.success }}>Profile Saved!</h2>\n\n          {/* Display the submitted data */}\n          <div style={{ textAlign: \"left\", margin: \"24px 0\" }}>\n            {[\n              { label: \"Name\", value: formData.name },\n              { label: \"Email\", value: formData.email },\n              { label: \"Role\", value: formData.role },\n              { label: \"Experience\", value: `${formData.experience} year(s)` },\n              { label: \"Skills\", value: formData.skills.join(\", \") },\n              { label: \"Newsletter\", value: formData.newsletter ? \"Yes\" : \"No\" },\n            ].map(item => (\n              <div key={item.label} style={{\n                display: \"flex\",\n                gap: \"12px\",\n                padding: \"8px 0\",\n                borderBottom: `1px solid ${colors.border}`,\n                fontSize: \"14px\",\n              }}>\n                <span style={{ color: colors.textMuted, minWidth: \"100px\" }}>{item.label}:</span>\n                <span style={{ color: colors.text, fontWeight: \"bold\" }}>{item.value}</span>\n              </div>\n            ))}\n            {formData.bio && (\n              <div style={{ padding: \"8px 0\", fontSize: \"14px\" }}>\n                <span style={{ color: colors.textMuted }}>Bio: </span>\n                <span style={{ color: colors.text }}>{formData.bio}</span>\n              </div>\n            )}\n          </div>\n\n          <button onClick={handleEdit} style={{\n            backgroundColor: colors.accent,\n            color: \"#fff\",\n            border: \"none\",\n            padding: \"10px 24px\",\n            borderRadius: \"8px\",\n            cursor: \"pointer\",\n            fontFamily: \"'Courier New', monospace\",\n            fontWeight: \"bold\",\n          }}>\n            ✏️ Edit Profile\n          </button>\n        </div>\n      </div>\n    );\n  }\n\n  // ============================================================\n  // MAIN FORM VIEW\n  // ============================================================\n  return (\n    <div style={{ maxWidth: \"700px\", margin: \"0 auto\", padding: \"32px 24px\" }}>\n\n      <div style={{ textAlign: \"center\", marginBottom: \"32px\" }}>\n        <h1 style={{ fontSize: \"32px\", color: colors.accent, letterSpacing: \"2px\" }}>\n          👤 DEVELOPER PROFILE\n        </h1>\n        <p style={{ color: colors.textMuted }}>\n          Learn forms, validation, useRef, and controlled inputs\n        </p>\n      </div>\n\n      <form onSubmit={handleSubmit} style={{\n        backgroundColor: colors.card,\n        border: `1px solid ${colors.border}`,\n        borderRadius: \"16px\",\n        padding: \"28px\",\n      }}>\n\n        {/* ===== NAME FIELD ===== */}\n        <div style={{ marginBottom: \"20px\" }}>\n          <label style={{ display: \"block\", color: colors.text, marginBottom: \"6px\", fontSize: \"14px\" }}>\n            Full Name *\n          </label>\n          <input\n            ref={nameInputRef}           // 🔴 ADVANCED: useRef attached here\n            type=\"text\"\n            name=\"name\"                  // name must match formData key\n            value={formData.name}        // controlled: value from state\n            onChange={handleChange}      // single handler for all fields\n            placeholder=\"e.g. Rahul Sharma\"\n            style={inputStyle(errors.name)}\n          />\n          {/* Error message — shown only when errors.name exists */}\n          {errors.name && (\n            <p style={{ color: colors.danger, fontSize: \"12px\", margin: \"4px 0 0\" }}>\n              ⚠️ {errors.name}\n            </p>\n          )}\n        </div>\n\n        {/* ===== EMAIL FIELD ===== */}\n        <div style={{ marginBottom: \"20px\" }}>\n          <label style={{ display: \"block\", color: colors.text, marginBottom: \"6px\", fontSize: \"14px\" }}>\n            Email Address *\n          </label>\n          <input\n            type=\"email\"\n            name=\"email\"\n            value={formData.email}\n            onChange={handleChange}\n            placeholder=\"e.g. rahul@example.com\"\n            style={inputStyle(errors.email)}\n          />\n          {errors.email && (\n            <p style={{ color: colors.danger, fontSize: \"12px\", margin: \"4px 0 0\" }}>\n              ⚠️ {errors.email}\n            </p>\n          )}\n        </div>\n\n        {/* ===== ROLE + EXPERIENCE (2 columns) ===== */}\n        <div style={{ display: \"grid\", gridTemplateColumns: \"1fr 1fr\", gap: \"16px\", marginBottom: \"20px\" }}>\n          <div>\n            <label style={{ display: \"block\", color: colors.text, marginBottom: \"6px\", fontSize: \"14px\" }}>\n              Role\n            </label>\n            <select name=\"role\" value={formData.role} onChange={handleChange} style={inputStyle(false)}>\n              {roles.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}\n            </select>\n          </div>\n\n          <div>\n            <label style={{ display: \"block\", color: colors.text, marginBottom: \"6px\", fontSize: \"14px\" }}>\n              Years of Experience\n            </label>\n            {/* \n              🟡 INTERMEDIATE: Range input\n              Works exactly like text input — controlled with value + onChange\n            */}\n            <input\n              type=\"range\"\n              name=\"experience\"\n              min=\"0\" max=\"10\"\n              value={formData.experience}\n              onChange={handleChange}\n              style={{ width: \"100%\", marginTop: \"10px\" }}\n            />\n            <div style={{ textAlign: \"center\", color: colors.accent, fontWeight: \"bold\" }}>\n              {formData.experience} year{formData.experience !== \"1\" ? \"s\" : \"\"}\n            </div>\n          </div>\n        </div>\n\n        {/* ===== SKILLS (Multiple Checkboxes) ===== */}\n        <div style={{ marginBottom: \"20px\" }}>\n          <label style={{ display: \"block\", color: colors.text, marginBottom: \"10px\", fontSize: \"14px\" }}>\n            Skills * (select all that apply)\n          </label>\n          <div style={{ display: \"flex\", flexWrap: \"wrap\", gap: \"8px\" }}>\n            {availableSkills.map(skill => {\n              const isSelected = formData.skills.includes(skill);\n              return (\n                <label\n                  key={skill}\n                  style={{\n                    display: \"flex\",\n                    alignItems: \"center\",\n                    gap: \"6px\",\n                    padding: \"6px 12px\",\n                    borderRadius: \"20px\",\n                    border: `1px solid ${isSelected ? colors.accent : colors.border}`,\n                    backgroundColor: isSelected ? colors.accent + \"22\" : colors.surface,\n                    color: isSelected ? colors.accent : colors.textMuted,\n                    cursor: \"pointer\",\n                    fontSize: \"13px\",\n                    transition: \"all 0.2s\",\n                  }}\n                >\n                  <input\n                    type=\"checkbox\"\n                    checked={isSelected}\n                    onChange={() => handleSkillChange(skill)}\n                    style={{ display: \"none\" }}  // hidden — the label acts as the clickable area\n                  />\n                  {isSelected ? \"✅\" : \"○\"} {skill}\n                </label>\n              );\n            })}\n          </div>\n          {errors.skills && (\n            <p style={{ color: colors.danger, fontSize: \"12px\", margin: \"8px 0 0\" }}>\n              ⚠️ {errors.skills}\n            </p>\n          )}\n        </div>\n\n        {/* ===== BIO TEXTAREA ===== */}\n        <div style={{ marginBottom: \"20px\" }}>\n          <label style={{ display: \"block\", color: colors.text, marginBottom: \"6px\", fontSize: \"14px\" }}>\n            Bio (optional, max 200 chars)\n          </label>\n          <textarea\n            name=\"bio\"\n            value={formData.bio}\n            onChange={handleChange}\n            placeholder=\"Tell us about yourself as a developer...\"\n            rows={3}\n            style={{ ...inputStyle(errors.bio), resize: \"vertical\" }}\n          />\n          {/* Character counter */}\n          <div style={{ textAlign: \"right\", fontSize: \"11px\", color: formData.bio.length > 180 ? colors.warning : colors.textMuted }}>\n            {formData.bio.length}/200\n          </div>\n          {errors.bio && (\n            <p style={{ color: colors.danger, fontSize: \"12px\", margin: \"4px 0 0\" }}>\n              ⚠️ {errors.bio}\n            </p>\n          )}\n        </div>\n\n        {/* ===== NEWSLETTER CHECKBOX ===== */}\n        <div style={{ marginBottom: \"24px\" }}>\n          <label style={{ display: \"flex\", alignItems: \"center\", gap: \"10px\", cursor: \"pointer\", color: colors.textMuted, fontSize: \"14px\" }}>\n            <input\n              type=\"checkbox\"\n              name=\"newsletter\"\n              checked={formData.newsletter}\n              onChange={handleChange}\n              style={{ width: \"16px\", height: \"16px\" }}\n            />\n            Subscribe to React & JavaScript newsletter\n          </label>\n        </div>\n\n        {/* ===== SUBMIT BUTTON ===== */}\n        <button type=\"submit\" style={{\n          width: \"100%\",\n          backgroundColor: colors.accent,\n          color: \"#fff\",\n          border: \"none\",\n          padding: \"14px\",\n          borderRadius: \"10px\",\n          cursor: \"pointer\",\n          fontSize: \"16px\",\n          fontWeight: \"bold\",\n          fontFamily: \"'Courier New', monospace\",\n          letterSpacing: \"1px\",\n        }}>\n          💾 Save Profile\n        </button>\n      </form>\n\n      {/* CONCEPT NOTE */}\n      <div style={{\n        backgroundColor: colors.card,\n        border: `1px solid ${colors.border}`,\n        borderRadius: \"12px\",\n        padding: \"20px\",\n        marginTop: \"24px\",\n        fontSize: \"13px\",\n        color: colors.textMuted,\n        lineHeight: \"1.8\",\n      }}>\n        <strong style={{ color: colors.accent }}>🔴 Advanced Concept: useRef</strong>\n        <br />\n        After submitting with errors, notice the name field gets auto-focused.\n        This is done with <code style={{ color: colors.warning }}>nameInputRef.current.focus()</code>.\n        useRef gives direct DOM access without causing re-renders — unlike useState.\n      </div>\n    </div>\n  );\n}\n\nexport default ProfilePage;\n\n```",
        "phase": "Production",
        "order": 15
      },
      {
        "title": "API lab",
        "sub": "React-learn archive · src/pages/ApiFetchPage.jsx",
        "content": "## API lab: useEffect, async fetch, cleanup, custom hook\n\nThis section preserves the original source from `src/pages/ApiFetchPage.jsx` so the lesson stays connected to the working example from the archive.\n\n\n\n```jsx\n// ============================================================\n// 📁 pages/ApiFetchPage.jsx\n// ============================================================\n// 🟡 INTERMEDIATE → 🔴 ADVANCED: API Fetching with useEffect\n//\n// CONCEPTS COVERED:\n// ✅ useEffect — running code after render (side effects)\n// ✅ useEffect dependency array (when to re-run)\n// ✅ async/await inside useEffect\n// ✅ Loading, success, and error states (3-state pattern)\n// ✅ Cleanup function in useEffect (abort fetch on unmount)\n// ✅ Custom hook — extracting reusable logic\n// ✅ Search/filter with debouncing concept\n// ============================================================\n\nimport { useState, useEffect, useCallback } from \"react\";\nimport { useTheme } from \"../context/ThemeContext\";\n\n// ============================================================\n// 🔴 ADVANCED: Custom Hook — useFetch\n//\n// We extract the fetch logic into a REUSABLE custom hook.\n// Any component can now call useFetch(url) to get data.\n//\n// Rules for custom hooks:\n// 1. Must start with \"use\" (e.g., useFetch, useTheme, useAuth)\n// 2. Can call other hooks inside (useState, useEffect, etc.)\n// 3. Returns whatever the component needs\n//\n// Django equivalent: A utility function in utils.py that can\n// be imported and reused across multiple views.\n// ============================================================\nfunction useFetch(url) {\n  // 3-state pattern: EVERY async operation needs these 3 states\n  const [data, setData]       = useState(null);    // the fetched data\n  const [loading, setLoading] = useState(false);   // is it loading?\n  const [error, setError]     = useState(null);    // any error message?\n\n  useEffect(() => {\n    // If no URL provided, don't fetch\n    if (!url) return;\n\n    // ============================================================\n    // 🔴 ADVANCED: AbortController — Cleanup in useEffect\n    //\n    // Problem: if user navigates away while fetching, the fetch\n    // continues in background. When it resolves, it tries to\n    // update state of an unmounted component → memory leak + warning!\n    //\n    // Solution: AbortController lets us CANCEL the fetch request.\n    // The cleanup function (return () => {}) runs when:\n    // 1. Component unmounts (navigates away)\n    // 2. URL changes (before running effect again)\n    // ============================================================\n    const controller = new AbortController();\n\n    const fetchData = async () => {\n      setLoading(true);   // show loading spinner\n      setError(null);     // clear previous errors\n      setData(null);      // clear previous data\n\n      try {\n        // fetch with AbortController signal\n        const response = await fetch(url, { signal: controller.signal });\n\n        // Check HTTP status — fetch doesn't throw on 404/500!\n        // You must manually check response.ok\n        if (!response.ok) {\n          throw new Error(`HTTP Error! Status: ${response.status}`);\n        }\n\n        const json = await response.json();\n        setData(json);\n\n      } catch (err) {\n        // Don't set error if we aborted (expected behaviour)\n        if (err.name !== \"AbortError\") {\n          setError(err.message);\n        }\n      } finally {\n        // finally runs whether success or error\n        // Only update loading if not aborted\n        if (!controller.signal.aborted) {\n          setLoading(false);\n        }\n      }\n    };\n\n    fetchData();\n\n    // ✅ Cleanup function — cancels the fetch when component unmounts\n    return () => controller.abort();\n\n  }, [url]); // dependency array: re-run this effect when URL changes\n\n  return { data, loading, error };\n}\n\n// ============================================================\n// UserCard Component — displays one user\n// ============================================================\nfunction UserCard({ user }) {\n  const { colors } = useTheme();\n  const [expanded, setExpanded] = useState(false);\n\n  return (\n    <div\n      onClick={() => setExpanded(!expanded)}\n      style={{\n        backgroundColor: colors.card,\n        border: `1px solid ${colors.border}`,\n        borderRadius: \"12px\",\n        padding: \"16px\",\n        cursor: \"pointer\",\n        transition: \"all 0.2s ease\",\n        borderLeft: `4px solid ${colors.accent}`,\n      }}\n    >\n      {/* Basic info always visible */}\n      <div style={{ display: \"flex\", justifyContent: \"space-between\", alignItems: \"center\" }}>\n        <div>\n          <h3 style={{ margin: 0, color: colors.text, fontSize: \"16px\" }}>\n            {user.name}\n          </h3>\n          <p style={{ margin: \"4px 0 0\", color: colors.accent, fontSize: \"13px\" }}>\n            @{user.username}\n          </p>\n        </div>\n        <div style={{ textAlign: \"right\" }}>\n          <p style={{ margin: 0, color: colors.textMuted, fontSize: \"12px\" }}>\n            {user.company?.name}\n          </p>\n          <span style={{ color: colors.textMuted, fontSize: \"18px\" }}>\n            {expanded ? \"▲\" : \"▼\"}\n          </span>\n        </div>\n      </div>\n\n      {/* Expanded details — conditional rendering */}\n      {expanded && (\n        <div style={{\n          marginTop: \"12px\",\n          paddingTop: \"12px\",\n          borderTop: `1px solid ${colors.border}`,\n          fontSize: \"13px\",\n          color: colors.textMuted,\n          lineHeight: \"1.8\",\n        }}>\n          <div>📧 {user.email}</div>\n          <div>📞 {user.phone}</div>\n          <div>🌐 {user.website}</div>\n          <div>🏙️ {user.address?.city}, {user.address?.zipcode}</div>\n          <div>💼 {user.company?.catchPhrase}</div>\n        </div>\n      )}\n    </div>\n  );\n}\n\n// ============================================================\n// PostCard Component — displays one post\n// ============================================================\nfunction PostCard({ post }) {\n  const { colors } = useTheme();\n\n  return (\n    <div style={{\n      backgroundColor: colors.card,\n      border: `1px solid ${colors.border}`,\n      borderRadius: \"10px\",\n      padding: \"16px\",\n      borderLeft: `4px solid ${colors.success}`,\n    }}>\n      <div style={{\n        display: \"flex\",\n        justifyContent: \"space-between\",\n        marginBottom: \"8px\",\n      }}>\n        <span style={{\n          color: colors.accent,\n          fontSize: \"11px\",\n          fontWeight: \"bold\",\n          backgroundColor: colors.accent + \"22\",\n          padding: \"2px 8px\",\n          borderRadius: \"20px\",\n        }}>\n          POST #{post.id}\n        </span>\n        <span style={{ color: colors.textMuted, fontSize: \"11px\" }}>\n          User ID: {post.userId}\n        </span>\n      </div>\n      <h4 style={{ margin: \"0 0 8px\", color: colors.text, fontSize: \"14px\", textTransform: \"capitalize\" }}>\n        {post.title}\n      </h4>\n      <p style={{ margin: 0, color: colors.textMuted, fontSize: \"13px\", lineHeight: \"1.5\" }}>\n        {post.body}\n      </p>\n    </div>\n  );\n}\n\n// ============================================================\n// MAIN ApiFetchPage COMPONENT\n// ============================================================\nfunction ApiFetchPage() {\n  const { colors } = useTheme();\n\n  // Track which demo is active: \"users\" or \"posts\"\n  const [activeDemo, setActiveDemo] = useState(\"users\");\n\n  // Search filter state\n  const [searchTerm, setSearchTerm] = useState(\"\");\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: useEffect — Runs After Every Render\n  //\n  // useEffect(() => { /* side effect */ }, [dependencies])\n  //\n  // Dependencies array controls WHEN the effect runs:\n  // [] empty     → runs ONCE on mount (like componentDidMount)\n  // [value]      → runs when \"value\" changes\n  // no array     → runs after EVERY render (usually wrong!)\n  //\n  // Django equivalent: code that runs after the view renders,\n  // like signals or post_save hooks.\n  // ============================================================\n\n  // Using our custom useFetch hook!\n  // URL changes when activeDemo changes → triggers new fetch\n  const usersResult = useFetch(\n    activeDemo === \"users\" ? \"https://jsonplaceholder.typicode.com/users\" : null\n  );\n\n  const postsResult = useFetch(\n    activeDemo === \"posts\" ? \"https://jsonplaceholder.typicode.com/posts?_limit=12\" : null\n  );\n\n  // Pick the active result\n  const { data, loading, error } = activeDemo === \"users\" ? usersResult : postsResult;\n\n  // ============================================================\n  // 🟡 INTERMEDIATE: Filtering data client-side\n  //\n  // We derive filteredData from data + searchTerm.\n  // This is computed on every render — no extra useState needed!\n  // ============================================================\n  const filteredData = data ? data.filter(item => {\n    const term = searchTerm.toLowerCase();\n    if (activeDemo === \"users\") {\n      return item.name.toLowerCase().includes(term) ||\n             item.username.toLowerCase().includes(term) ||\n             item.email.toLowerCase().includes(term);\n    } else {\n      return item.title.toLowerCase().includes(term);\n    }\n  }) : [];\n\n  // ============================================================\n  // 🔴 ADVANCED: useCallback\n  //\n  // useCallback memoizes (caches) a function so it's not recreated\n  // on every render. Useful when passing functions to child components\n  // that are wrapped in React.memo (to prevent unnecessary re-renders).\n  //\n  // Without useCallback: new function reference each render\n  // With useCallback: same function reference unless deps change\n  // ============================================================\n  const handleDemoChange = useCallback((demo) => {\n    setActiveDemo(demo);\n    setSearchTerm(\"\"); // clear search when switching demos\n  }, []); // no dependencies — function never changes\n\n  return (\n    <div style={{ maxWidth: \"900px\", margin: \"0 auto\", padding: \"32px 24px\" }}>\n\n      {/* PAGE HEADER */}\n      <div style={{ textAlign: \"center\", marginBottom: \"32px\" }}>\n        <h1 style={{ fontSize: \"32px\", color: colors.accent, letterSpacing: \"2px\" }}>\n          🌐 API DATA FETCHING\n        </h1>\n        <p style={{ color: colors.textMuted }}>\n          Learn useEffect, async/await, loading states, and custom hooks\n        </p>\n      </div>\n\n      {/* ============================================================\n          CONCEPT EXPLAINER BOX — useEffect\n          ============================================================ */}\n      <div style={{\n        backgroundColor: colors.card,\n        border: `1px solid ${colors.accent}`,\n        borderRadius: \"12px\",\n        padding: \"20px\",\n        marginBottom: \"28px\",\n        fontSize: \"13px\",\n        lineHeight: \"1.8\",\n      }}>\n        <h3 style={{ color: colors.accent, marginTop: 0 }}>🪝 useEffect Explained</h3>\n        <pre style={{\n          backgroundColor: colors.surface,\n          padding: \"14px\",\n          borderRadius: \"8px\",\n          overflow: \"auto\",\n          color: colors.text,\n          fontSize: \"12px\",\n        }}>\n{`// useEffect runs AFTER the component renders\n// Perfect for: API calls, timers, event listeners, localStorage\n\nuseEffect(() => {\n  // 1. SIDE EFFECT CODE (runs after render)\n  fetchData();\n\n  // 2. CLEANUP (runs before next effect or unmount)\n  return () => {\n    cancelRequest();  // abort fetch, clear timer, etc.\n  };\n\n}, [dependency]);  // 3. WHEN TO RE-RUN\n\n// [] = run once on mount\n// [url] = run whenever url changes\n// [a, b] = run whenever a or b changes`}\n        </pre>\n      </div>\n\n      {/* DEMO SELECTOR */}\n      <div style={{ display: \"flex\", gap: \"12px\", marginBottom: \"20px\" }}>\n        {[\"users\", \"posts\"].map(demo => (\n          <button\n            key={demo}\n            onClick={() => handleDemoChange(demo)}\n            style={{\n              padding: \"10px 24px\",\n              borderRadius: \"8px\",\n              border: `1px solid ${activeDemo === demo ? colors.accent : colors.border}`,\n              backgroundColor: activeDemo === demo ? colors.accent : colors.card,\n              color: activeDemo === demo ? \"#fff\" : colors.textMuted,\n              cursor: \"pointer\",\n              fontFamily: \"'Courier New', monospace\",\n              fontWeight: \"bold\",\n              fontSize: \"14px\",\n              transition: \"all 0.2s\",\n            }}\n          >\n            {demo === \"users\" ? \"👥 Fetch Users\" : \"📝 Fetch Posts\"}\n          </button>\n        ))}\n\n        <div style={{ marginLeft: \"auto\", color: colors.textMuted, fontSize: \"12px\", alignSelf: \"center\" }}>\n          API: jsonplaceholder.typicode.com (free test API)\n        </div>\n      </div>\n\n      {/* SEARCH INPUT */}\n      {data && (\n        <input\n          type=\"text\"\n          value={searchTerm}\n          onChange={(e) => setSearchTerm(e.target.value)}\n          placeholder={`Search ${activeDemo}...`}\n          style={{\n            width: \"100%\",\n            padding: \"10px 14px\",\n            borderRadius: \"8px\",\n            border: `1px solid ${colors.border}`,\n            backgroundColor: colors.surface,\n            color: colors.text,\n            fontSize: \"14px\",\n            fontFamily: \"'Courier New', monospace\",\n            marginBottom: \"16px\",\n            boxSizing: \"border-box\",\n          }}\n        />\n      )}\n\n      {/* ============================================================\n          3-STATE PATTERN: Loading / Error / Data\n          Every async operation should handle all 3 states!\n          Django equivalent: try/except with loading indicator\n          ============================================================ */}\n\n      {/* STATE 1: LOADING */}\n      {loading && (\n        <div style={{ textAlign: \"center\", padding: \"60px 0\" }}>\n          <div style={{\n            fontSize: \"48px\",\n            animation: \"spin 1s linear infinite\",\n          }}>⚛️</div>\n          <p style={{ color: colors.textMuted, marginTop: \"16px\" }}>\n            Fetching {activeDemo} from API...\n          </p>\n          <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>\n        </div>\n      )}\n\n      {/* STATE 2: ERROR */}\n      {error && !loading && (\n        <div style={{\n          backgroundColor: colors.danger + \"22\",\n          border: `1px solid ${colors.danger}`,\n          borderRadius: \"12px\",\n          padding: \"20px\",\n          textAlign: \"center\",\n        }}>\n          <div style={{ fontSize: \"32px\", marginBottom: \"8px\" }}>❌</div>\n          <p style={{ color: colors.danger, margin: 0 }}>\n            <strong>Error:</strong> {error}\n          </p>\n          <p style={{ color: colors.textMuted, fontSize: \"13px\" }}>\n            Check your internet connection and try again.\n          </p>\n        </div>\n      )}\n\n      {/* STATE 3: DATA */}\n      {data && !loading && !error && (\n        <>\n          {/* Results count */}\n          <p style={{ color: colors.textMuted, fontSize: \"13px\", marginBottom: \"16px\" }}>\n            Showing {filteredData.length} of {data.length} {activeDemo}\n            {searchTerm && ` matching \"${searchTerm}\"`}\n          </p>\n\n          {/* Empty search results */}\n          {filteredData.length === 0 ? (\n            <div style={{ textAlign: \"center\", padding: \"40px\", color: colors.textMuted }}>\n              No results found for \"{searchTerm}\"\n            </div>\n          ) : (\n            <div style={{\n              display: \"grid\",\n              gridTemplateColumns: activeDemo === \"users\" ? \"1fr 1fr\" : \"1fr\",\n              gap: \"12px\",\n            }}>\n              {/* \n                🔰 BASIC: .map() to render API data\n                filteredData is an array → map each item to a component\n              */}\n              {filteredData.map(item => (\n                activeDemo === \"users\"\n                  ? <UserCard key={item.id} user={item} />\n                  : <PostCard key={item.id} post={item} />\n              ))}\n            </div>\n          )}\n        </>\n      )}\n\n      {/* ADVANCED CONCEPTS SUMMARY */}\n      <div style={{\n        backgroundColor: colors.card,\n        border: `1px solid ${colors.border}`,\n        borderRadius: \"12px\",\n        padding: \"24px\",\n        marginTop: \"32px\",\n      }}>\n        <h3 style={{ color: colors.accent, marginTop: 0 }}>📚 Advanced Concepts Used Here</h3>\n        {[\n          { level: \"🟡\", concept: \"useEffect()\", desc: \"Runs fetch after component renders. Re-runs when URL changes.\" },\n          { level: \"🟡\", concept: \"3-State Pattern\", desc: \"loading / error / data — always handle all 3 for async operations\" },\n          { level: \"🔴\", concept: \"AbortController\", desc: \"Cancels fetch when component unmounts — prevents memory leaks\" },\n          { level: \"🔴\", concept: \"Custom Hook (useFetch)\", desc: \"Extracted reusable fetch logic into its own hook function\" },\n          { level: \"🔴\", concept: \"useCallback\", desc: \"Memoizes function to prevent recreation on every render\" },\n          { level: \"🟡\", concept: \"Derived State\", desc: \"filteredData computed from data + searchTerm — no extra useState\" },\n        ].map((item, i) => (\n          <div key={i} style={{\n            display: \"flex\",\n            gap: \"12px\",\n            padding: \"10px 0\",\n            borderBottom: `1px solid ${colors.border}`,\n            fontSize: \"13px\",\n          }}>\n            <span>{item.level}</span>\n            <code style={{ color: colors.warning, minWidth: \"160px\", fontFamily: \"monospace\" }}>{item.concept}</code>\n            <span style={{ color: colors.textMuted }}>{item.desc}</span>\n          </div>\n        ))}\n      </div>\n\n    </div>\n  );\n}\n\nexport default ApiFetchPage;\n\n```",
        "phase": "Production",
        "order": 16
      },
      {
        "title": "Context lab",
        "sub": "React-learn archive · src/context/ThemeContext.jsx",
        "content": "## Context lab: provider, theme state, useTheme hook\n\nThis section preserves the original source from `src/context/ThemeContext.jsx` so the lesson stays connected to the working example from the archive.\n\n\n\n```jsx\n// ============================================================\n// 📁 context/ThemeContext.jsx\n// ============================================================\n// 🟡 INTERMEDIATE → 🔴 ADVANCED: React Context API\n//\n// PROBLEM: Imagine you have 10 nested components and the deepest\n// one needs the user's theme preference. You'd have to pass props\n// through all 10 layers — this is called \"prop drilling\" and it's BAD.\n//\n// SOLUTION: Context API — like a global store available to ALL\n// components without passing props manually.\n//\n// Django equivalent: Like request.session or middleware data\n// that is available everywhere without passing it to every view.\n// ============================================================\n\n// createContext: creates the \"container\" for shared data\n// useContext: lets any component READ from that container\n// useState: to store the actual theme value\nimport { createContext, useContext, useState } from \"react\";\n\n// ============================================================\n// STEP 1: Create the Context\n// Think of this as creating an \"empty box\" that will hold data.\n// We pass null as default — it will be filled by the Provider.\n// ============================================================\nconst ThemeContext = createContext(null);\n\n// ============================================================\n// STEP 2: Create the Provider Component\n// The Provider \"provides\" data to all its children.\n// Any component INSIDE <ThemeProvider> can access the data.\n//\n// 🔰 BASIC CONCEPT: { children } is a special prop in React.\n// It represents whatever is rendered BETWEEN opening and closing tags.\n// Just like Django's {% block content %} {% endblock %}\n// ============================================================\nexport function ThemeProvider({ children }) {\n\n  // Store the current theme — \"dark\" or \"light\"\n  const [theme, setTheme] = useState(\"dark\");\n\n  // Function to toggle between dark and light\n  // 🔰 BASIC: Arrow function — shorthand for function(){}\n  const toggleTheme = () => {\n    // 🟡 INTERMEDIATE: Functional state update\n    // When new state depends on old state, use a function inside setState.\n    // \"prev\" = the previous value of theme before update\n    // This prevents bugs in async scenarios.\n    setTheme(prev => prev === \"dark\" ? \"light\" : \"dark\");\n  };\n\n  // ============================================================\n  // THEME STYLES OBJECT\n  // 🟡 INTERMEDIATE: Computed styles based on state\n  // We store all color values in an object and switch them\n  // based on the current theme. This is a common React pattern.\n  // ============================================================\n  const styles = {\n    dark: {\n      bg: \"#0a0a0f\",\n      surface: \"#13131a\",\n      card: \"#1a1a24\",\n      border: \"#2a2a3a\",\n      text: \"#e8e8f0\",\n      textMuted: \"#8888aa\",\n      accent: \"#6366f1\",\n      accentGlow: \"rgba(99,102,241,0.3)\",\n      success: \"#10b981\",\n      danger: \"#ef4444\",\n      warning: \"#f59e0b\",\n    },\n    light: {\n      bg: \"#f0f0f8\",\n      surface: \"#ffffff\",\n      card: \"#f8f8ff\",\n      border: \"#e0e0f0\",\n      text: \"#1a1a2e\",\n      textMuted: \"#6666aa\",\n      accent: \"#4f46e5\",\n      accentGlow: \"rgba(79,70,229,0.2)\",\n      success: \"#059669\",\n      danger: \"#dc2626\",\n      warning: \"#d97706\",\n    }\n  };\n\n  // ============================================================\n  // STEP 3: Provide the value\n  // Everything inside \"value\" is what components can ACCESS.\n  // We pass: current theme name, toggle function, and style colors\n  // ============================================================\n  return (\n    <ThemeContext.Provider value={{\n      theme,           // \"dark\" or \"light\"\n      toggleTheme,     // function to switch theme\n      colors: styles[theme]  // the color object for current theme\n    }}>\n      {/* \n        🔰 BASIC: {children} renders whatever is wrapped inside <ThemeProvider>\n        In App.jsx, the Navbar and pages are the children.\n      */}\n      <div style={{\n        backgroundColor: styles[theme].bg,\n        color: styles[theme].text,\n        minHeight: \"100vh\",\n        transition: \"all 0.3s ease\", // Smooth theme transition\n        fontFamily: \"'Courier New', monospace\"\n      }}>\n        {children}\n      </div>\n    </ThemeContext.Provider>\n  );\n}\n\n// ============================================================\n// STEP 4: Create a Custom Hook to use the context\n// 🔴 ADVANCED: Custom Hooks\n//\n// Instead of writing \"useContext(ThemeContext)\" in every component,\n// we create a custom hook \"useTheme()\" that does it for us.\n// This is cleaner, reusable, and follows React best practices.\n//\n// Naming rule: Custom hooks MUST start with \"use\"\n// ============================================================\nexport function useTheme() {\n  const context = useContext(ThemeContext);\n\n  // Safety check: if someone uses useTheme() outside ThemeProvider,\n  // throw a helpful error instead of silent failure\n  if (!context) {\n    throw new Error(\"useTheme must be used inside ThemeProvider\");\n  }\n\n  return context;\n}\n\n```",
        "phase": "Production",
        "order": 17
      },
      {
        "title": "Reusable hooks",
        "sub": "React-learn archive · src/hooks/customHooks.js",
        "content": "## Reusable hooks: useLocalStorage and useDebounce\n\nThis section preserves the original source from `src/hooks/customHooks.js` so the lesson stays connected to the working example from the archive.\n\n\n\n```jsx\n// ============================================================\n// 📁 hooks/useLocalStorage.js\n// ============================================================\n// 🔴 ADVANCED: Custom Hook — useLocalStorage\n//\n// This hook syncs state with the browser's localStorage.\n// localStorage persists data even after page refresh!\n//\n// Usage:\n//   const [name, setName] = useLocalStorage(\"username\", \"Guest\");\n//   // works exactly like useState, but also saves to localStorage\n//\n// Django equivalent: Like storing data in a cookie or session\n// that persists across requests.\n// ============================================================\n\nimport { useState, useEffect } from \"react\";\n\nexport function useLocalStorage(key, initialValue) {\n\n  // ============================================================\n  // Lazy initialization of useState\n  // The function passed to useState only runs ONCE on first render.\n  // We use this to read from localStorage on first load.\n  //\n  // Without lazy init: would read localStorage on EVERY render\n  // With lazy init: reads localStorage only ONCE ← correct!\n  // ============================================================\n  const [storedValue, setStoredValue] = useState(() => {\n    try {\n      // Try to get existing value from localStorage\n      const item = window.localStorage.getItem(key);\n\n      // If exists, parse it from JSON string back to JS value\n      // If not, use the initialValue\n      return item ? JSON.parse(item) : initialValue;\n\n    } catch (error) {\n      // If error (private browsing, storage full), use initialValue\n      console.warn(`Error reading localStorage key \"${key}\":`, error);\n      return initialValue;\n    }\n  });\n\n  // ============================================================\n  // Custom setValue that ALSO saves to localStorage\n  // This wraps the regular setStoredValue to add localStorage sync\n  // ============================================================\n  const setValue = (value) => {\n    try {\n      // Allow value to be a function (like React's setState)\n      // Example: setValue(prev => prev + 1)\n      const valueToStore = value instanceof Function\n        ? value(storedValue)\n        : value;\n\n      // Update React state\n      setStoredValue(valueToStore);\n\n      // Save to localStorage as JSON string\n      window.localStorage.setItem(key, JSON.stringify(valueToStore));\n\n    } catch (error) {\n      console.warn(`Error setting localStorage key \"${key}\":`, error);\n    }\n  };\n\n  // Returns exactly like useState: [value, setValue]\n  return [storedValue, setValue];\n}\n\n// ============================================================\n// 📁 hooks/useDebounce.js\n// ============================================================\n// 🔴 ADVANCED: useDebounce Custom Hook\n//\n// Debouncing: wait until user STOPS typing before running code.\n// Without debounce: search API called on every single keystroke\n// With debounce: API called only after user pauses typing (500ms)\n//\n// Django equivalent: Rate limiting — don't process every request,\n// wait until the user is done.\n// ============================================================\n\nexport function useDebounce(value, delay = 500) {\n  const [debouncedValue, setDebouncedValue] = useState(value);\n\n  useEffect(() => {\n    // Set a timer: after 'delay' ms, update debouncedValue\n    const timer = setTimeout(() => {\n      setDebouncedValue(value);\n    }, delay);\n\n    // CLEANUP: if value changes before delay, cancel the timer\n    // and start a new one. This is the core of debouncing!\n    return () => clearTimeout(timer);\n\n  }, [value, delay]); // re-run when value or delay changes\n\n  return debouncedValue;\n}\n\n```",
        "phase": "Production",
        "order": 18
      },
      {
        "title": "Final Checklist & Build Project",
        "sub": "Finish here · prove you can use React",
        "phase": "Mastery",
        "generated": true,
        "content": "## Final Checklist: React\n\nUse this as the last section. If you can do these without copying blindly, you are ready to move forward.\n\n### Build project\n\nBuild a learning dashboard with topic cards, search, filters, forms, API data, theme context, and reusable hooks.\n\n### Knowledge checklist\n\n- I can explain and use: What is React?.\n\n- I can explain and use: Core Concepts.\n\n- I can explain and use: React Hooks.\n\n- I can explain and use: Advantages & Disadvantages.\n\n- I can explain and use: Project Structure.\n\n- I can explain and use: ReactLearn Project Roadmap.\n\n- I can explain and use: App shell and page switching.\n\n- I can explain and use: Navbar, props, events, and .map navigation.\n\n- I can explain and use: Basics lab.\n\n- I can explain and use: State lab.\n\n- I can explain and use: Forms lab.\n\n- I can explain and use: API lab.\n\n- I can explain and use: Context lab.\n\n- I can explain and use: Reusable hooks.\n\n### Interview-ready explanation\n\nI can explain what React is, why it exists, how it fits into a real full-stack project, and what mistakes beginners should avoid.\n\n### Move on when\n\n- You can build the project above.\n\n- You can debug one common failure without searching outside this site.\n\n- You can connect this topic to the next topic in the full-stack path.",
        "order": 19
      }
    ]
  },
  {
    "id": "django",
    "name": "Django",
    "icon": "🐍",
    "category": "Backend",
    "level": "intermediate",
    "color": "#44b78b",
    "bgColor": "#0d1f18",
    "desc": "Python web framework — batteries included",
    "sections": [
      {
        "title": "Start Here: Complete Roadmap",
        "sub": "Read this first · Django path",
        "phase": "Start",
        "generated": true,
        "content": "## Start Here: Django Complete Roadmap\n\nThis topic is arranged so a learner can start at the first lesson and keep going without leaving the website.\n\n### What you will master\n\n- Understand project setup, settings, models, views, URLs, templates, forms, admin, auth, static files, and DRF APIs.\n\n- Practice the exact commands and code patterns from the DjangoLearn fixture.\n\n- Build a backend that can serve pages, manage data, authenticate users, and expose REST endpoints.\n\n### Before you start\n\nPython basics, virtual environments, HTTP basics, and enough Git to save your work.\n\n### Learning order\n\n1. What is Django? — History & philosophy\n\n2. MVT Architecture — Models, Views, Templates, URLs\n\n3. Essential Commands — All Django commands you need\n\n4. Django REST Framework — Build APIs with Django\n\n5. What is Django? — DjangoLearn archive · chapter 1\n\n6. Setup & Installation — DjangoLearn archive · chapter 2\n\n7. Settings & Config — DjangoLearn archive · chapter 3\n\n8. Models & Database — DjangoLearn archive · chapter 4\n\n9. Views — DjangoLearn archive · chapter 5\n\n10. URL Routing — DjangoLearn archive · chapter 6\n\n11. Templates — DjangoLearn archive · chapter 7\n\n12. Forms — DjangoLearn archive · chapter 8\n\n13. Django Admin — DjangoLearn archive · chapter 9\n\n14. Authentication — DjangoLearn archive · chapter 10\n\n15. Static & Media Files — DjangoLearn archive · chapter 11\n\n16. Django REST Framework — DjangoLearn archive · chapter 12\n\n### How to study this topic\n\n1. Read each lesson in order.\n\n2. Type the commands and code examples yourself.\n\n3. After every Build or Production lesson, explain the concept back in your own words.\n\n4. Finish with the final project and checklist section.",
        "order": 1
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How Django Fits the Full Project\n\nThis website teaches a complete React + Django project, not isolated tricks. Here is where **Django** appears in the real workflow.\n\n### In local development\n\nYou use this topic while building and testing the project on your own machine. The goal is to understand the command, the folder it runs in, and the file it changes.\n\n### In production\n\nYou use this topic again when the app is pushed to GitHub, built by a hosting platform, and served to real users. Production usually changes URLs, secrets, databases, and build commands.\n\n### What to remember\n\n- Know which folder the command must run from.\n- Know whether the command is for development or production.\n- Know what output proves the command worked.\n- Know the next topic in the workflow so you can keep moving without guessing.",
        "order": 2
      },
      {
        "title": "What is Django?",
        "sub": "History & philosophy",
        "content": "## What is Django?\n\nDjango is a high-level Python web framework created in **2005** by Adrian Holovaty and Simon Willison at a Kansas newspaper. It was open-sourced and named after jazz guitarist **Django Reinhardt**.\n\n### Philosophy: \"Batteries included\"\nDjango comes with everything you need built-in:\n- 🔐 Authentication system\n- 🛡️ Security (CSRF, XSS protection)\n- 🗄️ ORM (no raw SQL needed)\n- 📁 File uploads\n- 📧 Email sending\n- 🔧 Admin panel (FREE!)\n\n### Used by\n- **Instagram** — handles 1 billion users\n- **Pinterest** — image discovery platform\n- **Spotify** — (backend services)\n- **Disqus** — comment platform\n- **Mozilla** — Firefox browser website\n\n### DRY Principle\nDjango follows **\"Don't Repeat Yourself\"** — write code once, use everywhere.",
        "phase": "Foundation",
        "order": 3
      },
      {
        "title": "MVT Architecture",
        "sub": "Models, Views, Templates, URLs",
        "content": "## Django's MVT Pattern\n\nUnlike MVC, Django uses **Model-View-Template (MVT)**:\n\n### Model — Your data structure\n```python\n# models.py\nfrom django.db import models\n\nclass Student(models.Model):\n    name = models.CharField(max_length=100)\n    age = models.IntegerField()\n    email = models.EmailField(unique=True)\n    enrolled_on = models.DateTimeField(auto_now_add=True)\n\n    def __str__(self):\n        return self.name\n```\n\n### View — Logic that handles requests\n```python\n# views.py\nfrom django.shortcuts import render\nfrom .models import Student\n\ndef student_list(request):\n    students = Student.objects.all().order_by('-enrolled_on')\n    return render(request, 'students/list.html', {\n        'students': students\n    })\n```\n\n### Template — HTML with Django tags\n```html\n<!-- templates/students/list.html -->\n{% for student in students %}\n  <div class=\"card\">\n    <h3>{{ student.name }}</h3>\n    <p>Age: {{ student.age }}</p>\n  </div>\n{% empty %}\n  <p>No students found.</p>\n{% endfor %}\n```\n\n### URL — Maps URLs to views\n```python\n# urls.py\nfrom django.urls import path\nfrom . import views\n\nurlpatterns = [\n    path('students/', views.student_list, name='student-list'),\n    path('students/<int:pk>/', views.student_detail, name='student-detail'),\n]\n```",
        "phase": "Foundation",
        "order": 4
      },
      {
        "title": "Essential Commands",
        "sub": "All Django commands you need",
        "content": "## Django Commands Cheatsheet\n\n### Installation & Setup\n```bash\npip install django               # Install Django\npip install djangorestframework  # For APIs\ndjango-admin startproject mysite # Create project\ncd mysite\npython manage.py startapp blog   # Create app\n```\n\n### Development\n```bash\npython manage.py runserver       # Start dev server (localhost:8000)\npython manage.py runserver 0.0.0.0:8000  # Allow external access\npython manage.py shell           # Python shell with Django context\npython manage.py dbshell         # Database shell\n```\n\n### Database\n```bash\npython manage.py makemigrations  # Detect model changes\npython manage.py migrate         # Apply changes to DB\npython manage.py showmigrations  # List all migrations\npython manage.py sqlmigrate blog 0001  # See the SQL\n```\n\n### Admin & Users\n```bash\npython manage.py createsuperuser  # Create admin user\npython manage.py changepassword   # Change user password\n```\n\n### Static Files & Testing\n```bash\npython manage.py collectstatic   # Gather static files\npython manage.py test            # Run tests\npython manage.py test blog       # Test specific app\n```",
        "phase": "Foundation",
        "order": 5
      },
      {
        "title": "Django REST Framework",
        "sub": "Build APIs with Django",
        "content": "## Django REST Framework (DRF)\n\nDRF lets you build powerful APIs with Django.\n\n### Install\n```bash\npip install djangorestframework\n```\n\n### Add to settings.py\n```python\nINSTALLED_APPS = [\n    ...\n    'rest_framework',\n]\n```\n\n### Serializer — Convert model to JSON\n```python\n# serializers.py\nfrom rest_framework import serializers\nfrom .models import Student\n\nclass StudentSerializer(serializers.ModelSerializer):\n    class Meta:\n        model = Student\n        fields = ['id', 'name', 'age', 'email']\n```\n\n### ViewSet — CRUD in a few lines\n```python\n# views.py\nfrom rest_framework import viewsets\nfrom .models import Student\nfrom .serializers import StudentSerializer\n\nclass StudentViewSet(viewsets.ModelViewSet):\n    queryset = Student.objects.all()\n    serializer_class = StudentSerializer\n```\n\n### URL Router\n```python\nfrom rest_framework.routers import DefaultRouter\nrouter = DefaultRouter()\nrouter.register(r'students', StudentViewSet)\nurlpatterns = router.urls\n# Auto-creates: GET /students/, POST /students/,\n#               GET /students/1/, PUT /students/1/, DELETE /students/1/\n```",
        "phase": "Foundation",
        "order": 6
      },
      {
        "title": "What is Django?",
        "sub": "DjangoLearn archive · chapter 1",
        "content": "## What is Django?\n\n### Introduction to Django\n\nDjango is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built in 2003 and released in 2005, it follows the MVT (Model-View-Template) pattern.\n\nDjango's motto: 'The web framework for perfectionists with deadlines.'\n\nKey Features:\n- Built-in admin interface\n- ORM — interact with DB using Python\n- URL routing and template engine\n- Built-in authentication system\n- Security: CSRF, XSS, SQL injection protection\n- Used by Instagram, Pinterest, NASA\n\n### MVT Architecture\n\nDjango uses MVT — Model, View, Template:\n\nModel — Defines your data structure. Maps Python classes to database tables.\n\nView — Business logic. Receives HTTP requests, talks to the model, returns responses.\n\nTemplate — Presentation layer. HTML with Django Template Language for dynamic content.\n\nURL Dispatcher — Routes incoming URLs to the correct view.\n\nFlow: User Request → URL Dispatcher → View → Model → Template → Response",
        "phase": "Foundation",
        "order": 7
      },
      {
        "title": "Setup & Installation",
        "sub": "DjangoLearn archive · chapter 2",
        "content": "## Setup & Installation\n\n### Prerequisites\n\nBefore installing Django, you need:\n\nPython 3.8+ — download from python.org\npip — comes with Python 3.4+\nVirtual Environment — strongly recommended\n\nWhy virtual environments? Each project may need different package versions. A venv keeps dependencies isolated so projects don't conflict.\n\n### Installation Commands\n\nCommands from the original DjangoLearn fixture:\n\n\n\n```bash\npython --version # Check Python version (need 3.8+)\npip --version # Check pip version\npython -m venv venv # Create a virtual environment\nsource venv/bin/activate # Activate venv (Linux/Mac)\nvenv\\Scripts\\activate # Activate venv (Windows)\npip install django # Install Django inside venv\ndjango-admin --version # Verify Django installation\ndjango-admin startproject mysite # Create a new Django project\npython manage.py startapp blog # Create a new app inside the project\npython manage.py runserver # Start the development server\npip freeze > requirements.txt # Save all dependencies to file\npip install -r requirements.txt # Install from requirements file\n```\n\n### Project Structure\n\n\n\n```python\nmysite/\n├── manage.py            # CLI tool for project management\n├── mysite/              # Project config package\n│   ├── __init__.py\n│   ├── settings.py      # All project settings\n│   ├── urls.py          # Root URL configuration\n│   ├── asgi.py          # ASGI entry point\n│   └── wsgi.py          # WSGI entry point\n└── blog/                # An app you created\n    ├── admin.py         # Register models with admin\n    ├── apps.py          # App configuration\n    ├── models.py        # Database models\n    ├── views.py         # View functions/classes\n    ├── urls.py          # App-level URL routes\n    ├── tests.py         # Unit tests\n    └── migrations/      # Auto-generated DB migrations\n```",
        "phase": "Foundation",
        "order": 8
      },
      {
        "title": "Django Project Commands",
        "sub": "Create, run, migrate, build, and deploy Django",
        "phase": "Build",
        "content": "## Django Project Commands\n\nUse this section when you want to build an actual Django backend from zero.\n\n### Windows PowerShell\n\n```powershell\nmkdir backend\ncd backend\npython -m venv venv\n.\\venv\\Scripts\\Activate.ps1\npython -m pip install --upgrade pip\npip install django djangorestframework django-cors-headers\ndjango-admin startproject config .\npython manage.py startapp api\npython manage.py migrate\npython manage.py runserver\n```\n\n### macOS/Linux\n\n```bash\nmkdir backend\ncd backend\npython3 -m venv venv\nsource venv/bin/activate\npython -m pip install --upgrade pip\npip install django djangorestframework django-cors-headers\ndjango-admin startproject config .\npython manage.py startapp api\npython manage.py migrate\npython manage.py runserver\n```\n\n### Daily Django commands\n\n```bash\npython manage.py runserver\npython manage.py makemigrations\npython manage.py migrate\npython manage.py createsuperuser\npython manage.py shell\npython manage.py test\n```\n\n### Save dependencies\n\n```bash\npip freeze > requirements.txt\n```\n\n### Production preparation\n\n```bash\npip install gunicorn whitenoise psycopg2-binary dj-database-url python-decouple\npip freeze > requirements.txt\npython manage.py check\npython manage.py collectstatic\n```\n\n### Production start command on Linux hosting\n\n```bash\ngunicorn config.wsgi:application\n```",
        "order": 9
      },
      {
        "title": "Settings & Config",
        "sub": "DjangoLearn archive · chapter 3",
        "content": "## Settings & Config\n\n### Understanding settings.py\n\nThe settings.py file is the control center of your Django project.\n\nKey Settings:\n- DEBUG — True in development, always False in production\n- ALLOWED_HOSTS — Valid hostnames for your site\n- INSTALLED_APPS — All apps Django should load\n- DATABASES — Database connection config\n- STATIC_URL — URL prefix for static files\n- MEDIA_URL / MEDIA_ROOT — For user-uploaded files\n- SECRET_KEY — Used for cryptographic signing — keep it secret!\n\n### Important settings.py Sections\n\n\n\n```python\nSECRET_KEY = 'your-secret-key-here'\nDEBUG = True\nALLOWED_HOSTS = ['localhost', '127.0.0.1']\n\nINSTALLED_APPS = [\n    'django.contrib.admin',\n    'django.contrib.auth',\n    'django.contrib.contenttypes',\n    'django.contrib.sessions',\n    'django.contrib.messages',\n    'django.contrib.staticfiles',\n    'blog',           # Your custom app\n]\n\nDATABASES = {\n    'default': {\n        'ENGINE': 'django.db.backends.sqlite3',\n        'NAME': BASE_DIR / 'db.sqlite3',\n    }\n}\n\nSTATIC_URL = '/static/'\nSTATICFILES_DIRS = [BASE_DIR / 'static']\n\nMEDIA_URL = '/media/'\nMEDIA_ROOT = BASE_DIR / 'media'\n```",
        "phase": "Build",
        "order": 10
      },
      {
        "title": "Models & Database",
        "sub": "DjangoLearn archive · chapter 4",
        "content": "## Models & Database\n\n### Django ORM & Models\n\nA Model is a Python class that maps to a database table. Django's ORM lets you work with your database using Python instead of raw SQL.\n\nCommon Field Types:\n- CharField — short text (max_length required)\n- TextField — long text\n- IntegerField — whole numbers\n- BooleanField — True/False\n- DateTimeField — date and time\n- EmailField — validated email\n- ImageField / FileField — file uploads\n- ForeignKey — many-to-one relationship\n- ManyToManyField — many-to-many\n- OneToOneField — one-to-one\n\n### Defining Models\n\n\n\n```python\n# blog/models.py\nfrom django.db import models\nfrom django.contrib.auth.models import User\n\nclass Category(models.Model):\n    name = models.CharField(max_length=100)\n    slug = models.SlugField(unique=True)\n\n    def __str__(self):\n        return self.name\n\n    class Meta:\n        ordering = ['name']\n\n\nclass Post(models.Model):\n    STATUS_CHOICES = [\n        ('draft', 'Draft'),\n        ('published', 'Published'),\n    ]\n    title = models.CharField(max_length=200)\n    slug = models.SlugField(unique=True)\n    author = models.ForeignKey(\n        User, on_delete=models.CASCADE, related_name='posts'\n    )\n    category = models.ForeignKey(\n        Category, on_delete=models.SET_NULL, null=True, blank=True\n    )\n    body = models.TextField()\n    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='draft')\n    created_at = models.DateTimeField(auto_now_add=True)\n    updated_at = models.DateTimeField(auto_now=True)\n\n    def __str__(self):\n        return self.title\n\n    class Meta:\n        ordering = ['-created_at']\n```\n\n### Migration Commands\n\nCommands from the original DjangoLearn fixture:\n\n\n\n```bash\npython manage.py makemigrations # Generate migration files from model changes\npython manage.py migrate # Apply all pending migrations to DB\npython manage.py showmigrations # Show all migrations and their status\npython manage.py sqlmigrate blog 0001 # Show SQL for a specific migration\npython manage.py migrate blog zero # Unapply all migrations for an app\n```\n\n### Django ORM Queries\n\n\n\n```python\n# python manage.py shell\nfrom blog.models import Post\n\n# CREATE\npost = Post.objects.create(title='Hello', slug='hello', body='...')\n\n# READ all\nposts = Post.objects.all()\n\n# FILTER\npublished = Post.objects.filter(status='published')\n\n# GET single (raises exception if not found)\npost = Post.objects.get(id=1)\n\n# ORDER BY\nlatest = Post.objects.order_by('-created_at')\n\n# LIMIT\ntop5 = Post.objects.all()[:5]\n\n# UPDATE\nPost.objects.filter(id=1).update(status='published')\n\n# DELETE\nPost.objects.filter(status='draft').delete()\n\n# COUNT\ntotal = Post.objects.count()\n\n# SEARCH\nresults = Post.objects.filter(title__icontains='django')\n\n# EXCLUDE\nnot_draft = Post.objects.exclude(status='draft')\n```",
        "phase": "Build",
        "order": 11
      },
      {
        "title": "Views",
        "sub": "DjangoLearn archive · chapter 5",
        "content": "## Views\n\n### Function-Based vs Class-Based Views\n\nViews receive HTTP requests and return HTTP responses.\n\nFunction-Based Views (FBV) — Simple Python functions. Explicit, easy to read.\n\nClass-Based Views (CBV) — Python classes. More reusable, less code for CRUD.\n\nBuilt-in Generic CBVs:\n- ListView — display a list of objects\n- DetailView — display a single object\n- CreateView — form to create an object\n- UpdateView — form to update an object\n- DeleteView — confirm and delete\n- TemplateView — render a template\n- RedirectView — redirect to a URL\n\n### Function-Based Views\n\n\n\n```python\n# blog/views.py\nfrom django.shortcuts import render, get_object_or_404, redirect\nfrom django.http import HttpResponse, JsonResponse\nfrom .models import Post\n\ndef home(request):\n    return HttpResponse('<h1>Hello Django!</h1>')\n\ndef post_list(request):\n    posts = Post.objects.filter(status='published')\n    return render(request, 'blog/post_list.html', {'posts': posts})\n\ndef post_detail(request, slug):\n    post = get_object_or_404(Post, slug=slug, status='published')\n    return render(request, 'blog/post_detail.html', {'post': post})\n\ndef create_post(request):\n    if request.method == 'POST':\n        title = request.POST.get('title')\n        body = request.POST.get('body')\n        Post.objects.create(title=title, body=body)\n        return redirect('post_list')\n    return render(request, 'blog/create_post.html')\n\ndef api_posts(request):\n    posts = list(Post.objects.values('id', 'title', 'status'))\n    return JsonResponse({'posts': posts})\n```\n\n### Class-Based Views\n\n\n\n```python\nfrom django.views.generic import (\n    ListView, DetailView, CreateView, UpdateView, DeleteView\n)\nfrom django.urls import reverse_lazy\nfrom .models import Post\n\nclass PostListView(ListView):\n    model = Post\n    template_name = 'blog/post_list.html'\n    context_object_name = 'posts'\n    paginate_by = 10\n\n    def get_queryset(self):\n        return Post.objects.filter(status='published')\n\nclass PostDetailView(DetailView):\n    model = Post\n    template_name = 'blog/post_detail.html'\n    slug_field = 'slug'\n\nclass PostCreateView(CreateView):\n    model = Post\n    fields = ['title', 'body', 'status']\n    template_name = 'blog/post_form.html'\n    success_url = reverse_lazy('post_list')\n\nclass PostUpdateView(UpdateView):\n    model = Post\n    fields = ['title', 'body', 'status']\n    template_name = 'blog/post_form.html'\n    success_url = reverse_lazy('post_list')\n\nclass PostDeleteView(DeleteView):\n    model = Post\n    template_name = 'blog/post_confirm_delete.html'\n    success_url = reverse_lazy('post_list')\n```",
        "phase": "Build",
        "order": 12
      },
      {
        "title": "URL Routing",
        "sub": "DjangoLearn archive · chapter 6",
        "content": "## URL Routing\n\n### URL Configuration\n\nDjango's URL dispatcher maps URL patterns to view functions.\n\nURL Pattern Converters:\n- <int:pk> — captures an integer\n- <str:name> — captures a string\n- <slug:slug> — captures a slug\n- <uuid:id> — captures a UUID\n- <path:subpath> — captures full path with slashes\n\nAlways name your URLs so you can reference them in templates and views without hardcoding paths.\n\n### URL Configuration Example\n\n\n\n```python\n# mysite/urls.py (project-level)\nfrom django.contrib import admin\nfrom django.urls import path, include\n\nurlpatterns = [\n    path('admin/', admin.site.urls),\n    path('blog/', include('blog.urls')),\n    path('accounts/', include('django.contrib.auth.urls')),\n]\n\n\n# blog/urls.py (app-level)\nfrom django.urls import path\nfrom . import views\n\napp_name = 'blog'\n\nurlpatterns = [\n    path('', views.PostListView.as_view(), name='post_list'),\n    path('<slug:slug>/', views.PostDetailView.as_view(), name='post_detail'),\n    path('new/', views.PostCreateView.as_view(), name='create_post'),\n    path('<slug:slug>/edit/', views.PostUpdateView.as_view(), name='update_post'),\n    path('<slug:slug>/delete/', views.PostDeleteView.as_view(), name='delete_post'),\n]\n\n# In templates:\n# {% url 'blog:post_list' %}\n# {% url 'blog:post_detail' slug=post.slug %}\n```",
        "phase": "Build",
        "order": 13
      },
      {
        "title": "Templates",
        "sub": "DjangoLearn archive · chapter 7",
        "content": "## Templates\n\n### Django Template Language (DTL)\n\nTemplates are HTML files with special DTL tags for dynamic content.\n\nDTL Syntax:\n- {{ variable }} — output a value\n- {% tag %} — logic tags\n- {# comment #} — template comments\n- {{ value|filter }} — apply a filter\n\nCommon Tags:\n- {% if %} {% elif %} {% else %} {% endif %}\n- {% for item in list %} {% endfor %}\n- {% block name %} {% endblock %}\n- {% extends 'base.html' %}\n- {% include 'partial.html' %}\n- {% url 'name' %}\n- {% static 'path' %}\n- {% csrf_token %}\n\n### Base Template & Inheritance\n\n\n\n```python\n{% load static %}\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>{% block title %}My Site{% endblock %}</title>\n  <link rel=\"stylesheet\" href=\"{% static 'css/style.css' %}\">\n</head>\n<body>\n  <nav>\n    <a href=\"{% url 'blog:post_list' %}\">Home</a>\n    {% if user.is_authenticated %}\n      Hello, {{ user.username }}!\n      <a href=\"{% url 'logout' %}\">Logout</a>\n    {% else %}\n      <a href=\"{% url 'login' %}\">Login</a>\n    {% endif %}\n  </nav>\n\n  {% block content %}{% endblock %}\n\n</body>\n</html>\n\n\n{# child template #}\n{% extends 'base.html' %}\n{% block title %}Blog Posts{% endblock %}\n{% block content %}\n<h1>All Posts</h1>\n{% for post in posts %}\n  <h2><a href=\"{% url 'blog:post_detail' slug=post.slug %}\">{{ post.title }}</a></h2>\n  <p>{{ post.body|truncatewords:30 }}</p>\n{% empty %}\n  <p>No posts yet.</p>\n{% endfor %}\n{% endblock %}\n```\n\n### Common Template Filters\n\n\n\n```python\n{{ post.title|upper }}              {# UPPERCASE #}\n{{ post.title|lower }}              {# lowercase #}\n{{ post.title|truncatewords:10 }}   {# First 10 words #}\n{{ post.body|linebreaks }}          {# \\n to <p> tags #}\n{{ post.body|safe }}                {# render raw HTML #}\n{{ post.body|striptags }}           {# strip HTML tags #}\n{{ post.created_at|date:\"Y-m-d\" }} {# 2024-01-15 #}\n{{ post.created_at|timesince }}     {# 3 days ago #}\n{{ items|length }}                  {# count of items #}\n{{ items|first }}                   {# first item #}\n{{ value|default:\"N/A\" }}          {# fallback value #}\n{{ price|floatformat:2 }}           {# 9.50 #}\n```",
        "phase": "Build",
        "order": 14
      },
      {
        "title": "Django Command Center",
        "sub": "Commands to create, run, migrate, test, and deploy Django",
        "phase": "Build",
        "generated": true,
        "content": "## Django Command Center\n\nUse these commands whenever you build a Django backend.\n\n### How to use these commands\n\nUse the setup commands once per backend project. Use `runserver`, migrations, shell, and tests during daily development. Use `collectstatic`, `check`, `requirements.txt`, and `gunicorn` when preparing for deployment. Always activate the virtual environment before running Django commands.\n\n### Check machine\n\nWindows:\n\n```powershell\npython --version\npip --version\n```\n\nmacOS/Linux:\n\n```bash\npython3 --version\npip3 --version\n```\n\n### Create backend project\n\nWindows PowerShell:\n\n```powershell\nmkdir backend\ncd backend\npython -m venv venv\n.\\venv\\Scripts\\Activate.ps1\npython -m pip install --upgrade pip\npip install django djangorestframework django-cors-headers\ndjango-admin startproject config .\npython manage.py startapp api\npython manage.py migrate\npython manage.py runserver\n```\n\nmacOS/Linux:\n\n```bash\nmkdir backend\ncd backend\npython3 -m venv venv\nsource venv/bin/activate\npython -m pip install --upgrade pip\npip install django djangorestframework django-cors-headers\ndjango-admin startproject config .\npython manage.py startapp api\npython manage.py migrate\npython manage.py runserver\n```\n\n### Daily Django workflow\n\n```bash\nsource venv/bin/activate        # macOS/Linux\npython manage.py runserver\npython manage.py makemigrations\npython manage.py migrate\npython manage.py createsuperuser\npython manage.py shell\npython manage.py test\n```\n\nWindows activation:\n\n```powershell\n.\\venv\\Scripts\\Activate.ps1\n```\n\n### Save dependencies\n\n```bash\npip freeze > requirements.txt\npip install -r requirements.txt\n```\n\n### Static files and production checks\n\n```bash\npython manage.py check\npython manage.py collectstatic\n```\n\n### Production packages\n\n```bash\npip install gunicorn whitenoise psycopg2-binary dj-database-url python-decouple\npip freeze > requirements.txt\n```\n\n### Render backend commands\n\n```text\nBuild command: pip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate\nStart command: gunicorn config.wsgi:application\n```",
        "order": 15
      },
      {
        "title": "Forms",
        "sub": "DjangoLearn archive · chapter 8",
        "content": "## Forms\n\n### Django Forms\n\nDjango forms handle HTML rendering, validation, and error display automatically.\n\nTwo types:\nforms.Form — Standalone, not tied to a model. For contact, search, login forms.\nforms.ModelForm — Auto-generates fields from a model. Perfect for create/update.\n\nForm Workflow:\n1. Define the form class\n2. Instantiate in view (empty for GET, with data for POST)\n3. Call form.is_valid() to validate\n4. Access form.cleaned_data for safe values\n5. Render with {{ form }} in template\n\n### Form & ModelForm\n\n\n\n```python\n# blog/forms.py\nfrom django import forms\nfrom .models import Post\n\nclass ContactForm(forms.Form):\n    name = forms.CharField(max_length=100)\n    email = forms.EmailField()\n    message = forms.CharField(widget=forms.Textarea, min_length=10)\n\n    def clean_email(self):\n        email = self.cleaned_data['email']\n        if 'spam' in email:\n            raise forms.ValidationError('Invalid email.')\n        return email\n\n\nclass PostForm(forms.ModelForm):\n    class Meta:\n        model = Post\n        fields = ['title', 'body', 'category', 'status']\n        widgets = {\n            'title': forms.TextInput(attrs={'class': 'form-control'}),\n            'body': forms.Textarea(attrs={'rows': 10}),\n        }\n\n\n# views.py\ndef contact(request):\n    if request.method == 'POST':\n        form = ContactForm(request.POST)\n        if form.is_valid():\n            name = form.cleaned_data['name']\n            # ... handle data\n            return redirect('thank_you')\n    else:\n        form = ContactForm()\n    return render(request, 'contact.html', {'form': form})\n```\n\n### Form in Template\n\n\n\n```python\n<form method=\"post\">\n  {% csrf_token %}\n\n  {# Render all fields at once #}\n  {{ form.as_p }}\n\n  {# Or render field by field #}\n  <div class=\"field\">\n    {{ form.name.label_tag }}\n    {{ form.name }}\n    {% if form.name.errors %}\n      {% for error in form.name.errors %}\n        <p class=\"error\">{{ error }}</p>\n      {% endfor %}\n    {% endif %}\n  </div>\n\n  <button type=\"submit\">Submit</button>\n</form>\n```",
        "phase": "Production",
        "order": 16
      },
      {
        "title": "Django Admin",
        "sub": "DjangoLearn archive · chapter 9",
        "content": "## Django Admin\n\n### The Admin Interface\n\nOne of Django's most powerful features is the automatic admin interface. Register your models and get a full CRUD panel with zero extra code.\n\nFeatures:\n- List, create, edit, delete any registered model\n- Search, filter, and sort records\n- Inline editing of related models\n- Bulk actions\n- Permission-based access control\n\nAccess at: http://localhost:8000/admin/\n\nCreate superuser: python manage.py createsuperuser\n\n### Admin Setup Commands\n\nCommands from the original DjangoLearn fixture:\n\n\n\n```bash\npython manage.py createsuperuser # Create an admin user account\npython manage.py changepassword username # Change a user's password\n```\n\n### Customising the Admin\n\n\n\n```python\n# blog/admin.py\nfrom django.contrib import admin\nfrom .models import Post, Category\n\nadmin.site.register(Category)\n\n@admin.register(Post)\nclass PostAdmin(admin.ModelAdmin):\n    list_display = ['title', 'author', 'status', 'created_at']\n    list_filter = ['status', 'created_at', 'author']\n    search_fields = ['title', 'body']\n    prepopulated_fields = {'slug': ('title',)}\n    date_hierarchy = 'created_at'\n    ordering = ['-created_at']\n    readonly_fields = ['created_at', 'updated_at']\n    fieldsets = (\n        ('Content', {\n            'fields': ('title', 'slug', 'author', 'body')\n        }),\n        ('Meta', {\n            'fields': ('category', 'status'),\n            'classes': ('collapse',)\n        }),\n    )\n    actions = ['publish_posts']\n\n    def publish_posts(self, request, queryset):\n        queryset.update(status='published')\n        self.message_user(request, f'{queryset.count()} posts published.')\n    publish_posts.short_description = 'Mark selected as published'\n```",
        "phase": "Production",
        "order": 17
      },
      {
        "title": "Authentication",
        "sub": "DjangoLearn archive · chapter 10",
        "content": "## Authentication\n\n### Built-in Authentication\n\nDjango includes a complete authentication system:\n- User login and logout\n- Password hashing (PBKDF2 by default)\n- Password reset via email\n- User groups and permissions\n\nUser model fields: username, email, password, first_name, last_name, is_active, is_staff, is_superuser, date_joined\n\nProtecting Views:\n- @login_required — FBV decorator\n- LoginRequiredMixin — CBV mixin\n- request.user.is_authenticated — check in view\n\n### Auth Views & Decorators\n\n\n\n```python\n# urls.py\nfrom django.contrib.auth import views as auth_views\n\nurlpatterns = [\n    path('accounts/', include('django.contrib.auth.urls')),\n    path('register/', views.register, name='register'),\n]\n\n# settings.py\nLOGIN_URL = '/accounts/login/'\nLOGIN_REDIRECT_URL = '/'\nLOGOUT_REDIRECT_URL = '/'\n\n\n# views.py\nfrom django.contrib.auth.decorators import login_required\nfrom django.contrib.auth.mixins import LoginRequiredMixin\nfrom django.contrib.auth import login\nfrom django.contrib.auth.models import User\n\n@login_required\ndef dashboard(request):\n    return render(request, 'dashboard.html')\n\nclass DashboardView(LoginRequiredMixin, ListView):\n    model = Post\n    login_url = '/login/'\n\ndef register(request):\n    if request.method == 'POST':\n        username = request.POST['username']\n        password = request.POST['password']\n        user = User.objects.create_user(username=username, password=password)\n        login(request, user)\n        return redirect('/')\n    return render(request, 'register.html')\n\n# In templates\n{% if user.is_authenticated %}\n    Hello, {{ user.username }}!\n{% endif %}\n```",
        "phase": "Production",
        "order": 18
      },
      {
        "title": "Static & Media Files",
        "sub": "DjangoLearn archive · chapter 11",
        "content": "## Static & Media Files\n\n### Static vs Media Files\n\nStatic Files — CSS, JavaScript, images you include in your project.\n\nMedia Files — Files uploaded by users: profile photos, post images.\n\nIn Development: Django serves both when DEBUG=True.\n\nIn Production: Never use Django to serve static/media files. Use Nginx or a CDN (AWS S3). Run collectstatic to gather all files into one folder.\n\n### Static File Commands\n\nCommands from the original DjangoLearn fixture:\n\n\n\n```bash\npython manage.py collectstatic # Collect all static files into STATIC_ROOT\npython manage.py findstatic style.css # Find where a static file comes from\n```\n\n### Configuration\n\n\n\n```python\n# settings.py\nSTATIC_URL = '/static/'\nSTATICFILES_DIRS = [BASE_DIR / 'static']\nSTATIC_ROOT = BASE_DIR / 'staticfiles'\n\nMEDIA_URL = '/media/'\nMEDIA_ROOT = BASE_DIR / 'media'\n\n\n# urls.py — serve media in development\nfrom django.conf import settings\nfrom django.conf.urls.static import static\n\nurlpatterns = [...] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)\n\n\n# templates — using static files\n{% load static %}\n<link rel=\"stylesheet\" href=\"{% static 'css/style.css' %}\">\n<img src=\"{% static 'images/logo.png' %}\" alt=\"Logo\">\n\n# Display user-uploaded image\n{% if post.image %}\n    <img src=\"{{ post.image.url }}\" alt=\"{{ post.title }}\">\n{% endif %}\n```",
        "phase": "Production",
        "order": 19
      },
      {
        "title": "Django REST Framework",
        "sub": "DjangoLearn archive · chapter 12",
        "content": "## Django REST Framework\n\n### Building APIs with DRF\n\nDjango REST Framework (DRF) is the standard library for Web APIs in Django.\n\nIt adds:\n- Serializers — Convert model instances to/from JSON\n- API Views — Function and class based API views\n- ViewSets — Group related API views together\n- Routers — Auto-generate API URLs from ViewSets\n- Authentication — Token, Session, JWT\n- Browsable API — Auto-generated HTML interface for testing\n\n### Install DRF\n\nCommands from the original DjangoLearn fixture:\n\n\n\n```bash\npip install djangorestframework # Install Django REST Framework\npip install djangorestframework-simplejwt # Install JWT authentication for DRF\n```\n\n### Serializers, ViewSets & Router\n\n\n\n```python\n# blog/serializers.py\nfrom rest_framework import serializers\nfrom .models import Post\n\nclass PostSerializer(serializers.ModelSerializer):\n    author_name = serializers.CharField(source='author.username', read_only=True)\n\n    class Meta:\n        model = Post\n        fields = ['id', 'title', 'slug', 'body', 'status', 'author_name', 'created_at']\n        read_only_fields = ['created_at']\n\n\n# blog/views.py\nfrom rest_framework import viewsets, permissions\nfrom .serializers import PostSerializer\n\nclass PostViewSet(viewsets.ModelViewSet):\n    queryset = Post.objects.filter(status='published')\n    serializer_class = PostSerializer\n    permission_classes = [permissions.IsAuthenticatedOrReadOnly]\n\n    def perform_create(self, serializer):\n        serializer.save(author=self.request.user)\n\n\n# blog/urls.py\nfrom rest_framework.routers import DefaultRouter\nrouter = DefaultRouter()\nrouter.register('posts', PostViewSet, basename='post')\n\nurlpatterns = [\n    path('api/', include(router.urls)),\n]\n# Generates:\n# GET/POST   /api/posts/\n# GET/PUT/PATCH/DELETE /api/posts/{id}/\n```",
        "phase": "Production",
        "order": 20
      },
      {
        "title": "Final Checklist & Build Project",
        "sub": "Finish here · prove you can use Django",
        "phase": "Mastery",
        "generated": true,
        "content": "## Final Checklist: Django\n\nUse this as the last section. If you can do these without copying blindly, you are ready to move forward.\n\n### Build project\n\nBuild a blog or course backend with models, admin, templates, auth, forms, static files, and DRF API endpoints.\n\n### Knowledge checklist\n\n- I can explain and use: What is Django?.\n\n- I can explain and use: MVT Architecture.\n\n- I can explain and use: Essential Commands.\n\n- I can explain and use: Django REST Framework.\n\n- I can explain and use: What is Django?.\n\n- I can explain and use: Setup & Installation.\n\n- I can explain and use: Settings & Config.\n\n- I can explain and use: Models & Database.\n\n- I can explain and use: Views.\n\n- I can explain and use: URL Routing.\n\n- I can explain and use: Templates.\n\n- I can explain and use: Forms.\n\n- I can explain and use: Django Admin.\n\n- I can explain and use: Authentication.\n\n- I can explain and use: Static & Media Files.\n\n- I can explain and use: Django REST Framework.\n\n### Interview-ready explanation\n\nI can explain what Django is, why it exists, how it fits into a real full-stack project, and what mistakes beginners should avoid.\n\n### Move on when\n\n- You can build the project above.\n\n- You can debug one common failure without searching outside this site.\n\n- You can connect this topic to the next topic in the full-stack path.",
        "order": 21
      }
    ]
  },
  {
    "id": "git",
    "name": "Git",
    "icon": "🔀",
    "category": "Version Control",
    "level": "beginner",
    "color": "#f05032",
    "bgColor": "#1a0b08",
    "desc": "Track every change in your code",
    "sections": [
      {
        "title": "Start Here: Complete Roadmap",
        "sub": "Read this first · Git path",
        "phase": "Start",
        "generated": true,
        "content": "## Start Here: Git Complete Roadmap\n\nThis topic is arranged so a learner can start at the first lesson and keep going without leaving the website.\n\n### What you will master\n\n- Move from basic version control to branches, merging, recovery, and professional workflows.\n\n- Use Git confidently before GitHub, CI/CD, Docker, and deployment.\n\n- Keep project history clean and recover safely from mistakes.\n\n### Before you start\n\nTerminal basics and a folder of code you are willing to track.\n\n### Learning order\n\n1. What is Git? — Version control explained simply\n\n2. Core Concepts — Repository, commit, branch, merge\n\n3. Essential Git Commands — Commands every developer uses daily\n\n4. Git Workflow — Professional branching strategy\n\n5. Advanced Git — Rebase, stash, cherry-pick, bisect\n\n6. Git — Version Control — DeploymentLearn archive · GIT\n\n7. Git Branches & Merging — DeploymentLearn archive · GIT\n\n### How to study this topic\n\n1. Read each lesson in order.\n\n2. Type the commands and code examples yourself.\n\n3. After every Build or Production lesson, explain the concept back in your own words.\n\n4. Finish with the final project and checklist section.",
        "order": 1
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How Git Fits the Full Project\n\nThis website teaches a complete React + Django project, not isolated tricks. Here is where **Git** appears in the real workflow.\n\n### In local development\n\nYou use this topic while building and testing the project on your own machine. The goal is to understand the command, the folder it runs in, and the file it changes.\n\n### In production\n\nYou use this topic again when the app is pushed to GitHub, built by a hosting platform, and served to real users. Production usually changes URLs, secrets, databases, and build commands.\n\n### What to remember\n\n- Know which folder the command must run from.\n- Know whether the command is for development or production.\n- Know what output proves the command worked.\n- Know the next topic in the workflow so you can keep moving without guessing.",
        "order": 2
      },
      {
        "title": "What is Git?",
        "sub": "Version control explained simply",
        "content": "## What is Git?\n\nGit was created by **Linus Torvalds** (the creator of Linux) in **2005**. He needed a fast, distributed version control system for the Linux kernel development.\n\n### The Problem Git Solves\n**Without Git:**\n```\nproject_v1.zip\nproject_v2.zip\nproject_final.zip\nproject_final_REAL.zip\nproject_final_REAL_2.zip  😅\n```\n\n**With Git:**\n```\nproject/   ← One folder with complete history of EVERY change\n```\n\n### Why You Need Git\n- 🕰️ **Time travel** — go back to any point in history\n- 🤝 **Collaboration** — multiple people work simultaneously\n- 🌿 **Branches** — try new features without breaking working code\n- 🔍 **Blame** — see who changed what and when\n- 💾 **Backup** — code is safe on remote servers\n\n### Key Fact\nAs of 2024, Git is used by **over 90%** of developers worldwide. It's non-negotiable for any professional developer.",
        "phase": "Foundation",
        "order": 3
      },
      {
        "title": "Core Concepts",
        "sub": "Repository, commit, branch, merge",
        "content": "## Git Core Concepts\n\n### The 3 Areas of Git\n```\nWorking Directory  →  Staging Area  →  Repository\n(files you edit)      (git add)        (git commit)\n```\n\n### Key Terms\n| Term | Meaning |\n|------|---------|\n| Repository | Folder tracked by Git |\n| Commit | A snapshot saved forever |\n| Branch | A parallel timeline |\n| Merge | Combine two branches |\n| Clone | Copy a remote repo locally |\n| Push | Send commits to GitHub |\n| Pull | Get latest changes from GitHub |\n| Fork | Copy someone else's repo |\n| PR (Pull Request) | Request to merge your branch |\n\n### Visualizing Branches\n```\nmain:     A---B---C-----------F\n                   \\         /\nfeature:            D---E---/\n```\n- A, B, C = commits on main\n- D, E = commits on feature branch\n- F = merge commit",
        "phase": "Foundation",
        "order": 4
      },
      {
        "title": "Essential Git Commands",
        "sub": "Commands every developer uses daily",
        "content": "## Git Commands — Daily Use\n\n### Setup (do once)\n```bash\ngit config --global user.name \"Your Name\"\ngit config --global user.email \"you@email.com\"\ngit config --global core.editor \"code --wait\"  # VS Code\n```\n\n### Starting a Project\n```bash\ngit init                    # Start tracking a folder\ngit clone [url]             # Copy a repo from GitHub\ngit clone [url] my-folder   # Clone into specific folder\n```\n\n### Daily Workflow\n```bash\ngit status                  # What's changed?\ngit diff                    # See exact changes\ngit add .                   # Stage ALL changed files\ngit add index.html          # Stage ONE file\ngit commit -m \"Add login form\"  # Save snapshot\ngit commit -am \"Fix bug\"    # Add + commit tracked files\ngit log                     # See commit history\ngit log --oneline           # Compact history\ngit log --oneline --graph   # Visual branch history\n```\n\n### Branches\n```bash\ngit branch                  # List local branches\ngit branch -a               # List all branches\ngit branch feature-login    # Create new branch\ngit checkout feature-login  # Switch to branch\ngit checkout -b feature-login  # Create AND switch\ngit merge feature-login     # Merge into current branch\ngit branch -d feature-login # Delete branch (safe)\ngit branch -D feature-login # Force delete\n```\n\n### Remote (GitHub)\n```bash\ngit remote add origin [url] # Connect to GitHub\ngit push origin main        # Push to GitHub\ngit push -u origin main     # Push and set upstream\ngit pull origin main        # Get latest from GitHub\ngit fetch                   # Download without merging\n```\n\n### Undoing Mistakes\n```bash\ngit restore [file]          # Discard unstaged changes\ngit restore --staged [file] # Unstage a file\ngit reset HEAD~1            # Undo last commit (keep changes)\ngit reset --hard HEAD~1     # Undo last commit (lose changes!)\ngit revert [commit]         # Create undo commit (safe)\ngit stash                   # Temporarily save changes\ngit stash pop               # Restore stashed changes\n```",
        "phase": "Foundation",
        "order": 5
      },
      {
        "title": "Git Workflow",
        "sub": "Professional branching strategy",
        "content": "## Professional Git Workflow\n\n### Feature Branch Workflow (most common)\n```bash\n# 1. Start from updated main\ngit checkout main\ngit pull origin main\n\n# 2. Create feature branch\ngit checkout -b feature/user-authentication\n\n# 3. Work on the feature\n# ... code, code, code ...\n\n# 4. Stage and commit regularly\ngit add .\ngit commit -m \"Add login form component\"\ngit commit -m \"Add JWT token handling\"\ngit commit -m \"Add protected route middleware\"\n\n# 5. Push to GitHub\ngit push origin feature/user-authentication\n\n# 6. Open Pull Request on GitHub\n# 7. Team reviews code\n# 8. Merge to main ✅\n```\n\n### Branch Naming Conventions\n```\nfeature/user-auth          ← New features\nbugfix/login-redirect      ← Bug fixes\nhotfix/payment-crash       ← Urgent production fix\nchore/update-dependencies  ← Non-code changes\ndocs/api-documentation     ← Documentation\n```\n\n### Good Commit Messages\n```bash\n# ✅ Good\ngit commit -m \"Add user login with JWT authentication\"\ngit commit -m \"Fix: redirect loop on protected routes\"\ngit commit -m \"Update README with installation steps\"\n\n# ❌ Bad\ngit commit -m \"fix\"\ngit commit -m \"asdfgh\"\ngit commit -m \"changes\"\n```",
        "phase": "Build",
        "order": 6
      },
      {
        "title": "Advanced Git",
        "sub": "Rebase, stash, cherry-pick, bisect",
        "content": "## Advanced Git Commands\n\n### Stash — Temporarily save work\n```bash\ngit stash                     # Save current changes\ngit stash save \"WIP: login\"   # Save with a name\ngit stash list                # See all stashes\ngit stash pop                 # Restore latest stash\ngit stash apply stash@{2}     # Restore specific stash\ngit stash drop stash@{0}      # Delete a stash\ngit stash clear               # Delete all stashes\n```\n\n### Rebase — Cleaner history\n```bash\ngit rebase main               # Rebase current branch onto main\ngit rebase -i HEAD~3          # Interactive rebase: edit last 3 commits\n# In interactive mode you can:\n# pick   = keep commit\n# squash = combine with previous\n# reword = edit commit message\n# drop   = remove commit\n```\n\n### Cherry-pick — Apply specific commit\n```bash\ngit cherry-pick abc1234       # Apply one commit\ngit cherry-pick abc1234..def5678  # Apply range\n```\n\n### Bisect — Find the bug-introducing commit\n```bash\ngit bisect start\ngit bisect bad                # Current version is broken\ngit bisect good v2.0          # This version was working\n# Git checks out middle commit — test it\ngit bisect good               # or git bisect bad\n# Repeat until Git finds the exact commit that introduced the bug\ngit bisect reset              # End bisect session\n```\n\n### Tags — Mark release versions\n```bash\ngit tag v1.0.0                # Lightweight tag\ngit tag -a v1.0.0 -m \"Release 1.0\"  # Annotated tag\ngit push origin v1.0.0        # Push tag to GitHub\ngit push origin --tags        # Push all tags\n```",
        "phase": "Build",
        "order": 7
      },
      {
        "title": "Git Command Center",
        "sub": "Commands for daily version control",
        "phase": "Build",
        "generated": true,
        "content": "## Git Command Center\n\n### How to use these commands\n\nGit commands protect your work. Commit after a meaningful change, branch before risky work, and push when you want GitHub or deployment platforms to receive the latest code.\n\n### First-time setup\n\n```bash\ngit --version\ngit config --global user.name \"Your Name\"\ngit config --global user.email \"you@example.com\"\n```\n\n### Start tracking a project\n\n```bash\ngit init\ngit status\ngit add .\ngit commit -m \"Initial commit\"\n```\n\n### Daily workflow\n\n```bash\ngit status\ngit add .\ngit commit -m \"Describe the change\"\ngit log --oneline\n```\n\n### Branch workflow\n\n```bash\ngit branch\ngit checkout -b feature/login\ngit add .\ngit commit -m \"Add login page\"\ngit checkout main\ngit merge feature/login\n```\n\n### Undo safely\n\n```bash\ngit restore file.js\ngit restore --staged file.js\ngit revert <commit-hash>\n```\n\n### Connect to GitHub\n\n```bash\ngit remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git\ngit branch -M main\ngit push -u origin main\n```",
        "order": 8
      },
      {
        "title": "Git — Version Control",
        "sub": "DeploymentLearn archive · GIT",
        "content": "## Git — Version Control\n\n### What is Git?\n\nGit is a distributed version control system created by Linus Torvalds in 2005.\n\nIt tracks every change you make to your code over time.\n\nWHY GIT?\n✅ Never lose code — every version is saved\n✅ Undo mistakes — roll back to any point in history\n✅ Collaboration — multiple developers, no conflicts\n✅ Branches — work on features without breaking main code\n✅ Industry standard — every company uses it\n\nGit stores your project history as a series of SNAPSHOTS (commits).\nEach commit has: a unique ID, your message, author, timestamp.\n\nWithout Git → \"final_v2_REAL_final3.zip\" chaos.\nWith Git → Clean, traceable history forever.\n\n### Git's 3 Areas\n\nUnderstanding Git's 3 areas is the key to everything:\n\nWORKING DIRECTORY\n└── Your actual files (what you see in VS Code)\n    Changes here are \"untracked\" or \"modified\"\n\nSTAGING AREA (Index)\n└── Files you've chosen to include in the NEXT commit\n    Like selecting photos before posting them\n    Use: git add <file>\n\nREPOSITORY (.git folder)\n└── The permanent history of commits\n    Once committed, it's saved forever\n    Use: git commit -m \"message\"\n\nFlow: Edit file → git add → git commit\nThink of it like: Draft → Reviewed → Published\n\n### Essential Git Commands\n\n\n\n```bash\n# ═══════════════════════════════════\n# SETUP (do once per machine)\n# ═══════════════════════════════════\ngit config --global user.name \"Your Name\"\ngit config --global user.email \"you@example.com\"\ngit config --global core.editor \"code --wait\"  # VS Code as editor\n\n# ═══════════════════════════════════\n# START A PROJECT\n# ═══════════════════════════════════\ngit init                    # Initialize Git in current folder\ngit clone <url>             # Download a remote repo to local\n\n# ═══════════════════════════════════\n# DAILY WORKFLOW\n# ═══════════════════════════════════\ngit status                  # See what's changed\ngit diff                    # See exact line-by-line changes\ngit add index.html          # Stage specific file\ngit add .                   # Stage ALL changed files\ngit commit -m \"Add login feature\"   # Save snapshot\n\n# ═══════════════════════════════════\n# HISTORY & INSPECTION\n# ═══════════════════════════════════\ngit log                     # Full commit history\ngit log --oneline           # Compact one-line history\ngit log --oneline --graph   # Visual branch tree\ngit show <commit-hash>      # See what changed in a commit\n\n# ═══════════════════════════════════\n# UNDO & RECOVER\n# ═══════════════════════════════════\ngit restore <file>          # Discard unstaged changes\ngit restore --staged <file> # Unstage a file\ngit revert <commit-hash>    # Undo a commit (safe, keeps history)\ngit reset --hard HEAD~1     # Delete last commit (DANGEROUS)\n```\n\n### Git Quick Reference\n\n\n\n```bash\ngit init\ngit status\ngit add .\ngit commit -m \"msg\"\ngit log --oneline\ngit diff\ngit restore <file>\ngit stash\ngit stash pop\n```",
        "phase": "Production",
        "order": 9
      },
      {
        "title": "Git Branches & Merging",
        "sub": "DeploymentLearn archive · GIT",
        "content": "## Git Branches & Merging\n\n### What are Branches?\n\nA branch is an independent line of development.\n\nThink of your codebase as a timeline. The main branch is the \"official\" timeline.\n\nBranches let you:\n✅ Build a new feature without touching working code\n✅ Fix a bug in isolation\n✅ Experiment freely — delete the branch if it fails\n✅ Multiple developers work in parallel\n\nBRANCH STRATEGIES:\nmain/master — production-ready code (always works!)\ndevelop — integration branch for features\nfeature/login — building a specific feature\nhotfix/crash — urgent production fix\nrelease/v2.0 — preparing a release\n\nReal companies protect the \"main\" branch — no one pushes directly!\nAll changes go through Pull Requests (code review first).\n\n### Branching & Merging Commands\n\n\n\n```bash\n# ═══════════════════════════════════\n# BRANCHES\n# ═══════════════════════════════════\ngit branch                      # List all branches (* = current)\ngit branch feature/login        # Create new branch\ngit checkout feature/login      # Switch to branch\ngit checkout -b feature/login   # Create AND switch (shortcut)\ngit switch -c feature/login     # Modern syntax (Git 2.23+)\n\n# ═══════════════════════════════════\n# MERGING\n# ═══════════════════════════════════\ngit checkout main               # Switch back to main\ngit merge feature/login         # Merge feature into main\n\n# Fast-forward merge: no divergence, Git just moves pointer forward\n# 3-way merge: branches diverged, Git creates a merge commit\n\n# ═══════════════════════════════════\n# RESOLVING CONFLICTS\n# ═══════════════════════════════════\n# Git marks conflicts in files like this:\n# <<<<<<< HEAD (your changes)\n# your code\n# =======\n# their code\n# >>>>>>> feature/login (incoming changes)\n#\n# Edit the file to keep what you want, then:\ngit add <resolved-file>\ngit commit -m \"Resolve merge conflict\"\n\n# ═══════════════════════════════════\n# REBASING (advanced — cleaner history)\n# ═══════════════════════════════════\ngit checkout feature/login\ngit rebase main         # Move feature branch onto latest main\n# Never rebase shared/public branches!\n\n# ═══════════════════════════════════\n# CLEANUP\n# ═══════════════════════════════════\ngit branch -d feature/login     # Delete merged branch\ngit branch -D feature/login     # Force delete unmerged branch\n```\n\n### Merge vs Rebase\n\nMERGE:\ngit merge feature → Creates a \"merge commit\"\n✅ Preserves full history\n✅ Safe for shared branches\n❌ Messy history with many branches\n\nREBASE:\ngit rebase main → Replays your commits on top of main\n✅ Linear, clean history\n✅ Great for feature branches\n❌ NEVER rebase shared/public branches (rewrites history)\n❌ Can confuse teammates if used wrong\n\nGOLDEN RULE:\n→ Use merge for integrating completed features into main\n→ Use rebase to update your feature branch with latest main\n→ Never rebase branches that others have pulled",
        "phase": "Production",
        "order": 10
      },
      {
        "title": "Final Checklist & Build Project",
        "sub": "Finish here · prove you can use Git",
        "phase": "Mastery",
        "generated": true,
        "content": "## Final Checklist: Git\n\nUse this as the last section. If you can do these without copying blindly, you are ready to move forward.\n\n### Build project\n\nCreate a repository, make feature branches, merge work, resolve a conflict, recover a mistake, and tag a release.\n\n### Knowledge checklist\n\n- I can explain and use: What is Git?.\n\n- I can explain and use: Core Concepts.\n\n- I can explain and use: Essential Git Commands.\n\n- I can explain and use: Git Workflow.\n\n- I can explain and use: Advanced Git.\n\n- I can explain and use: Git — Version Control.\n\n- I can explain and use: Git Branches & Merging.\n\n### Interview-ready explanation\n\nI can explain what Git is, why it exists, how it fits into a real full-stack project, and what mistakes beginners should avoid.\n\n### Move on when\n\n- You can build the project above.\n\n- You can debug one common failure without searching outside this site.\n\n- You can connect this topic to the next topic in the full-stack path.",
        "order": 11
      }
    ]
  },
  {
    "id": "github",
    "name": "GitHub",
    "icon": "🐙",
    "category": "Version Control",
    "level": "beginner",
    "color": "#ffffff",
    "bgColor": "#0d1117",
    "desc": "Host, collaborate & automate code",
    "sections": [
      {
        "title": "Start Here: Complete Roadmap",
        "sub": "Read this first · GitHub path",
        "phase": "Start",
        "generated": true,
        "content": "## Start Here: GitHub Complete Roadmap\n\nThis topic is arranged so a learner can start at the first lesson and keep going without leaving the website.\n\n### What you will master\n\n- Understand repositories, remotes, collaboration, pull requests, issues, and GitHub Actions.\n\n- Automate checks and deployment from your repository.\n\n- Use GitHub as the control center for real production projects.\n\n### Before you start\n\nGit basics: commits, branches, and remotes.\n\n### Learning order\n\n1. Git vs GitHub — Understanding the difference\n\n2. GitHub Features — Repos, Issues, PRs, Actions, Pages\n\n3. GitHub Actions — Automate CI/CD pipelines\n\n4. GitHub — Remote & Collaboration — DeploymentLearn archive · GITHUB\n\n5. GitHub Actions — DeploymentLearn archive · CI/CD\n\n### How to study this topic\n\n1. Read each lesson in order.\n\n2. Type the commands and code examples yourself.\n\n3. After every Build or Production lesson, explain the concept back in your own words.\n\n4. Finish with the final project and checklist section.",
        "order": 1
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How GitHub Fits the Full Project\n\nThis website teaches a complete React + Django project, not isolated tricks. Here is where **GitHub** appears in the real workflow.\n\n### In local development\n\nYou use this topic while building and testing the project on your own machine. The goal is to understand the command, the folder it runs in, and the file it changes.\n\n### In production\n\nYou use this topic again when the app is pushed to GitHub, built by a hosting platform, and served to real users. Production usually changes URLs, secrets, databases, and build commands.\n\n### What to remember\n\n- Know which folder the command must run from.\n- Know whether the command is for development or production.\n- Know what output proves the command worked.\n- Know the next topic in the workflow so you can keep moving without guessing.",
        "order": 2
      },
      {
        "title": "Git vs GitHub",
        "sub": "Understanding the difference",
        "content": "## Git vs GitHub\n\n| | Git | GitHub |\n|---|---|---|\n| Type | Software tool | Website/platform |\n| Runs on | Your computer | Cloud (microsoft.com) |\n| Purpose | Track code changes | Host & collaborate on repos |\n| Invented by | Linus Torvalds (2005) | Tom Preston-Werner (2008) |\n| Cost | Free, open source | Free tier + paid plans |\n\n### Analogy\n- **Git** = Microsoft Word (the tool)\n- **GitHub** = Google Drive (the cloud storage/sharing)\n\n### Timeline\n- **2008** — GitHub founded\n- **2011** — 1 million repositories\n- **2018** — Microsoft acquires GitHub for **$7.5 billion**\n- **2024** — 100+ million developers, 420+ million repositories\n\n### Alternatives to GitHub\n| Platform | Best For |\n|----------|----------|\n| GitLab | Self-hosting, built-in CI/CD |\n| Bitbucket | Atlassian ecosystem (Jira) |\n| Azure DevOps | Microsoft/enterprise teams |\n| Gitea | Lightweight self-hosted |",
        "phase": "Foundation",
        "order": 3
      },
      {
        "title": "GitHub Features",
        "sub": "Repos, Issues, PRs, Actions, Pages",
        "content": "## GitHub Features Every Dev Must Know\n\n### 📁 Repositories\nYour project's home. Contains code, README, issues, and history.\n- **Public** — visible to everyone (great for open source)\n- **Private** — only you and collaborators\n\n### 🐛 Issues\nTrack bugs, features, and tasks:\n```\nIssue #42: Login button not working on mobile Safari\nLabels: bug, high-priority\nAssignee: @yourname\n```\n\n### 🔀 Pull Requests (PRs)\nPropose changes before merging. Team reviews and comments on your code.\n\n### ⭐ Stars & Forks\n- **Star** = Like/bookmark a project\n- **Fork** = Copy someone's repo to your account to modify\n\n### 📄 README.md\nThe homepage of your project. Write in Markdown.\n```markdown\n# My Project\nA brief description.\n\n## Installation\n\\`\\`\\`bash\nnpm install\nnpm start\n\\`\\`\\`\n\n## Features\n- Feature 1\n- Feature 2\n```\n\n### 🌐 GitHub Pages\nHost static websites **for free**!\n- Enable in Settings → Pages\n- URL: `yourusername.github.io/repo-name`",
        "phase": "Foundation",
        "order": 4
      },
      {
        "title": "GitHub Actions",
        "sub": "Automate CI/CD pipelines",
        "content": "## GitHub Actions — Automate Everything\n\nGitHub Actions runs code automatically on events (push, PR, schedule).\n\n### Workflow File Location\n```\n.github/\n  workflows/\n    test.yml      ← Auto-run tests\n    deploy.yml    ← Auto-deploy\n```\n\n### Example: Auto-test Django on every push\n```yaml\nname: Django Tests\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n\n    steps:\n    - uses: actions/checkout@v4\n\n    - name: Set up Python\n      uses: actions/setup-python@v4\n      with:\n        python-version: '3.11'\n\n    - name: Install dependencies\n      run: pip install -r requirements.txt\n\n    - name: Run migrations\n      run: python manage.py migrate\n\n    - name: Run tests\n      run: python manage.py test\n```\n\n### Example: Deploy React to Vercel on push\n```yaml\nname: Deploy to Vercel\n\non:\n  push:\n    branches: [ main ]\n\njobs:\n  deploy:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v4\n    - uses: amondnet/vercel-action@v25\n      with:\n        vercel-token: ${{ secrets.VERCEL_TOKEN }}\n        vercel-org-id: ${{ secrets.ORG_ID }}\n        vercel-project-id: ${{ secrets.PROJECT_ID }}\n        vercel-args: '--prod'\n```\n\n### Common Use Cases\n- ✅ Run tests on every PR\n- 🚀 Auto-deploy when merged to main\n- 🔔 Send Slack/email notifications\n- 🐳 Build & push Docker images\n- 📦 Publish npm packages",
        "phase": "Build",
        "order": 5
      },
      {
        "title": "GitHub Command Center",
        "sub": "Commands for remotes, pull requests, and Actions",
        "phase": "Build",
        "generated": true,
        "content": "## GitHub Command Center\n\n### How to use these commands\n\nGitHub commands move your local Git history to the internet. Use branches and pull requests to review work before it becomes part of `main`.\n\n### Push existing project\n\n```bash\ngit remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git\ngit branch -M main\ngit push -u origin main\n```\n\n### Clone project on another machine\n\n```bash\ngit clone https://github.com/YOUR_USERNAME/YOUR_REPO.git\ncd YOUR_REPO\n```\n\n### Pull latest changes\n\n```bash\ngit pull origin main\n```\n\n### Feature branch and pull request flow\n\n```bash\ngit checkout -b feature/profile-page\ngit add .\ngit commit -m \"Add profile page\"\ngit push -u origin feature/profile-page\n```\n\nThen open GitHub and create a Pull Request.\n\n### Basic GitHub Actions file\n\nCreate `.github/workflows/ci.yml`:\n\n```yaml\nname: CI\n\non:\n  push:\n    branches: [main]\n  pull_request:\n    branches: [main]\n\njobs:\n  frontend:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: 20\n      - run: cd frontend && npm install\n      - run: cd frontend && npm run build\n```",
        "order": 6
      },
      {
        "title": "GitHub — Remote & Collaboration",
        "sub": "DeploymentLearn archive · GITHUB",
        "content": "## GitHub — Remote & Collaboration\n\n### Git vs GitHub\n\nGIT ≠ GITHUB\n\nGit: A tool installed on your computer. Tracks version history locally.\nGitHub: A website that hosts Git repositories in the cloud.\n\nGitHub adds:\n→ Remote backup of your code\n→ Collaboration (multiple devs, PRs, reviews)\n→ Issue tracking\n→ GitHub Actions (CI/CD built-in!)\n→ GitHub Pages (free hosting for static sites)\n→ Open source community\n\nAlternatives: GitLab, Bitbucket, Gitea\n\n\"Origin\" is just the nickname Git gives your remote repo.\ngit remote -v shows your configured remotes.\n\n### Remote Repository Commands\n\n\n\n```bash\n# ═══════════════════════════════════\n# CONNECT LOCAL → GITHUB\n# ═══════════════════════════════════\n# 1. Create repo on GitHub (no README)\n# 2. Run these locally:\ngit remote add origin https://github.com/user/repo.git\ngit branch -M main          # Rename branch to \"main\"\ngit push -u origin main     # Push + set upstream (-u = remember)\n\n# After first push, just use:\ngit push                    # Push to tracked remote\ngit pull                    # Fetch + merge from remote\n\n# ═══════════════════════════════════\n# FETCH vs PULL\n# ═══════════════════════════════════\ngit fetch origin            # Download changes BUT don't merge\ngit merge origin/main       # Merge fetched changes manually\n# OR shortcut:\ngit pull                    # fetch + merge in one command\ngit pull --rebase           # fetch + rebase (cleaner)\n\n# ═══════════════════════════════════\n# FORK WORKFLOW (open source)\n# ═══════════════════════════════════\n# 1. Fork repo on GitHub (copy to your account)\n# 2. Clone YOUR fork:\ngit clone https://github.com/YOU/repo.git\n\n# 3. Add upstream remote (original repo):\ngit remote add upstream https://github.com/ORIGINAL/repo.git\n\n# 4. Keep your fork updated:\ngit fetch upstream\ngit merge upstream/main\n\n# 5. Push changes to YOUR fork, then open Pull Request\n\n# ═══════════════════════════════════\n# SSH vs HTTPS\n# ═══════════════════════════════════\n# HTTPS: Simple, needs token on push\n# SSH: Set up once, no password ever\n\n# Generate SSH key:\nssh-keygen -t ed25519 -C \"you@example.com\"\n# Add public key to GitHub Settings → SSH Keys\n# Use: git@github.com:user/repo.git\n```\n\n### Pull Requests & Code Review\n\nPULL REQUEST (PR) = \"I made changes, please review and merge them\"\n\nPR WORKFLOW:\n1. Create feature branch locally\n2. Make commits, push to GitHub\n3. Open PR on GitHub (base: main ← compare: feature/login)\n4. Team reviews your code → comment, request changes, approve\n5. Fix issues, push more commits to same branch\n6. PR gets approved → MERGE into main\n7. Delete feature branch\n\nWHY PRs MATTER:\n✅ Catch bugs before they hit production\n✅ Knowledge sharing across team\n✅ Documented record of WHY changes were made\n✅ Automated CI checks run on every PR\n\nPR BEST PRACTICES:\n→ Small, focused PRs are reviewed faster\n→ Write a clear description of WHAT and WHY\n→ Link related issues (#123)\n→ Request specific reviewers\n→ One PR per feature/fix\n\n### .gitignore — What NOT to Track\n\n\n\n```bash\n# ═══════════════════════════════════\n# .gitignore — NEVER commit these!\n# ═══════════════════════════════════\n\n# Python / Django\n__pycache__/\n*.pyc\n*.pyo\nvenv/\n.env\n*.sqlite3\nstaticfiles/\nmedia/\n\n# Node / React\nnode_modules/\ndist/\nbuild/\n.env\n.env.local\n.env.production\n\n# Docker\n*.log\n\n# IDEs\n.vscode/\n.idea/\n*.swp\n\n# OS files\n.DS_Store          # macOS\nThumbs.db          # Windows\n\n# ─────────────────────────────────\n# CRITICAL: Never commit secrets!\n# API keys, passwords, tokens go\n# in environment variables, NOT code.\n# ─────────────────────────────────\n\n# Check what would be committed:\ngit status\ngit diff --cached\n\n# See ignored files:\ngit status --ignored\n```",
        "phase": "Production",
        "order": 7
      },
      {
        "title": "GitHub Actions",
        "sub": "DeploymentLearn archive · CI/CD",
        "content": "## GitHub Actions\n\n### How GitHub Actions Works\n\nGitHub Actions = CI/CD built directly into GitHub.\n\nKEY CONCEPTS:\n\nWORKFLOW: A YAML file in .github/workflows/\nDefines the full automation. Triggered by events.\n\nEVENT: What triggers the workflow?\n→ push to main\n→ pull_request opened\n→ schedule (cron)\n→ manual trigger (workflow_dispatch)\n\nJOB: A set of steps that run on a RUNNER (virtual machine).\nMultiple jobs can run in parallel.\n\nSTEP: A single command or Action.\nCan be: shell commands OR pre-built Actions from Marketplace.\n\nACTION: A reusable unit of work.\nactions/checkout@v4 — checks out your code\nactions/setup-python@v5 — installs Python\ndocker/build-push-action@v5 — builds & pushes Docker image\n\nRUNNER: A VM that runs your jobs.\nGitHub provides: ubuntu-latest, windows-latest, macos-latest (free!)\nOr you can host your own runner.\n\n### Django CI Pipeline\n\n\n\n```yaml\n# ═══════════════════════════════════\n# .github/workflows/django-ci.yml\n# Runs on every push + pull request\n# ═══════════════════════════════════\n\nname: Django CI\n\non:\n  push:\n    branches: [ main, develop ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  test:\n    runs-on: ubuntu-latest\n\n    # ─── Service containers (like docker compose for CI) ───\n    services:\n      postgres:\n        image: postgres:16\n        env:\n          POSTGRES_DB: test_db\n          POSTGRES_USER: test_user\n          POSTGRES_PASSWORD: test_pass\n        options: >-\n          --health-cmd pg_isready\n          --health-interval 10s\n          --health-timeout 5s\n          --health-retries 5\n        ports:\n          - 5432:5432\n\n    steps:\n      # Step 1: Download your code\n      - name: Checkout code\n        uses: actions/checkout@v4\n\n      # Step 2: Install Python\n      - name: Set up Python 3.11\n        uses: actions/setup-python@v5\n        with:\n          python-version: '3.11'\n          cache: 'pip'            # Cache pip dependencies (faster)\n\n      # Step 3: Install dependencies\n      - name: Install dependencies\n        run: |\n          pip install -r requirements.txt\n\n      # Step 4: Run linter\n      - name: Lint with flake8\n        run: |\n          pip install flake8\n          flake8 . --max-line-length=120\n\n      # Step 5: Run tests with coverage\n      - name: Run tests\n        env:\n          DATABASE_URL: postgres://test_user:test_pass@localhost:5432/test_db\n          SECRET_KEY: test-secret-key\n          DEBUG: \"False\"\n        run: |\n          python manage.py migrate\n          python manage.py test --verbosity=2\n```\n\n### React CI + Docker Build & Push\n\n\n\n```yaml\n# ═══════════════════════════════════\n# .github/workflows/deploy.yml\n# Test → Build Docker image → Push to registry → Deploy\n# ═══════════════════════════════════\n\nname: Build and Deploy\n\non:\n  push:\n    branches: [ main ]\n\njobs:\n  # ─── JOB 1: Test ───────────────────────────\n  test:\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n      - uses: actions/setup-node@v4\n        with:\n          node-version: '20'\n          cache: 'npm'\n\n      - name: Install and test\n        run: |\n          cd frontend\n          npm ci\n          npm run lint\n          npm test -- --watchAll=false\n\n  # ─── JOB 2: Build & Push Docker ────────────\n  build:\n    needs: test          # Only runs if test job PASSES\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v4\n\n      # Log in to Docker Hub\n      - name: Login to Docker Hub\n        uses: docker/login-action@v3\n        with:\n          username: ${{ secrets.DOCKERHUB_USERNAME }}\n          password: ${{ secrets.DOCKERHUB_TOKEN }}\n\n      # Build and push image\n      - name: Build and push\n        uses: docker/build-push-action@v5\n        with:\n          context: ./frontend\n          push: true\n          tags: yourusername/myapp-frontend:latest\n\n  # ─── JOB 3: Deploy to Render ───────────────\n  deploy:\n    needs: build\n    runs-on: ubuntu-latest\n    steps:\n      - name: Trigger Render Deploy\n        run: |\n          curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }}\n```\n\n### GitHub Secrets & Environment Variables\n\nNEVER put secrets in your workflow files!\n\nGitHub Secrets: Encrypted variables stored in GitHub, injected at runtime.\nAccess them in workflows as: ${{ secrets.MY_SECRET }}\n\nWHERE TO ADD SECRETS:\nRepository Settings → Secrets and variables → Actions → New secret\n\nCOMMON SECRETS:\nDOCKERHUB_USERNAME, DOCKERHUB_TOKEN — Docker Hub credentials\nAWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY — AWS deployment\nRENDER_DEPLOY_HOOK — Render auto-deploy URL\nDATABASE_URL — Production DB connection string\nSECRET_KEY — Django secret key\n\nEnvironment secrets (per-environment): staging vs production can have different secrets.\n\nPROTECTED ENVIRONMENTS:\nSettings → Environments → production\n→ Require reviewers before deploying to production\n→ Only allow main branch to deploy to production\n→ This prevents accidental deploys of untested code",
        "phase": "Production",
        "order": 8
      },
      {
        "title": "Final Checklist & Build Project",
        "sub": "Finish here · prove you can use GitHub",
        "phase": "Mastery",
        "generated": true,
        "content": "## Final Checklist: GitHub\n\nUse this as the last section. If you can do these without copying blindly, you are ready to move forward.\n\n### Build project\n\nHost the project on GitHub, open a pull request, run GitHub Actions checks, and document issues/tasks.\n\n### Knowledge checklist\n\n- I can explain and use: Git vs GitHub.\n\n- I can explain and use: GitHub Features.\n\n- I can explain and use: GitHub Actions.\n\n- I can explain and use: GitHub — Remote & Collaboration.\n\n- I can explain and use: GitHub Actions.\n\n### Interview-ready explanation\n\nI can explain what GitHub is, why it exists, how it fits into a real full-stack project, and what mistakes beginners should avoid.\n\n### Move on when\n\n- You can build the project above.\n\n- You can debug one common failure without searching outside this site.\n\n- You can connect this topic to the next topic in the full-stack path.",
        "order": 9
      }
    ]
  },
  {
    "id": "docker",
    "name": "Docker",
    "icon": "🐳",
    "category": "DevOps",
    "level": "intermediate",
    "color": "#2496ed",
    "bgColor": "#071525",
    "desc": "Containerize apps — run anywhere",
    "sections": [
      {
        "title": "Start Here: Complete Roadmap",
        "sub": "Read this first · Docker path",
        "phase": "Start",
        "generated": true,
        "content": "## Start Here: Docker Complete Roadmap\n\nThis topic is arranged so a learner can start at the first lesson and keep going without leaving the website.\n\n### What you will master\n\n- Understand containers, images, Dockerfiles, volumes, networks, Compose, and production Docker practices.\n\n- Package React and Django so they run consistently on any machine.\n\n- Prepare apps for cloud deployment and CI/CD pipelines.\n\n### Before you start\n\nTerminal basics, simple web app knowledge, and comfort reading config files.\n\n### Learning order\n\n1. What is Docker? — Containers vs Virtual Machines\n\n2. Dockerfile — Build your own Docker image\n\n3. Docker Commands — Complete Docker CLI cheatsheet\n\n4. Docker Compose — Run multi-container applications\n\n5. Docker — Intro & Concepts — DeploymentLearn archive · DOCKER\n\n6. Dockerfile — Build Your Image — DeploymentLearn archive · DOCKER\n\n7. Docker Compose — Multi-Container — DeploymentLearn archive · DOCKER\n\n8. Docker Advanced — Missing Pieces — DeploymentLearn archive · DOCKER\n\n### How to study this topic\n\n1. Read each lesson in order.\n\n2. Type the commands and code examples yourself.\n\n3. After every Build or Production lesson, explain the concept back in your own words.\n\n4. Finish with the final project and checklist section.",
        "order": 1
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How Docker Fits the Full Project\n\nThis website teaches a complete React + Django project, not isolated tricks. Here is where **Docker** appears in the real workflow.\n\n### In local development\n\nYou use this topic while building and testing the project on your own machine. The goal is to understand the command, the folder it runs in, and the file it changes.\n\n### In production\n\nYou use this topic again when the app is pushed to GitHub, built by a hosting platform, and served to real users. Production usually changes URLs, secrets, databases, and build commands.\n\n### What to remember\n\n- Know which folder the command must run from.\n- Know whether the command is for development or production.\n- Know what output proves the command worked.\n- Know the next topic in the workflow so you can keep moving without guessing.",
        "order": 2
      },
      {
        "title": "What is Docker?",
        "sub": "Containers vs Virtual Machines",
        "content": "## What is Docker?\n\nDocker (released 2013) solves the classic **\"works on my machine\"** problem. It packages your app + all its dependencies into a **container** that runs identically everywhere.\n\n### Container vs Virtual Machine\n\n| | Container | Virtual Machine |\n|---|---|---|\n| Size | MBs | GBs |\n| Boot time | Seconds | Minutes |\n| OS | Shares host kernel | Full OS copy |\n| Performance | Near-native | Slower |\n\n### Key Terms\n- 🖼️ **Image** — Blueprint/recipe (read-only)\n- 📦 **Container** — Running instance of an image\n- 📄 **Dockerfile** — Instructions to build an image\n- 🏪 **Docker Hub** — Public registry of images\n- 🔗 **Docker Compose** — Multi-container orchestration\n\n### Why Docker?\n- ✅ Same environment everywhere (dev, test, prod)\n- ✅ Isolate apps and their dependencies\n- ✅ Easy to scale up/down\n- ✅ Microservices architecture\n- ✅ Used by Netflix, Uber, PayPal, Spotify",
        "phase": "Foundation",
        "order": 3
      },
      {
        "title": "Dockerfile",
        "sub": "Build your own Docker image",
        "content": "## Writing a Dockerfile\n\nA Dockerfile is a text file with instructions to build an image.\n\n### Django Dockerfile Example\n```dockerfile\n# Start from official Python image\nFROM python:3.11-slim\n\n# Set working directory inside container\nWORKDIR /app\n\n# Copy requirements first (for better caching)\nCOPY requirements.txt .\n\n# Install Python dependencies\nRUN pip install --no-cache-dir -r requirements.txt\n\n# Copy rest of the application\nCOPY . .\n\n# Expose the port Django will run on\nEXPOSE 8000\n\n# Command to run when container starts\nCMD [\"gunicorn\", \"myproject.wsgi:application\", \"--bind\", \"0.0.0.0:8000\"]\n```\n\n### React Dockerfile Example\n```dockerfile\nFROM node:18-alpine AS build\nWORKDIR /app\nCOPY package*.json ./\nRUN npm install\nCOPY . .\nRUN npm run build\n\nFROM nginx:alpine\nCOPY --from=build /app/build /usr/share/nginx/html\nEXPOSE 80\nCMD [\"nginx\", \"-g\", \"daemon off;\"]\n```\n\n### Build & Run\n```bash\ndocker build -t myapp .           # Build image\ndocker run -p 8000:8000 myapp     # Run container\ndocker run -d -p 8000:8000 myapp  # Run in background\n```",
        "phase": "Foundation",
        "order": 4
      },
      {
        "title": "Docker Commands",
        "sub": "Complete Docker CLI cheatsheet",
        "content": "## Docker Commands Cheatsheet\n\n### Images\n```bash\ndocker pull python:3.11       # Download image from Hub\ndocker images                 # List all local images\ndocker rmi python:3.11        # Remove image\ndocker build -t myapp .       # Build from Dockerfile\ndocker push myapp             # Push to Docker Hub\n```\n\n### Containers\n```bash\ndocker run nginx              # Run a container\ndocker run -d nginx           # Run detached (background)\ndocker run -p 8080:80 nginx   # Map port host:container\ndocker run -v /data:/app/data nginx  # Mount volume\ndocker ps                     # List running containers\ndocker ps -a                  # List all containers\ndocker stop [id/name]         # Stop container\ndocker start [id/name]        # Start stopped container\ndocker restart [id/name]      # Restart container\ndocker rm [id/name]           # Remove container\ndocker logs [id/name]         # View container logs\ndocker logs -f [id/name]      # Follow logs live\ndocker exec -it [id] bash     # Enter container shell\ndocker inspect [id]           # Detailed info\ndocker stats                  # Live resource usage\n```\n\n### System\n```bash\ndocker system prune           # Remove unused everything\ndocker volume ls              # List volumes\ndocker network ls             # List networks\n```",
        "phase": "Foundation",
        "order": 5
      },
      {
        "title": "Docker Compose",
        "sub": "Run multi-container applications",
        "content": "## Docker Compose\n\nCompose lets you define and run **multi-container** applications with a single YAML file.\n\n### Django + PostgreSQL + Redis Example\n```yaml\n# docker-compose.yml\nversion: '3.8'\n\nservices:\n  web:\n    build: .\n    ports:\n      - \"8000:8000\"\n    volumes:\n      - .:/app\n    environment:\n      - DEBUG=1\n      - DATABASE_URL=postgresql://user:pass@db:5432/mydb\n    depends_on:\n      - db\n      - redis\n    command: python manage.py runserver 0.0.0.0:8000\n\n  db:\n    image: postgres:15\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n    environment:\n      POSTGRES_DB: mydb\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: pass\n\n  redis:\n    image: redis:7-alpine\n    ports:\n      - \"6379:6379\"\n\nvolumes:\n  postgres_data:\n```\n\n### Compose Commands\n```bash\ndocker-compose up             # Start all services\ndocker-compose up --build     # Rebuild then start\ndocker-compose up -d          # Start in background\ndocker-compose down           # Stop and remove containers\ndocker-compose down -v        # Also remove volumes\ndocker-compose logs web       # Logs for specific service\ndocker-compose exec web bash  # Shell into service\ndocker-compose ps             # Status of all services\n```",
        "phase": "Build",
        "order": 6
      },
      {
        "title": "Docker — Intro & Concepts",
        "sub": "DeploymentLearn archive · DOCKER",
        "content": "## Docker — Intro & Concepts\n\n### What is Docker & Why?\n\n\"It works on my machine!\" — The classic developer problem.\n\nBEFORE DOCKER:\n→ Dev uses Python 3.10, server has Python 3.8 → bug\n→ Dev uses Ubuntu, CI runs on Alpine → different behavior\n→ Dev installs lib X, another dev forgets → app crashes\n→ Setting up project takes hours for new devs\n\nDOCKER SOLUTION:\nDocker packages your app + ALL its dependencies into a CONTAINER.\n\nA container is like a lightweight VM that:\n✅ Has its own OS environment (Linux)\n✅ Has exact versions of Python, Node, libraries\n✅ Runs identically on any machine (Mac, Windows, Linux, cloud)\n✅ Starts in seconds (not minutes like VMs)\n✅ Can run many containers on one server\n\nReal-world use:\n→ Django app container + PostgreSQL container + Redis container\n→ All start together with docker compose up\n→ Same setup on every developer's machine AND on the server\n\n### Images vs Containers\n\nIMAGE:\nA read-only template/blueprint for creating containers.\nThink: a class definition in Python, or a Django model.\nExamples: python:3.11, node:20-alpine, postgres:16\n\nIMAGE → built from a Dockerfile\nIMAGE → stored in Docker Hub (public registry) or private registry\nIMAGE → can be versioned (python:3.11, python:3.10, python:latest)\n\nCONTAINER:\nA RUNNING INSTANCE of an image.\nThink: an object created from a class, or a DB row from a model.\nYou can run MANY containers from the same image.\n\nANALOGY:\nImage = Blueprint of a house\nContainer = Actual house built from that blueprint\n\nDOCKER HUB (hub.docker.com):\nThe \"GitHub for Docker images\"\n→ Official images: python, node, postgres, redis, nginx\n→ Community images: everyone can publish\n→ docker pull python:3.11-slim downloads an image\n\n### Essential Docker Commands\n\n\n\n```yaml\n# ═══════════════════════════════════\n# IMAGES\n# ═══════════════════════════════════\ndocker pull python:3.11-slim       # Download image from Docker Hub\ndocker images                      # List all local images\ndocker rmi python:3.11-slim        # Remove an image\ndocker build -t myapp:1.0 .        # Build image from Dockerfile in .\n\n# ═══════════════════════════════════\n# CONTAINERS\n# ═══════════════════════════════════\ndocker run python:3.11-slim        # Create + start container\ndocker run -it python:3.11 bash    # Interactive terminal inside container\ndocker run -d -p 8000:8000 myapp   # Detached, map host:container ports\ndocker ps                          # List running containers\ndocker ps -a                       # List ALL containers (incl. stopped)\ndocker stop <name/id>              # Gracefully stop container\ndocker rm <name/id>                # Remove stopped container\ndocker logs <name/id>              # View container output logs\ndocker exec -it <name> bash        # Shell into running container\n\n# ═══════════════════════════════════\n# VOLUMES (data persistence)\n# ═══════════════════════════════════\ndocker run -v /host/path:/container/path myapp\ndocker volume create mydata\ndocker volume ls\n\n# ═══════════════════════════════════\n# CLEANUP\n# ═══════════════════════════════════\ndocker system prune                # Remove all unused resources\ndocker container prune             # Remove all stopped containers\ndocker image prune                 # Remove dangling images\n```",
        "phase": "Build",
        "order": 7
      },
      {
        "title": "Docker Command Center",
        "sub": "Commands to build images and run containers",
        "phase": "Build",
        "generated": true,
        "content": "## Docker Command Center\n\n### How to use these commands\n\nDocker commands are for packaging and running apps the same way on every machine. Use Compose when your project has multiple services such as React, Django, PostgreSQL, and Redis.\n\n### Check Docker\n\n```bash\ndocker --version\ndocker compose version\n```\n\n### Build an image\n\n```bash\ndocker build -t my-app .\n```\n\n### Run a container\n\n```bash\ndocker run --name my-app-container -p 8000:8000 my-app\n```\n\n### See containers and images\n\n```bash\ndocker ps\ndocker ps -a\ndocker images\n```\n\n### Stop and remove\n\n```bash\ndocker stop my-app-container\ndocker rm my-app-container\ndocker rmi my-app\n```\n\n### Docker Compose daily workflow\n\n```bash\ndocker compose up --build\ndocker compose up -d\ndocker compose logs -f\ndocker compose down\n```\n\n### Run Django commands inside container\n\n```bash\ndocker compose exec backend python manage.py migrate\ndocker compose exec backend python manage.py createsuperuser\n```",
        "order": 8
      },
      {
        "title": "Dockerfile — Build Your Image",
        "sub": "DeploymentLearn archive · DOCKER",
        "content": "## Dockerfile — Build Your Image\n\n### What is a Dockerfile?\n\nA Dockerfile is a text file with instructions to BUILD a Docker image.\n\nIt's like a recipe: \"Start with Ubuntu, install Python, copy my code, run the server.\"\n\nDocker reads the Dockerfile top to bottom and creates a LAYERED image.\nEach instruction = one layer.\nLayers are CACHED — if nothing changed, Docker reuses the cached layer (fast builds!).\n\nLAYER CACHING STRATEGY:\n→ Put things that change RARELY at the top (OS, Python install)\n→ Put things that change OFTEN at the bottom (your code)\n→ Why? Each changed layer invalidates ALL layers below it\n→ So: copy requirements.txt first, install, THEN copy your code\n\n### Django Dockerfile\n\n\n\n```yaml\n# ═══════════════════════════════════\n# Dockerfile — Django App\n# ═══════════════════════════════════\n\n# Base image: Official Python slim (smaller than full)\n# \"slim\" = minimal OS, no extra tools\nFROM python:3.11-slim\n\n# Set working directory inside the container\nWORKDIR /app\n\n# Prevent Python from writing .pyc files (keeps image clean)\nENV PYTHONDONTWRITEBYTECODE=1\n# Prevent Python from buffering stdout/stderr (see logs immediately)\nENV PYTHONUNBUFFERED=1\n\n# ─────────────────────────────────\n# LAYER CACHING TRICK:\n# Copy ONLY requirements.txt first.\n# If requirements don't change, Docker\n# skips the pip install layer (fast!)\n# ─────────────────────────────────\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\n# NOW copy the rest of your code\n# (changes here don't bust the pip cache)\nCOPY . .\n\n# Collect Django static files\nRUN python manage.py collectstatic --noinput\n\n# Expose the port the app runs on\nEXPOSE 8000\n\n# Command to run when container starts\n# Using gunicorn (production WSGI server, not manage.py runserver!)\nCMD [\"gunicorn\", \"myproject.wsgi:application\", \"--bind\", \"0.0.0.0:8000\"]\n```\n\n### React/Vite Dockerfile\n\n\n\n```bash\n# ═══════════════════════════════════\n# Dockerfile — React + Vite (Multi-stage)\n# ═══════════════════════════════════\n\n# ─────────────────────────────────\n# STAGE 1: BUILD\n# Install deps and build the React app\n# ─────────────────────────────────\nFROM node:20-alpine AS builder\n\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production=false\n\nCOPY . .\nRUN npm run build\n# Creates /app/dist/ with static HTML/CSS/JS\n\n# ─────────────────────────────────\n# STAGE 2: SERVE\n# Use lightweight nginx to serve the built files\n# The final image has ZERO Node.js or source code!\n# ─────────────────────────────────\nFROM nginx:alpine\n\n# Copy built files from stage 1 into nginx's serve directory\nCOPY --from=builder /app/dist /usr/share/nginx/html\n\n# Optional: custom nginx config (for React Router SPA routing)\n# COPY nginx.conf /etc/nginx/conf.d/default.conf\n\nEXPOSE 80\nCMD [\"nginx\", \"-g\", \"daemon off;\"]\n\n# ─────────────────────────────────\n# Result: Tiny image (~25MB vs ~500MB)\n# No node_modules, no source code in prod!\n# ─────────────────────────────────\n```\n\n### .dockerignore\n\n\n\n```\n# ═══════════════════════════════════\n# .dockerignore — Like .gitignore for Docker\n# Prevents these files from being COPIED into image\n# Smaller image, faster builds, no secrets leaked!\n# ═══════════════════════════════════\n\n# Python\n__pycache__\n*.pyc\n*.pyo\nvenv/\n.env\n*.sqlite3\n\n# Node\nnode_modules/\ndist/\nbuild/\n\n# Git (no need in image)\n.git/\n.gitignore\n\n# Docker files themselves\nDockerfile\ndocker-compose*.yml\n.dockerignore\n\n# Docs & tests (not needed in prod image)\nREADME.md\ntests/\ndocs/\n\n# IDE\n.vscode/\n.idea/\n```",
        "phase": "Production",
        "order": 9
      },
      {
        "title": "Docker Compose — Multi-Container",
        "sub": "DeploymentLearn archive · DOCKER",
        "content": "## Docker Compose — Multi-Container\n\n### What is Docker Compose?\n\nA real app has MULTIPLE services:\n→ Django backend\n→ React frontend\n→ PostgreSQL database\n→ Redis cache\n\nRunning each with long docker run commands is painful.\n\nDocker Compose solves this with a YAML file (docker-compose.yml) that defines ALL services and starts them together with ONE command:\n\ndocker compose up\n\nDocker Compose handles:\n✅ Start all containers in correct order\n✅ Shared network (services talk to each other by name)\n✅ Volume mounting (data persistence)\n✅ Environment variables\n✅ Port forwarding\n\nFor development: docker compose up --build\nFor production: Docker Compose OR Kubernetes (for scale)\n\n### docker-compose.yml — Django + React + PostgreSQL\n\n\n\n```yaml\n# ═══════════════════════════════════\n# docker-compose.yml\n# Full-stack: Django + React + Postgres + Redis\n# ═══════════════════════════════════\n\nversion: '3.9'\n\nservices:\n\n  # ─── PostgreSQL Database ───────────────────\n  db:\n    image: postgres:16-alpine     # Official Postgres image\n    volumes:\n      - postgres_data:/var/lib/postgresql/data  # Persist DB data\n    environment:\n      POSTGRES_DB: myapp_db\n      POSTGRES_USER: myapp_user\n      POSTGRES_PASSWORD: supersecretpassword\n    ports:\n      - \"5432:5432\"               # Optional: expose to host for DB tools\n\n  # ─── Redis Cache ───────────────────────────\n  redis:\n    image: redis:7-alpine\n    ports:\n      - \"6379:6379\"\n\n  # ─── Django Backend ────────────────────────\n  backend:\n    build:\n      context: ./backend          # Build from ./backend/Dockerfile\n      dockerfile: Dockerfile\n    command: >\n      sh -c \"python manage.py migrate &&\n             gunicorn myproject.wsgi:application --bind 0.0.0.0:8000\"\n    volumes:\n      - ./backend:/app            # Mount code (hot-reload in dev)\n      - static_files:/app/staticfiles\n    ports:\n      - \"8000:8000\"\n    environment:\n      DATABASE_URL: postgres://myapp_user:supersecretpassword@db:5432/myapp_db\n      REDIS_URL: redis://redis:6379/0\n      SECRET_KEY: dev-secret-key-change-in-prod\n      DEBUG: \"True\"\n    depends_on:\n      - db                        # Wait for db to start first\n      - redis\n\n  # ─── React Frontend ────────────────────────\n  frontend:\n    build:\n      context: ./frontend\n      dockerfile: Dockerfile\n    ports:\n      - \"3000:80\"                 # Nginx serves on port 80 inside\n    depends_on:\n      - backend\n\n# ─── Volumes (named, persistent) ───────────\nvolumes:\n  postgres_data:    # DB data survives container restart\n  static_files:     # Django collectstatic output\n```\n\n### Docker Compose Commands\n\n\n\n```bash\ndocker compose up\ndocker compose up -d\ndocker compose up --build\ndocker compose down\ndocker compose down -v\ndocker compose logs -f backend\ndocker compose ps\ndocker compose exec backend bash\ndocker compose exec backend python manage.py migrate\n```",
        "phase": "Production",
        "order": 10
      },
      {
        "title": "Docker Advanced — Missing Pieces",
        "sub": "DeploymentLearn archive · DOCKER",
        "content": "## Docker Advanced — Missing Pieces\n\n### Docker Volumes — Persistent Data\n\nContainer file systems are EPHEMERAL — when a container stops, all data inside is lost.\n\nTHE PROBLEM:\ndocker run postgres:16\n# PostgreSQL creates database files inside the container\n# docker stop → docker rm → ALL DATABASE DATA GONE 😱\n\nSOLUTION: Volumes\n\nVOLUME TYPES:\n1. Named volumes (recommended):\n   → Managed by Docker\n   → Persists across container restarts and removals\n   → Lives in /var/lib/docker/volumes/\n\n2. Bind mounts:\n   → Maps a host directory into the container\n   → Changes on host immediately visible in container\n   → Used for local dev: mount your source code\n\n3. tmpfs mounts:\n   → In memory only, not persisted\n   → For sensitive data that shouldn't touch disk\n\nWHY VOLUMES MATTER FOR DEPLOYMENT:\n→ Database containers MUST use volumes (or use managed DB services)\n→ User-uploaded files should be in volumes (or S3/R2)\n→ Log files should be in volumes for persistence\n\n### Volumes in Practice\n\n\n\n```yaml\n# ═══════════════════════════════════\n# Docker volumes — named & bind mounts\n# ═══════════════════════════════════\n\n# ─── Named volume (production pattern) ────────\n# docker-compose.yml\nservices:\n  db:\n    image: postgres:16\n    volumes:\n      - postgres_data:/var/lib/postgresql/data   # Named volume\n    environment:\n      POSTGRES_DB: myapp\n      POSTGRES_USER: user\n      POSTGRES_PASSWORD: pass\n\n  redis:\n    image: redis:7-alpine\n    volumes:\n      - redis_data:/data\n\n  backend:\n    build: .\n    volumes:\n      - static_files:/app/staticfiles    # Django static files\n      - media_files:/app/media           # User uploads\n\nvolumes:                    # Declare named volumes at bottom\n  postgres_data:\n  redis_data:\n  static_files:\n  media_files:\n\n# ─── Bind mount (development pattern) ─────────\nservices:\n  backend:\n    build: .\n    volumes:\n      # Mount source code → code changes reflect immediately!\n      - ./backend:/app    # Host path : Container path\n      # But DON'T mount over node_modules or venv:\n      - /app/.venv        # Anonymous volume = use container's version\n\n# ─── Volume CLI commands ───────────────────────\ndocker volume ls                          # List all volumes\ndocker volume inspect postgres_data       # Details about a volume\ndocker volume rm postgres_data            # Delete volume (DATA LOSS!)\ndocker volume prune                       # Delete all unused volumes\n\n# ─── Backup a volume ──────────────────────────\ndocker run --rm \\\n  -v postgres_data:/data \\\n  -v $(pwd):/backup \\\n  alpine tar czf /backup/postgres_backup.tar.gz /data\n# Creates postgres_backup.tar.gz in current directory\n```\n\n### Docker Networks\n\n\n\n```yaml\n# ═══════════════════════════════════\n# Docker networking — how containers talk\n# ═══════════════════════════════════\n\n# ─── The problem ──────────────────────────────\n# Container A can't just say \"connect to localhost:5432\"\n# \"localhost\" inside a container = that container itself\n# To reach PostgreSQL in another container, use its SERVICE NAME\n\n# In docker-compose.yml, services can reach each other by name:\nservices:\n  backend:\n    environment:\n      DATABASE_URL: postgres://user:pass@db:5432/myapp\n      #                                    ^^\n      #                         Service name = hostname!\n      REDIS_URL: redis://redis:6379/0\n      #                   ^^^^^\n      #                   Redis service name\n\n  db:\n    image: postgres:16\n\n  redis:\n    image: redis:7-alpine\n\n# Docker Compose creates a default network automatically\n# All services in the same compose file can reach each other by name!\n\n# ─── Custom networks ──────────────────────────\nservices:\n  backend:\n    networks:\n      - internal    # Can talk to DB\n      - external    # Can be reached from outside\n\n  db:\n    networks:\n      - internal    # ONLY backend can reach DB (more secure!)\n      # Not in 'external' network!\n\n  nginx:\n    ports:\n      - \"80:80\"     # Only nginx is exposed to internet\n    networks:\n      - external\n\nnetworks:\n  internal:\n  external:\n\n# ─── Expose vs Ports ──────────────────────────\n# ports: \"8000:8000\"   → Accessible from HOST machine (and internet)\n# expose: \"8000\"       → Accessible to other containers ONLY (not host)\n\nservices:\n  backend:\n    expose:\n      - \"8000\"       # Nginx can reach it, internet cannot directly\n  nginx:\n    ports:\n      - \"80:80\"      # Only nginx exposed to internet\n```\n\n### Multi-Stage Builds — Optimized Images\n\n\n\n```yaml\n# ═══════════════════════════════════\n# Multi-stage Dockerfile\n# Build small, production-ready images\n# ═══════════════════════════════════\n\n# ─── React + Vite (Frontend) ──────────────────\n# Stage 1: Build\nFROM node:20-alpine AS builder\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production      # Only install prod deps\nCOPY . .\nRUN npm run build                  # Creates /app/dist\n\n# Stage 2: Serve (tiny Nginx image)\nFROM nginx:alpine AS production\nCOPY --from=builder /app/dist /usr/share/nginx/html\nCOPY nginx.conf /etc/nginx/conf.d/default.conf\n\nEXPOSE 80\nCMD [\"nginx\", \"-g\", \"daemon off;\"]\n\n# Final image: ~25MB instead of 1.2GB!\n# The node_modules are gone — they were only needed for building.\n\n# ─── Django (Backend) ──────────────────────────\n# Stage 1: Install dependencies\nFROM python:3.11-slim AS deps\nWORKDIR /app\nCOPY requirements.txt .\nRUN pip install --no-cache-dir -r requirements.txt\n\n# Stage 2: Production image\nFROM python:3.11-slim AS production\nWORKDIR /app\n\n# Copy installed packages from deps stage\nCOPY --from=deps /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages\nCOPY --from=deps /usr/local/bin /usr/local/bin\n\n# Copy app code\nCOPY . .\n\n# Non-root user for security\nRUN adduser --disabled-password --gecos \"\" appuser\nUSER appuser\n\nEXPOSE 8000\nCMD [\"gunicorn\", \"myapp.wsgi:application\", \"--bind\", \"0.0.0.0:8000\", \"--workers\", \"2\"]\n\n# ─── Build & check size ───────────────────────\ndocker build -t myapp-backend .\ndocker images myapp-backend\n# Compare with non-multi-stage — usually 3-5x smaller!\n```\n\n### Docker Health Checks & Logging\n\n\n\n```yaml\n# ═══════════════════════════════════\n# Health checks — know if your container is alive\n# ═══════════════════════════════════\n\n# Dockerfile health check\nHEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \\\n  CMD curl -f http://localhost:8000/api/health/ || exit 1\n\n# docker-compose.yml health check\nservices:\n  backend:\n    healthcheck:\n      test: [\"CMD\", \"curl\", \"-f\", \"http://localhost:8000/api/health/\"]\n      interval: 30s\n      timeout: 10s\n      retries: 3\n      start_period: 40s\n\n  db:\n    image: postgres:16\n    healthcheck:\n      test: [\"CMD-SHELL\", \"pg_isready -U myuser -d myapp\"]\n      interval: 10s\n      retries: 5\n\n  backend:\n    depends_on:\n      db:\n        condition: service_healthy   # Wait for DB to be healthy!\n\n# Check health status\ndocker ps          # Shows STATUS column: \"healthy\" / \"unhealthy\" / \"starting\"\ndocker inspect --format='{{.State.Health.Status}}' container_name\n\n# ─── Logging ──────────────────────────────────\n# View logs\ndocker logs myapp-backend                    # All logs\ndocker logs myapp-backend --tail 100         # Last 100 lines\ndocker logs myapp-backend -f                 # Follow (live)\ndocker logs myapp-backend --since 1h         # Last hour\n\n# Configure log driver in docker-compose.yml\nservices:\n  backend:\n    logging:\n      driver: \"json-file\"      # Default: saves logs as JSON\n      options:\n        max-size: \"10m\"        # Max 10MB per log file\n        max-file: \"3\"          # Keep 3 log files (rotation)\n\n# For production, ship logs to a service:\n# → AWS CloudWatch\n# → Papertrail\n# → Datadog\n# → Logtail (Better Stack)\n```",
        "phase": "Production",
        "order": 11
      },
      {
        "title": "Final Checklist & Build Project",
        "sub": "Finish here · prove you can use Docker",
        "phase": "Mastery",
        "generated": true,
        "content": "## Final Checklist: Docker\n\nUse this as the last section. If you can do these without copying blindly, you are ready to move forward.\n\n### Build project\n\nContainerize the React frontend and Django backend, then run them together with Docker Compose.\n\n### Knowledge checklist\n\n- I can explain and use: What is Docker?.\n\n- I can explain and use: Dockerfile.\n\n- I can explain and use: Docker Commands.\n\n- I can explain and use: Docker Compose.\n\n- I can explain and use: Docker — Intro & Concepts.\n\n- I can explain and use: Dockerfile — Build Your Image.\n\n- I can explain and use: Docker Compose — Multi-Container.\n\n- I can explain and use: Docker Advanced — Missing Pieces.\n\n### Interview-ready explanation\n\nI can explain what Docker is, why it exists, how it fits into a real full-stack project, and what mistakes beginners should avoid.\n\n### Move on when\n\n- You can build the project above.\n\n- You can debug one common failure without searching outside this site.\n\n- You can connect this topic to the next topic in the full-stack path.",
        "order": 12
      }
    ]
  },
  {
    "id": "deployment",
    "name": "Deployment Pipeline",
    "icon": "🚀",
    "category": "Deployment",
    "level": "advanced",
    "color": "#f78166",
    "bgColor": "#24130f",
    "desc": "Ship apps from localhost to production with CI/CD, env vars, cloud, and release flow",
    "sections": [
      {
        "title": "Start Here: Complete Roadmap",
        "sub": "Read this first · Deployment Pipeline path",
        "phase": "Start",
        "generated": true,
        "content": "## Start Here: Deployment Pipeline Complete Roadmap\n\nThis topic is arranged so a learner can start at the first lesson and keep going without leaving the website.\n\n### What you will master\n\n- Understand the full journey from localhost to production.\n\n- Connect shell skills, environment variables, CI/CD, cloud hosting, databases, and monitoring.\n\n- Ship a complete app with a repeatable release process.\n\n### Before you start\n\nReact, Django, Git, GitHub, Docker basics, and environment variable basics.\n\n### Learning order\n\n1. Why Deployment? — DeploymentLearn archive · THEORY\n\n2. CI/CD — What & Why — DeploymentLearn archive · CI/CD\n\n3. The Full DevOps Pipeline — DeploymentLearn archive · FULL STACK\n\n4. History of Deployment — DeploymentLearn archive · THEORY\n\n5. Environment Variables — DeploymentLearn archive · THEORY\n\n6. Shell & CLI for Deployment — DeploymentLearn archive · SHELL\n\n### How to study this topic\n\n1. Read each lesson in order.\n\n2. Type the commands and code examples yourself.\n\n3. After every Build or Production lesson, explain the concept back in your own words.\n\n4. Finish with the final project and checklist section.",
        "order": 1
      },
      {
        "title": "Full Stack Local to Production Commands",
        "sub": "Command map · React + Django + GitHub + deploy",
        "phase": "Start",
        "content": "## Full Stack Local to Production Commands\n\nThis is the short command map. For full detail, study the **Full Stack Workflow** topic first.\n\n### 1. Create project folders\n\n```bash\nmkdir my-fullstack-app\ncd my-fullstack-app\nmkdir backend frontend\n```\n\n### 2. Backend\n\n```bash\ncd backend\npython -m venv venv\nsource venv/bin/activate\npip install django djangorestframework django-cors-headers\ndjango-admin startproject config .\npython manage.py startapp api\npython manage.py migrate\npython manage.py runserver\n```\n\nWindows activation uses:\n\n```powershell\n.\\venv\\Scripts\\Activate.ps1\n```\n\n### 3. Frontend\n\n```bash\ncd ../frontend\nnpm create vite@latest . -- --template react\nnpm install\nnpm run dev\n```\n\n### 4. Build frontend\n\n```bash\nnpm run build\n```\n\n### 5. Save code\n\n```bash\ngit init\ngit add .\ngit commit -m \"Build React Django full-stack app\"\n```\n\n### 6. Deploy\n\nFrontend build command:\n\n```bash\nnpm run build\n```\n\nBackend build command:\n\n```bash\npip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate\n```\n\nBackend start command:\n\n```bash\ngunicorn config.wsgi:application\n```",
        "order": 2
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How Deployment Pipeline Fits the Full Project\n\nThis website teaches a complete React + Django project, not isolated tricks. Here is where **Deployment Pipeline** appears in the real workflow.\n\n### In local development\n\nYou use this topic while building and testing the project on your own machine. The goal is to understand the command, the folder it runs in, and the file it changes.\n\n### In production\n\nYou use this topic again when the app is pushed to GitHub, built by a hosting platform, and served to real users. Production usually changes URLs, secrets, databases, and build commands.\n\n### What to remember\n\n- Know which folder the command must run from.\n- Know whether the command is for development or production.\n- Know what output proves the command worked.\n- Know the next topic in the workflow so you can keep moving without guessing.",
        "order": 3
      },
      {
        "title": "Why Deployment?",
        "sub": "DeploymentLearn archive · THEORY",
        "content": "## Why Deployment?\n\n### What is Deployment?\n\nDeployment is the process of making your application available to real users on the internet.\n\nYou write code on your local machine — but users can't access localhost:3000 or localhost:8000!\n\nDeployment means:\n→ Packaging your app correctly\n→ Running it on a server (cloud or physical)\n→ Making it accessible via a domain/URL\n→ Keeping it running 24/7 reliably\n\nWithout deployment, your app exists only on your laptop.\n\n### The Deployment Journey\n\nA typical modern deployment pipeline:\n\n1. Code (your machine) → Git commit\n2. Git → Push to GitHub\n3. GitHub → CI/CD pipeline triggered\n4. CI/CD → Run tests, lint, build\n5. Docker → Package app into container\n6. Container → Deploy to cloud (Render, AWS, GCP)\n7. Cloud → Serve to users globally\n\nTools we'll master:\n🐳 Docker — Package & run anywhere\n🌿 Git — Track code changes\n🐙 GitHub — Host & collaborate\n⚙️ CI/CD — Automate everything\n\n### Local vs Production\n\nLOCAL DEVELOPMENT:\n- DEBUG = True\n- SQLite database\n- No HTTPS\n- Secrets in .env files\n- Hot-reloading dev server\n\nPRODUCTION:\n- DEBUG = False (never expose errors)\n- PostgreSQL / managed DB\n- HTTPS (SSL certificate)\n- Secrets in environment variables (not files!)\n- Gunicorn/Nginx (Django) or Node/PM2\n- Static files on CDN\n- Database backups\n- Monitoring & logging\n\nThis gap is why Docker exists — same environment everywhere.",
        "phase": "Foundation",
        "order": 4
      },
      {
        "title": "CI/CD — What & Why",
        "sub": "DeploymentLearn archive · CI/CD",
        "content": "## CI/CD — What & Why\n\n### What is CI/CD?\n\nCI/CD = Continuous Integration / Continuous Deployment\n\nCONTINUOUS INTEGRATION (CI):\nEvery time code is pushed, automatically:\n→ Run tests\n→ Run linters (code style check)\n→ Build the application\n→ Check for security issues\n\nIf any step fails → block the merge, notify developer.\nGoal: \"Always have working, tested code on main branch\"\n\nCONTINUOUS DEPLOYMENT (CD):\nAfter CI passes, automatically:\n→ Build Docker image\n→ Push to container registry\n→ Deploy to staging/production server\n→ Run health checks\n\nGoal: \"Every commit to main is automatically live in minutes\"\n\nCI vs CD:\nCI = Did it BREAK anything? (testing)\nCD = Put it LIVE automatically (deployment)\n\n### Why CI/CD Matters\n\nWITHOUT CI/CD:\n→ Developers push code whenever they feel like it\n→ \"Works on my machine\" deployed to production\n→ No automated tests run → bugs reach users\n→ Manual deployments: SSH into server, git pull, restart manually\n→ Deployments are scary, happen rarely\n→ Big, risky releases every few months\n\nWITH CI/CD:\n→ Every push triggers automated quality gates\n→ Tests run automatically — catch bugs before merge\n→ Deployments are automated, consistent, repeatable\n→ Small, frequent releases (10s per day at big companies)\n→ Faster feedback loop → better software\n\nPOPULAR CI/CD TOOLS:\n🐙 GitHub Actions — built into GitHub (free tier!)\n🦊 GitLab CI — built into GitLab\n🔵 Jenkins — self-hosted, very customizable\n☁️ CircleCI — cloud-based\n🚀 Travis CI — popular for open source\n📦 Render, Railway — auto-deploy on git push",
        "phase": "Foundation",
        "order": 5
      },
      {
        "title": "The Full DevOps Pipeline",
        "sub": "DeploymentLearn archive · FULL STACK",
        "content": "## The Full DevOps Pipeline\n\n### Everything Connected\n\nHere's how everything you've learned connects into a complete workflow:\n\nDEVELOPER WORKFLOW:\n1. git checkout -b feature/user-auth\n2. Write code (Django views, React components)\n3. docker compose up — test locally\n4. git add . && git commit -m \"Add JWT authentication\"\n5. git push origin feature/user-auth\n6. Open Pull Request on GitHub\n\nAUTOMATED CI (GitHub Actions triggers):\n7. Checkout code (actions/checkout)\n8. Run Django tests + React tests\n9. Run linters (flake8, ESLint)\n10. If FAIL → PR blocked, developer notified\n11. If PASS → PR can be merged\n\nCODE REVIEW:\n12. Team reviews PR on GitHub\n13. Suggest changes, approve\n14. Merge PR into main\n\nAUTOMATED CD (triggers on merge to main):\n15. Build Docker images (django + react)\n16. Push to Docker Hub / GitHub Container Registry\n17. Trigger Render/AWS deploy via webhook\n18. New containers deployed with zero downtime\n19. Health check confirms deployment success\n20. Team gets Slack/email notification\n\nTOTAL TIME: Code merge → Live in production → ~3-5 minutes ⚡\n\n### Complete GitHub Actions Pipeline\n\n\n\n```yaml\n# ═══════════════════════════════════\n# .github/workflows/full-pipeline.yml\n# Complete CI/CD: Test → Build → Deploy\n# ═══════════════════════════════════\n\nname: Full CI/CD Pipeline\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\nenv:\n  REGISTRY: ghcr.io             # GitHub Container Registry (free)\n  IMAGE_PREFIX: ${{ github.repository_owner }}/myapp\n\njobs:\n  # ──────────────────────────────\n  # JOB 1: Test everything\n  # ──────────────────────────────\n  test:\n    runs-on: ubuntu-latest\n    services:\n      postgres:\n        image: postgres:16\n        env:\n          POSTGRES_DB: testdb\n          POSTGRES_USER: testuser\n          POSTGRES_PASSWORD: testpass\n        ports: [\"5432:5432\"]\n        options: --health-cmd pg_isready --health-interval 5s --health-retries 5\n\n    steps:\n      - uses: actions/checkout@v4\n\n      # Backend tests\n      - uses: actions/setup-python@v5\n        with: { python-version: '3.11', cache: 'pip' }\n      - run: pip install -r backend/requirements.txt\n      - name: Django tests\n        env:\n          DATABASE_URL: postgres://testuser:testpass@localhost:5432/testdb\n          SECRET_KEY: ci-secret-key\n        run: cd backend && python manage.py test\n\n      # Frontend tests\n      - uses: actions/setup-node@v4\n        with: { node-version: '20', cache: 'npm', cache-dependency-path: 'frontend/package-lock.json' }\n      - run: cd frontend && npm ci && npm test -- --watchAll=false\n\n  # ──────────────────────────────\n  # JOB 2: Build & push Docker images (main branch only)\n  # ──────────────────────────────\n  build:\n    needs: test\n    if: github.ref == 'refs/heads/main'   # Skip on PRs\n    runs-on: ubuntu-latest\n\n    steps:\n      - uses: actions/checkout@v4\n\n      - name: Login to GitHub Container Registry\n        uses: docker/login-action@v3\n        with:\n          registry: ${{ env.REGISTRY }}\n          username: ${{ github.actor }}\n          password: ${{ secrets.GITHUB_TOKEN }}   # Auto-provided by GitHub!\n\n      - name: Build and push backend\n        uses: docker/build-push-action@v5\n        with:\n          context: ./backend\n          push: true\n          tags: ${{ env.REGISTRY }}/${{ env.IMAGE_PREFIX }}-backend:latest\n\n      - name: Build and push frontend\n        uses: docker/build-push-action@v5\n        with:\n          context: ./frontend\n          push: true\n          tags: ${{ env.REGISTRY }}/${{ env.IMAGE_PREFIX }}-frontend:latest\n\n  # ──────────────────────────────\n  # JOB 3: Deploy\n  # ──────────────────────────────\n  deploy:\n    needs: build\n    runs-on: ubuntu-latest\n    environment: production     # Requires approval if configured\n\n    steps:\n      - name: Deploy to Render\n        run: |\n          curl -X POST \"${{ secrets.RENDER_BACKEND_DEPLOY_HOOK }}\"\n          curl -X POST \"${{ secrets.RENDER_FRONTEND_DEPLOY_HOOK }}\"\n\n      - name: Wait and verify deployment\n        run: |\n          sleep 30\n          curl --fail https://myapp-backend.onrender.com/api/health/ || exit 1\n          echo \"✅ Deployment successful!\"\n```\n\n### Next Steps\n\nYou now understand the complete modern deployment stack. Here's what to explore next:\n\nINTERMEDIATE:\n→ Environment-based configs (staging vs production)\n→ Database migrations in CI/CD\n→ Blue-green deployments (zero downtime)\n→ Docker multi-stage builds optimization\n→ Nginx configuration (reverse proxy, SSL termination)\n\nADVANCED:\n→ Kubernetes (K8s) — orchestrate 100s of containers\n→ Helm charts — K8s package manager\n→ Terraform / Pulumi — Infrastructure as Code\n→ AWS ECS/EKS or GCP GKE for managed Kubernetes\n→ Prometheus + Grafana — monitoring and alerting\n→ ELK Stack — centralized logging\n→ Feature flags — deploy code but enable features gradually\n→ Canary deployments — roll out to 5% of users first\n\nSECURITY:\n→ SAST (Static Application Security Testing) in CI\n→ Container image vulnerability scanning (Trivy, Snyk)\n→ Secret scanning in git history\n→ OWASP Top 10 — security checklist\n\nKeep building! The best way to learn this is to deploy your own projects.\nJan Samadhan AI → DeploymentLearn → your next full-stack project! 🚀",
        "phase": "Build",
        "order": 6
      },
      {
        "title": "History of Deployment",
        "sub": "DeploymentLearn archive · THEORY",
        "content": "## History of Deployment\n\n### Era 1: The Physical Server Age (1990s – early 2000s)\n\nBefore the cloud, deploying meant physically owning and running servers.\n\nHOW IT WORKED:\n→ Buy a physical server (costs $5,000–$50,000)\n→ Rack it in a data center or office room\n→ Install OS manually (Windows Server, Linux)\n→ FTP your files onto the server\n→ Pray it doesn't crash\n\nPROBLEMS:\n❌ Scaling meant buying more hardware (months of lead time)\n❌ If the server room flooded — your app was gone\n❌ Dev environment ≠ production (works on my machine!)\n❌ Deployments took hours or days\n❌ No rollbacks — once live, reverting was manual hell\n\nFUN FACT: Amazon ran its entire e-commerce platform on a single Oracle database for years. When it finally crashed on peak shopping days, it forced them to rethink everything — leading directly to AWS.\n\n### Era 2: Virtual Machines — IaaS (2006–2013)\n\nAmazon launched AWS EC2 in 2006. It changed everything.\n\nVIRTUAL MACHINES (VMs):\n→ One physical server → many isolated virtual servers\n→ Each VM has its own OS, RAM, CPU allocation\n→ Rent by the hour — no upfront hardware cost\n→ Spin up a new server in minutes, not months\n\nTOOLS OF THE ERA:\n→ AWS EC2 / S3 (2006) — virtual servers + storage\n→ Capistrano — deploy Ruby apps via SSH scripts\n→ Puppet / Chef — configuration management\n→ Vagrant — reproducible local dev VMs\n\nSTILL HAD PROBLEMS:\n❌ VMs are heavy — each VM has a full OS (GBs of RAM)\n❌ \"Works on my machine\" still existed between dev VM and prod VM\n❌ Deployments still required SSH-ing into servers\n❌ Scaling was manual (auto-scaling existed but was complex)\n❌ Configuration drift — servers slowly become inconsistent over time\n\n### Era 3: Platform as a Service — PaaS (2010–2015)\n\nHeroku launched in 2010 and introduced git push to deploy.\n\nTHE HEROKU REVOLUTION:\n→ git push heroku main — that's it, your app is live\n→ No SSH, no server config, no Nginx setup\n→ Heroku handled: OS, runtime, web server, scaling\n→ Add-ons: postgres, redis, logging — one command\n\nTHE 12-FACTOR APP (2011):\nHeroku engineers documented how cloud-native apps should be built:\n1. Codebase — one repo, many deploys\n2. Dependencies — explicitly declare all deps\n3. Config — store config in environment variables\n4. Backing services — treat DB, redis as attached resources\n5. Build/release/run — strict separation of stages\n6. Processes — execute app as stateless processes\n7. Port binding — export services via port\n8. Concurrency — scale out via process model\n9. Disposability — fast startup, graceful shutdown\n10. Dev/prod parity — keep environments as similar as possible\n11. Logs — treat as event streams\n12. Admin processes — run admin tasks as one-off processes\n\nThis document still guides how we build apps today.\n\n### Era 4: Docker & Containers (2013–present)\n\nDocker launched in 2013 and solved \"works on my machine\" permanently.\n\nTHE KEY INSIGHT:\nInstead of virtualizing hardware (VMs), virtualize just the application environment.\n\nA container packages:\n→ Your code\n→ Runtime (Python 3.11, Node 20)\n→ Dependencies (requirements.txt, package.json)\n→ OS libraries\n→ Config\n\nRuns identically on: your laptop, CI server, AWS, Google Cloud, your colleague's Windows machine.\n\nDOCKER MILESTONES:\n→ 2013: Docker released as open source\n→ 2014: Docker Hub launched (public image registry)\n→ 2015: Docker Compose — multi-container local dev\n→ 2015: Kubernetes (K8s) released by Google — orchestrate containers at scale\n→ 2017: Docker becomes industry standard\n→ 2020: Docker Desktop on Mac/Windows becomes ubiquitous\n\n### Era 5: CI/CD & DevOps Culture (2015–present)\n\nDEVOPS emerged as a cultural movement merging Dev + Ops teams.\n\nBEFORE DEVOPS:\n→ Dev team: \"we write code and throw it over the wall\"\n→ Ops team: \"we run servers and hate when devs deploy\"\n→ Result: slow deployments, blame culture, fear of change\n\nDEVOPS PRINCIPLES:\n→ Automate everything — humans make mistakes at 3am\n→ Deploy small, deploy often — less risk per deployment\n→ Monitor and alert — know before users know\n→ Shared responsibility — devs own their services in production\n\nCI/CD TOOLS TIMELINE:\n→ 2011: Jenkins (open source CI server, still widely used)\n→ 2015: Travis CI (first popular GitHub-integrated CI)\n→ 2018: GitHub Actions (CI/CD built into GitHub — game changer)\n→ 2018: GitLab CI/CD (built-in CI for GitLab)\n→ 2020: GitHub Actions becomes the most popular CI tool\n\nTODAY'S REALITY:\nTop companies deploy to production hundreds of times per day.\nAmazon: ~50 deployments per hour (!) at peak\nNetflix: continuous deployment, no scheduled maintenance windows\nEtsy: pioneered \"deploy on Friday\" culture (fearless deploys)\n\n### Era 6: Serverless & Edge (2014–present)\n\nThe deployment model continues to evolve beyond servers.\n\nSERVERLESS (Functions as a Service):\n→ AWS Lambda (2014) — run code without managing servers\n→ Write a function, trigger it on events (HTTP, S3 upload, queue)\n→ Pay per invocation — not per hour of server time\n→ Auto-scales to zero (no traffic = $0)\n\nUse cases: image processing, webhooks, scheduled jobs, APIs\n\nEDGE COMPUTING:\n→ Code runs in 300+ data centers globally, 50ms from any user\n→ Cloudflare Workers, Vercel Edge Functions, Deno Deploy\n→ No cold starts, ultra-low latency\n→ Great for auth checks, A/B testing, geo-routing\n\nMODERN DEPLOYMENT SPECTRUM (2024):\n← More control                              Less ops →\n  \nBare Metal → VMs → Containers → PaaS → Serverless → Edge\n\nThere's no single right answer. Choose based on:\n→ Traffic patterns (constant vs spiky)\n→ Team expertise\n→ Latency requirements\n→ Cost sensitivity",
        "phase": "Build",
        "order": 7
      },
      {
        "title": "Deployment Command Center",
        "sub": "Commands from local project to production",
        "phase": "Build",
        "generated": true,
        "content": "## Deployment Command Center\n\n### How to use these commands\n\nDeployment commands are the production version of your local workflow. The frontend becomes static files, the backend runs behind a production server, and secrets move into environment variables.\n\n### Production build locally\n\nReact:\n\n```bash\ncd frontend\nnpm install\nnpm run build\n```\n\nDjango:\n\n```bash\ncd backend\nsource venv/bin/activate\npip install -r requirements.txt\npython manage.py check\npython manage.py collectstatic\npython manage.py migrate\n```\n\nWindows Django activation:\n\n```powershell\n.\\venv\\Scripts\\Activate.ps1\n```\n\n### GitHub release flow\n\n```bash\ngit status\ngit add .\ngit commit -m \"Prepare production deploy\"\ngit push origin main\n```\n\n### Environment variables checklist\n\n```text\nDEBUG=False\nSECRET_KEY=your-secret-key\nDATABASE_URL=postgres://...\nALLOWED_HOSTS=your-backend-domain.com\nCORS_ALLOWED_ORIGINS=https://your-frontend-domain.com\nVITE_API_URL=https://your-backend-domain.com\n```\n\n### Backend production start command\n\n```bash\ngunicorn config.wsgi:application\n```\n\n### Verify deployment\n\n```bash\n# Open these in browser or API client\nhttps://your-frontend-domain.com\nhttps://your-backend-domain.com/api/health/\n```",
        "order": 8
      },
      {
        "title": "Environment Variables",
        "sub": "DeploymentLearn archive · THEORY",
        "content": "## Environment Variables\n\n### What Are Environment Variables?\n\nEnvironment variables (env vars) are key-value pairs stored OUTSIDE your code that configure how your app behaves.\n\nWHY OUTSIDE THE CODE?\n→ Your code is public (GitHub) — secrets must not be in it\n→ Same code runs in dev, staging, production with DIFFERENT configs\n→ Changing a config shouldn't require redeploying code\n\nCLASSIC MISTAKE (never do this):\n# settings.py — WRONG! This is committed to Git\nSECRET_KEY = \"my-super-secret-key-12345\"\nDATABASE_URL = \"postgres://user:password@prod-db:5432/myapp\"\nAWS_SECRET_KEY = \"AKIAIOSFODNN7EXAMPLE\"\n\nCORRECT APPROACH:\n# settings.py — RIGHT\nimport os\nSECRET_KEY = os.environ.get(\"SECRET_KEY\")\nDATABASE_URL = os.environ.get(\"DATABASE_URL\")\nAWS_SECRET_KEY = os.environ.get(\"AWS_SECRET_KEY\")\n\nThe actual values live in: .env files (local), platform dashboard (production).\n\n### .env File — Local Development\n\n\n\n```\n# ═══════════════════════════════════\n# .env — Local development secrets\n# NEVER commit this file to git!\n# Always in .gitignore\n# ═══════════════════════════════════\n\n# Django\nSECRET_KEY=django-insecure-local-dev-key-change-in-prod\nDEBUG=True\nALLOWED_HOSTS=localhost,127.0.0.1\n\n# Database (local PostgreSQL)\nDATABASE_URL=postgres://myuser:mypassword@localhost:5432/myapp_dev\n\n# Redis\nREDIS_URL=redis://localhost:6379/0\n\n# AWS S3 (for file uploads)\nAWS_ACCESS_KEY_ID=AKIAIOSFODNN7EXAMPLE\nAWS_SECRET_ACCESS_KEY=wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\nAWS_STORAGE_BUCKET_NAME=my-dev-bucket\n\n# Email\nEMAIL_HOST=smtp.gmail.com\nEMAIL_HOST_USER=dev@example.com\nEMAIL_HOST_PASSWORD=app-specific-password-here\n\n# Clerk (auth)\nCLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxx\nVITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxx\n\n# React (Vite) — prefix with VITE_ to expose to frontend\nVITE_API_URL=http://localhost:8000\nVITE_STRIPE_PUBLIC_KEY=pk_test_xxxxxxxxxxxx\n\n# ─── .gitignore ───────────────────────\n# Add this to your .gitignore:\n.env\n.env.local\n.env.*.local\n*.env\n```\n\n### Reading Env Vars in Python/Django\n\n\n\n```bash\n# ═══════════════════════════════════\n# Django settings.py — reading env vars\n# ═══════════════════════════════════\nimport os\nfrom pathlib import Path\n\n# Option 1: os.environ.get() — returns None if not set\nSECRET_KEY = os.environ.get(\"SECRET_KEY\")\n\n# Option 2: os.environ.get() with default value\nDEBUG = os.environ.get(\"DEBUG\", \"False\") == \"True\"\n\n# Option 3: os.environ[] — raises KeyError if not set (safer for required vars)\nDATABASE_URL = os.environ[\"DATABASE_URL\"]  # Crash early if missing\n\n# ─── Use python-decouple for cleaner syntax ───\n# pip install python-decouple\nfrom decouple import config, Csv\n\nSECRET_KEY = config(\"SECRET_KEY\")\nDEBUG = config(\"DEBUG\", default=False, cast=bool)\nALLOWED_HOSTS = config(\"ALLOWED_HOSTS\", default=\"localhost\", cast=Csv())\nPORT = config(\"PORT\", default=8000, cast=int)\n\n# ─── Use django-environ for URL parsing ───────\n# pip install django-environ\nimport environ\nenv = environ.Env()\nenviron.Env.read_env()  # Reads .env file\n\nDATABASE_URL = env(\"DATABASE_URL\")\n# Automatically parses: postgres://user:pass@host:5432/db\nDATABASES = {\"default\": env.db()}\n\nSECRET_KEY = env(\"SECRET_KEY\")\nDEBUG = env.bool(\"DEBUG\", default=False)\nALLOWED_HOSTS = env.list(\"ALLOWED_HOSTS\")\n```\n\n### Reading Env Vars in React/Vite\n\n\n\n```bash\n// ═══════════════════════════════════\n// Vite (React) — env vars\n// MUST start with VITE_ to be exposed to frontend\n// ═══════════════════════════════════\n\n// In your .env file:\n// VITE_API_URL=https://api.myapp.com\n// VITE_CLERK_PUBLISHABLE_KEY=pk_live_xxx\n\n// In your React component:\nconst apiUrl = import.meta.env.VITE_API_URL;\nconst clerkKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;\nconst isDev = import.meta.env.DEV;        // true in dev\nconst isProd = import.meta.env.PROD;      // true in production\nconst mode = import.meta.env.MODE;        // \"development\" or \"production\"\n\n// ─── Multiple .env files for different environments ───\n// .env                 → loaded always\n// .env.local           → loaded always, gitignored\n// .env.development     → only in dev (npm run dev)\n// .env.production      → only in prod (npm run build)\n// .env.development.local → dev only, gitignored\n\n// ─── Create React App (older pattern) ───\n// Prefix with REACT_APP_ instead of VITE_\nconst apiUrl = process.env.REACT_APP_API_URL;\n\n// ─── IMPORTANT: Vite env vars are STATIC ───\n// They are replaced at BUILD TIME — not runtime\n// If you change them, you must rebuild!\n// This is why in production we set them BEFORE running npm run build\n```\n\n### Setting Env Vars in Production Platforms\n\nEach platform has its own way to set environment variables:\n\nRENDER (render.com):\nDashboard → Service → Environment → Add Environment Variable\nOR in render.yaml:\n  envVars:\n    - key: SECRET_KEY\n      generateValue: true    # Render auto-generates secure value\n    - key: DATABASE_URL\n      fromDatabase:\n        name: myapp-db\n        property: connectionString\n\nVERCEL:\nDashboard → Project → Settings → Environment Variables\nvercel env add SECRET_KEY production\nvercel env pull .env.local   # Download prod vars for local debug\n\nRAILWAY:\nDashboard → Service → Variables tab\nrailway variables set SECRET_KEY=xxx\n\nDOCKER COMPOSE (local):\n# docker-compose.yml\nservices:\n  backend:\n    env_file: .env           # Load all from .env file\n    environment:\n      - DEBUG=False          # Override individual vars\n      - DATABASE_URL=postgres://...\n\nKUBERNETES:\n# Use Secrets resource (base64 encoded)\nkubectl create secret generic myapp-secrets \\\n  --from-literal=SECRET_KEY=mysecretkey \\\n  --from-literal=DATABASE_URL=postgres://...\n\nSECURITY RULES:\n→ NEVER commit .env to git (EVER)\n→ Use different secrets for dev/staging/prod\n→ Rotate secrets regularly (especially after team member leaves)\n→ Use a secrets manager (AWS Secrets Manager, HashiCorp Vault) for large teams\n→ Audit who has access to production secrets\n\n### Docker — Passing Env Vars\n\n\n\n```yaml\n# ═══════════════════════════════════\n# Ways to pass env vars to Docker containers\n# ═══════════════════════════════════\n\n# Method 1: -e flag (one at a time)\ndocker run -e DEBUG=False -e SECRET_KEY=abc123 myapp\n\n# Method 2: --env-file (recommended for local dev)\ndocker run --env-file .env myapp\n\n# Method 3: docker-compose.yml with env_file\nservices:\n  backend:\n    image: myapp-backend\n    env_file:\n      - .env           # Loads all vars from .env\n\n# Method 4: docker-compose.yml inline\nservices:\n  backend:\n    image: myapp-backend\n    environment:\n      SECRET_KEY: ${SECRET_KEY}   # From your shell's environment\n      DEBUG: \"False\"\n      DATABASE_URL: postgres://user:pass@db:5432/myapp\n\n# ─── Check env vars inside a running container ───\ndocker exec myapp-backend env\ndocker exec myapp-backend printenv DATABASE_URL\n\n# ─── Dockerfile — ARG vs ENV ───\n# ARG = build-time only (not available at runtime)\n# ENV = available at runtime\n\nARG NODE_ENV=production\nENV NODE_ENV=${NODE_ENV}\n# Now NODE_ENV is available when the container RUNS\n```",
        "phase": "Production",
        "order": 9
      },
      {
        "title": "Shell & CLI for Deployment",
        "sub": "DeploymentLearn archive · SHELL",
        "content": "## Shell & CLI for Deployment\n\n### Why Shell Skills Matter for Deployment\n\nEvery deployment tool — Docker, Git, CI/CD, cloud CLIs — runs in a shell.\n\nSHELL = THE UNIVERSAL INTERFACE:\n→ SSH into a server → you get a shell\n→ GitHub Actions steps run shell commands\n→ Docker build runs shell commands\n→ Debugging production = shell commands\n\nBash (default on Linux) and Zsh (default on Mac) are nearly identical for our purposes. All examples here work on both.\n\nTHE BASIC TOOLKIT YOU NEED:\n→ File system navigation (cd, ls, pwd, mkdir, rm)\n→ File viewing (cat, head, tail, less, grep)\n→ Process management (ps, kill, top, htop)\n→ Network tools (curl, wget, ping, netstat)\n→ Text processing (grep, sed, awk, sort, wc)\n→ Permissions (chmod, chown)\n→ Environment (export, env, printenv)\n→ Package managers (apt, yum, brew)\n\nThis chapter focuses on the subset you actually need for deployment.\n\n### Essential Shell Commands\n\n\n\n```bash\n# ═══════════════════════════════════\n# Shell commands every developer needs\n# ═══════════════════════════════════\n\n# ─── Navigation ───────────────────────────────\npwd                    # Print working directory\ncd /home/myapp         # Go to directory\ncd ..                  # Go up one level\ncd ~                   # Go to home directory\nls -la                 # List files (long format, show hidden)\ntree -L 2              # Tree view, 2 levels deep\n\n# ─── File operations ──────────────────────────\ncat settings.py                    # Print file contents\nhead -20 settings.py               # First 20 lines\ntail -f /var/log/nginx/access.log  # Follow log in real time (-f = follow)\ngrep \"ERROR\" app.log               # Search for pattern\ngrep -r \"DATABASE_URL\" .           # Recursive search in all files\ngrep -n \"SECRET\" settings.py       # Show line numbers\n\n# ─── Process management ───────────────────────\nps aux                             # List all running processes\nps aux | grep gunicorn             # Find gunicorn processes\nkill 1234                          # Kill process with PID 1234\nkill -9 1234                       # Force kill (use sparingly)\npkill -f gunicorn                  # Kill by name pattern\n\n# ─── Disk & memory ────────────────────────────\ndf -h                  # Disk usage (human readable)\ndu -sh ./              # Size of current directory\nfree -h                # Memory usage\ntop                    # Live process monitor (q to quit)\nhtop                   # Better process monitor (if installed)\n\n# ─── Networking ───────────────────────────────\ncurl https://api.example.com/health        # HTTP GET request\ncurl -X POST https://api.example.com/login \\\n  -H \"Content-Type: application/json\" \\\n  -d '{\"username\":\"admin\",\"password\":\"pass\"}'\nnetstat -tulpn         # List open ports and listening services\nss -tulpn              # Modern replacement for netstat\nping google.com        # Test connectivity\n\n# ─── Environment variables ────────────────────\nexport MY_VAR=\"hello\"  # Set env var for current session\necho $MY_VAR           # Print value\nenv                    # List all env vars\nprintenv DATABASE_URL  # Print specific var\nunset MY_VAR           # Remove env var\n```\n\n### Shell Scripts for Deployment\n\n\n\n```bash\n#!/bin/bash\n# ═══════════════════════════════════\n# deploy.sh — Deployment helper script\n# Make executable: chmod +x deploy.sh\n# Run: ./deploy.sh\n# ═══════════════════════════════════\n\n# Exit immediately if any command fails\nset -e\n\n# ─── Variables ────────────────────────────────\nAPP_DIR=\"/home/ubuntu/myapp\"\nDOCKER_IMAGE=\"myapp-backend\"\nCONTAINER_NAME=\"myapp-backend-prod\"\n\necho \"🚀 Starting deployment...\"\n\n# ─── Pull latest code ─────────────────────────\ncd $APP_DIR\ngit pull origin main\necho \"✅ Code updated\"\n\n# ─── Build Docker image ───────────────────────\ndocker build -t $DOCKER_IMAGE .\necho \"✅ Docker image built\"\n\n# ─── Stop old container ───────────────────────\ndocker stop $CONTAINER_NAME 2>/dev/null || true\ndocker rm $CONTAINER_NAME 2>/dev/null || true\necho \"✅ Old container removed\"\n\n# ─── Start new container ──────────────────────\ndocker run -d \\\n  --name $CONTAINER_NAME \\\n  --restart unless-stopped \\\n  --env-file /home/ubuntu/.env.prod \\\n  -p 8000:8000 \\\n  $DOCKER_IMAGE\necho \"✅ New container started\"\n\n# ─── Run migrations ───────────────────────────\ndocker exec $CONTAINER_NAME python manage.py migrate --no-input\necho \"✅ Migrations complete\"\n\n# ─── Health check ─────────────────────────────\nsleep 5\nHTTP_STATUS=$(curl -s -o /dev/null -w \"%{http_code}\" http://localhost:8000/api/health/)\nif [ \"$HTTP_STATUS\" -eq 200 ]; then\n  echo \"✅ Health check passed (HTTP $HTTP_STATUS)\"\n  echo \"🎉 Deployment successful!\"\nelse\n  echo \"❌ Health check failed (HTTP $HTTP_STATUS)\"\n  echo \"Rolling back...\"\n  docker stop $CONTAINER_NAME\n  exit 1\nfi\n```\n\n### SSH — Connect to Remote Servers\n\n\n\n```\n# ═══════════════════════════════════\n# SSH — Secure Shell for remote access\n# ═══════════════════════════════════\n\n# Connect to server\nssh ubuntu@203.0.113.100                  # IP address\nssh ubuntu@myserver.example.com           # Domain name\nssh -i ~/.ssh/mykey.pem ubuntu@203.0.113.100  # With specific key\n\n# ─── SSH Key Setup (one time) ─────────────────\n# Generate key pair (creates id_ed25519 + id_ed25519.pub)\nssh-keygen -t ed25519 -C \"your@email.com\"\n\n# Copy public key to server\nssh-copy-id ubuntu@203.0.113.100\n# OR manually: cat ~/.ssh/id_ed25519.pub\n# Paste into server's: ~/.ssh/authorized_keys\n\n# ─── Useful SSH options ───────────────────────\nssh -L 5432:localhost:5432 ubuntu@203.0.113.100\n# Tunnel: access remote PostgreSQL on local port 5432!\n# Now connect to postgres at localhost:5432 from your machine\n\nssh -N -f -L 8000:localhost:8000 ubuntu@203.0.113.100\n# -N: don't run command, just tunnel\n# -f: run in background\n\n# ─── SCP — copy files over SSH ────────────────\n# Upload file to server\nscp ./myfile.txt ubuntu@203.0.113.100:/home/ubuntu/\n\n# Download file from server\nscp ubuntu@203.0.113.100:/home/ubuntu/backup.sql ./\n\n# Upload entire directory\nscp -r ./myapp ubuntu@203.0.113.100:/home/ubuntu/\n\n# ─── ~/.ssh/config — avoid typing long commands ───\n# Add to ~/.ssh/config:\nHost myserver\n  HostName 203.0.113.100\n  User ubuntu\n  IdentityFile ~/.ssh/mykey.pem\n\n# Now just: ssh myserver\n```",
        "phase": "Production",
        "order": 10
      },
      {
        "title": "Final Checklist & Build Project",
        "sub": "Finish here · prove you can use Deployment Pipeline",
        "phase": "Mastery",
        "generated": true,
        "content": "## Final Checklist: Deployment Pipeline\n\nUse this as the last section. If you can do these without copying blindly, you are ready to move forward.\n\n### Build project\n\nShip the full-stack project from GitHub through CI/CD to a public cloud URL with environment variables configured.\n\n### Knowledge checklist\n\n- I can explain and use: Why Deployment?.\n\n- I can explain and use: CI/CD — What & Why.\n\n- I can explain and use: The Full DevOps Pipeline.\n\n- I can explain and use: History of Deployment.\n\n- I can explain and use: Environment Variables.\n\n- I can explain and use: Shell & CLI for Deployment.\n\n### Interview-ready explanation\n\nI can explain what Deployment Pipeline is, why it exists, how it fits into a real full-stack project, and what mistakes beginners should avoid.\n\n### Move on when\n\n- You can build the project above.\n\n- You can debug one common failure without searching outside this site.\n\n- You can connect this topic to the next topic in the full-stack path.",
        "order": 11
      }
    ]
  },
  {
    "id": "render",
    "name": "Render",
    "icon": "🚀",
    "category": "Deployment",
    "level": "beginner",
    "color": "#46e3b7",
    "bgColor": "#051c15",
    "desc": "Deploy web apps easily — great free tier",
    "sections": [
      {
        "title": "Start Here: Complete Roadmap",
        "sub": "Read this first · Render path",
        "phase": "Start",
        "generated": true,
        "content": "## Start Here: Render Complete Roadmap\n\nThis topic is arranged so a learner can start at the first lesson and keep going without leaving the website.\n\n### What you will master\n\n- Deploy Django, React, databases, and production services to Render.\n\n- Configure environment variables, build commands, start commands, and production databases.\n\n- Keep deployed services healthy with migrations, logs, and verification steps.\n\n### Before you start\n\nGitHub repository, production-ready app commands, and deployment basics.\n\n### Learning order\n\n1. What is Render? — Cloud hosting for modern apps\n\n2. Deploy Django on Render — Complete step-by-step guide\n\n3. Deploy React on Render — Static site deployment\n\n4. Deploy to Render / Cloud — DeploymentLearn archive · DEPLOY\n\n5. Database in Production — DeploymentLearn archive · DATABASE\n\n### How to study this topic\n\n1. Read each lesson in order.\n\n2. Type the commands and code examples yourself.\n\n3. After every Build or Production lesson, explain the concept back in your own words.\n\n4. Finish with the final project and checklist section.",
        "order": 1
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How Render Fits the Full Project\n\nThis website teaches a complete React + Django project, not isolated tricks. Here is where **Render** appears in the real workflow.\n\n### In local development\n\nYou use this topic while building and testing the project on your own machine. The goal is to understand the command, the folder it runs in, and the file it changes.\n\n### In production\n\nYou use this topic again when the app is pushed to GitHub, built by a hosting platform, and served to real users. Production usually changes URLs, secrets, databases, and build commands.\n\n### What to remember\n\n- Know which folder the command must run from.\n- Know whether the command is for development or production.\n- Know what output proves the command worked.\n- Know the next topic in the workflow so you can keep moving without guessing.",
        "order": 2
      },
      {
        "title": "What is Render?",
        "sub": "Cloud hosting for modern apps",
        "content": "## What is Render?\n\nRender (render.com) is a cloud platform that makes deploying web apps simple and affordable. It's the best Heroku alternative since Heroku removed its free tier in 2022.\n\n### What You Can Deploy\n| Service | Examples |\n|---------|---------|\n| Web Services | Django, Node.js, FastAPI, Go |\n| Static Sites | React, Vue, plain HTML |\n| Databases | PostgreSQL, Redis |\n| Cron Jobs | Scheduled tasks |\n| Background Workers | Celery, async workers |\n\n### Free Tier Includes\n- ✅ 1 Web Service (sleeps after 15 min inactivity)\n- ✅ 1 PostgreSQL database (90 days free then $7/mo)\n- ✅ Static sites: **FREE FOREVER** (no limits!)\n- ✅ 100GB bandwidth/month\n- ✅ Automatic HTTPS/SSL\n- ✅ Custom domains\n\n### How It Works\n1. Connect your GitHub repo\n2. Render detects your project type\n3. Auto-deploys on every `git push` to main\n4. Zero downtime deployments",
        "phase": "Foundation",
        "order": 3
      },
      {
        "title": "Deploy Django on Render",
        "sub": "Complete step-by-step guide",
        "content": "## Deploy Django to Render\n\n### Step 1: Prepare your Django project\n```bash\n# Install required packages\npip install gunicorn whitenoise psycopg2-binary dj-database-url\npip freeze > requirements.txt\n```\n\n### Step 2: Update settings.py\n```python\nimport dj_database_url\nimport os\n\n# Security\nSECRET_KEY = os.environ.get('SECRET_KEY', 'dev-key-change-in-prod')\nDEBUG = os.environ.get('DEBUG', 'False') == 'True'\nALLOWED_HOSTS = ['*']\n\n# Database (auto-configures from DATABASE_URL env var)\nDATABASES = {\n    'default': dj_database_url.config(\n        default='sqlite:///db.sqlite3',\n        conn_max_age=600\n    )\n}\n\n# Static files with WhiteNoise\nMIDDLEWARE = [\n    'django.middleware.security.SecurityMiddleware',\n    'whitenoise.middleware.WhiteNoiseMiddleware',  # Add this!\n    ...\n]\nSTATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')\nSTATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'\n```\n\n### Step 3: Create render.yaml (optional)\n```yaml\nservices:\n  - type: web\n    name: my-django-app\n    env: python\n    buildCommand: >\n      pip install -r requirements.txt &&\n      python manage.py collectstatic --no-input &&\n      python manage.py migrate\n    startCommand: gunicorn myproject.wsgi:application\n    envVars:\n      - key: SECRET_KEY\n        generateValue: true\n      - key: DEBUG\n        value: false\n```\n\n### Step 4: Deploy!\n1. Push code to GitHub\n2. Go to **render.com** → New → Web Service\n3. Connect your GitHub repo\n4. Set:\n   - **Build Command**: `pip install -r requirements.txt && python manage.py collectstatic --no-input && python manage.py migrate`\n   - **Start Command**: `gunicorn myproject.wsgi:application`\n5. Add environment variables (SECRET_KEY, DEBUG=False)\n6. Click **Create Web Service** ✅",
        "phase": "Foundation",
        "order": 4
      },
      {
        "title": "Deploy React on Render",
        "sub": "Static site deployment",
        "content": "## Deploy React App to Render (Free Forever!)\n\n### Step 1: Make sure your React app builds\n```bash\nnpm run build   # Should create a 'build' folder\n```\n\n### Step 2: Deploy on Render\n1. Go to **render.com** → New → Static Site\n2. Connect GitHub repo\n3. Set:\n   - **Build Command**: `npm install && npm run build`\n   - **Publish Directory**: `build`\n4. Click **Create Static Site** ✅\n\n### Step 3: Fix client-side routing (React Router)\nCreate a file `public/_redirects`:\n```\n/*    /index.html   200\n```\n\n### Your app is live at:\n```\nhttps://your-app-name.onrender.com\n```\n\n### Connect a Custom Domain\n1. Settings → Custom Domains\n2. Add your domain\n3. Update DNS: Add CNAME record pointing to Render URL",
        "phase": "Build",
        "order": 5
      },
      {
        "title": "Render Command Center",
        "sub": "Render build/start commands for React and Django",
        "phase": "Build",
        "generated": true,
        "content": "## Render Command Center\n\n### How to use these commands\n\nRender runs these commands on Linux servers after every deploy. If local Windows differs from Render, trust the Render/Linux command for production and keep Windows commands for local development.\n\n### Django backend on Render\n\nRoot directory:\n\n```text\nbackend\n```\n\nBuild command:\n\n```bash\npip install -r requirements.txt && python manage.py collectstatic --noinput && python manage.py migrate\n```\n\nStart command:\n\n```bash\ngunicorn config.wsgi:application\n```\n\nEnvironment variables:\n\n```text\nDEBUG=False\nSECRET_KEY=your-secret-key\nDATABASE_URL=from-render-postgres\nALLOWED_HOSTS=your-service.onrender.com\nCORS_ALLOWED_ORIGINS=https://your-frontend.vercel.app\n```\n\n### React static site on Render\n\nRoot directory:\n\n```text\nfrontend\n```\n\nBuild command:\n\n```bash\nnpm install && npm run build\n```\n\nPublish directory for Vite:\n\n```text\ndist\n```\n\nPublish directory for CRA:\n\n```text\nbuild\n```",
        "order": 6
      },
      {
        "title": "Deploy to Render / Cloud",
        "sub": "DeploymentLearn archive · DEPLOY",
        "content": "## Deploy to Render / Cloud\n\n### Cloud Platforms Overview\n\nPLATFORM-AS-A-SERVICE (PaaS) — Beginner Friendly:\n→ Render (free tier, Docker support, great for learning)\n→ Railway (simple, fast, generous free tier)\n→ Heroku (classic, slightly pricier now)\n→ Fly.io (cheap, fast globally)\n\nYou give them: your Docker image or GitHub repo\nThey handle: servers, OS, networking, scaling\n\nINFRASTRUCTURE-AS-A-SERVICE (IaaS) — Full Control:\n→ AWS (EC2, RDS, S3, ECR) — industry standard\n→ Google Cloud (GCE, Cloud SQL, GKE)\n→ DigitalOcean Droplets + App Platform\n→ Azure\n\nYou get: raw VMs. You configure: everything.\nMore powerful but more responsibility.\n\nSTATIC SITES (React build output):\n→ Vercel (best DX, free, Next.js by same company)\n→ Netlify (great free tier, forms, functions)\n→ GitHub Pages (free, for open source)\n→ Cloudflare Pages (very fast CDN)\n\n### render.yaml — Infrastructure as Code\n\n\n\n```yaml\n# ═══════════════════════════════════\n# render.yaml — Deploy both Django + React to Render\n# Commit this to your repo root.\n# Render reads it and creates all services automatically.\n# ═══════════════════════════════════\n\nservices:\n  # ─── Django Backend ────────────────────────\n  - type: web\n    name: myapp-backend\n    runtime: docker            # Use our Dockerfile\n    dockerfilePath: ./backend/Dockerfile\n    dockerContext: ./backend\n    plan: free\n\n    envVars:\n      - key: DATABASE_URL\n        fromDatabase:\n          name: myapp-db       # References the DB below\n          property: connectionString\n      - key: SECRET_KEY\n        generateValue: true    # Render generates a random secure value!\n      - key: DEBUG\n        value: \"False\"\n      - key: ALLOWED_HOSTS\n        value: \".onrender.com\"\n      - key: WEB_CONCURRENCY\n        value: \"2\"\n\n    healthCheckPath: /api/health/\n\n  # ─── React Frontend ─────────────────────────\n  - type: web\n    name: myapp-frontend\n    runtime: docker\n    dockerfilePath: ./frontend/Dockerfile\n    dockerContext: ./frontend\n    plan: free\n\n    envVars:\n      - key: REACT_APP_API_URL\n        fromService:\n          name: myapp-backend\n          type: web\n          property: host        # Auto-reference backend URL\n\n# ─── PostgreSQL Database ─────────────────────\ndatabases:\n  - name: myapp-db\n    plan: free\n```\n\n### Production Checklist\n\nBefore going live, verify ALL of these:\n\nDJANGO:\n☐ DEBUG = False\n☐ SECRET_KEY from environment variable (not hardcoded)\n☐ ALLOWED_HOSTS set correctly\n☐ HTTPS enforced (SECURE_SSL_REDIRECT = True)\n☐ Static files served via CDN or WhiteNoise\n☐ Database is PostgreSQL (not SQLite)\n☐ Database URL from environment variable\n☐ Gunicorn or uWSGI (not manage.py runserver)\n\nREACT:\n☐ Build output served by Nginx (not Vite dev server)\n☐ API URL is the production backend URL\n☐ Environment variables set in platform (not .env file)\n\nGENERAL:\n☐ .gitignore excludes .env files\n☐ All secrets in platform's environment variables\n☐ Health check endpoint configured\n☐ Error monitoring (Sentry) set up\n☐ Logs accessible (platform dashboard)\n☐ SSL/HTTPS working\n☐ Domain configured (if custom domain)",
        "phase": "Production",
        "order": 7
      },
      {
        "title": "Database in Production",
        "sub": "DeploymentLearn archive · DATABASE",
        "content": "## Database in Production\n\n### Why Not SQLite in Production?\n\nSQLite is Django's default database — perfect for local development.\n\nSQLITE LIMITATIONS:\n→ File-based — your database is a single file on disk\n→ No concurrent writes — multiple requests writing simultaneously = data corruption\n→ No built-in replication or backups\n→ Only one process can write at a time (locks the entire file)\n→ On cloud platforms, the disk is EPHEMERAL — restart wipes your data!\n\nEPHEMERAL DISK EXAMPLE:\n→ Deploy Django to Render with SQLite\n→ User registers: saved to db.sqlite3 on Render's disk\n→ Render restarts your service (routine, happens every deploy)\n→ db.sqlite3 is GONE — all user data lost 😱\n\nPOSTGRESQL FOR PRODUCTION:\n→ Client-server architecture — handles 100s of concurrent connections\n→ ACID-compliant — transactions are safe\n→ Managed services handle: backups, failover, scaling\n→ Connection pooling (PgBouncer) for high traffic\n→ The industry standard (used by Instagram, Reddit, GitHub)\n\nSQLite → great for: local dev, testing, embedded apps, read-heavy tiny apps\nPostgreSQL → required for: any production web app with user data\n\n### PostgreSQL Setup — Django\n\n\n\n```yaml\n# ═══════════════════════════════════\n# Connect Django to PostgreSQL\n# ═══════════════════════════════════\n\n# Install psycopg2 (PostgreSQL adapter for Python)\npip install psycopg2-binary    # Binary: easier install\npip install psycopg2           # Source: better for production\n\n# ─── settings.py ──────────────────────────────\nimport os\nimport dj_database_url    # pip install dj-database-url\n\n# Single DATABASE_URL handles everything:\n# postgres://USER:PASSWORD@HOST:PORT/DBNAME\nDATABASES = {\n    \"default\": dj_database_url.config(\n        default=os.environ.get(\"DATABASE_URL\"),\n        conn_max_age=600,           # Keep connections open 10 min\n        conn_health_checks=True,    # Detect stale connections\n    )\n}\n\n# ─── Local dev with Docker PostgreSQL ─────────\n# docker-compose.yml:\nservices:\n  db:\n    image: postgres:16\n    environment:\n      POSTGRES_DB: myapp_dev\n      POSTGRES_USER: myuser\n      POSTGRES_PASSWORD: mypassword\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - postgres_data:/var/lib/postgresql/data  # Persist data\n\nvolumes:\n  postgres_data:\n\n# .env:\nDATABASE_URL=postgres://myuser:mypassword@localhost:5432/myapp_dev\n\n# ─── Run migrations ───────────────────────────\npython manage.py migrate\n# Creates all tables defined in your models\n\n# Check DB connection\npython manage.py dbshell\n# Opens psql prompt connected to your DB\n```\n\n### Database Migrations in CI/CD\n\n\n\n```yaml\n# ═══════════════════════════════════\n# Running migrations safely in production\n# ═══════════════════════════════════\n\n# ─── Render — run command ─────────────────────\n# In render.yaml or dashboard, set preDeployCommand:\nservices:\n  - type: web\n    name: myapp-backend\n    runtime: docker\n    preDeployCommand: python manage.py migrate --no-input\n    startCommand: gunicorn myapp.wsgi:application\n\n# ─── Docker Entrypoint approach ───────────────\n# entrypoint.sh\n#!/bin/bash\nset -e\n\necho \"Running migrations...\"\npython manage.py migrate --no-input\n\necho \"Collecting static files...\"\npython manage.py collectstatic --no-input\n\necho \"Starting server...\"\nexec \"$@\"\n\n# Dockerfile:\nCOPY entrypoint.sh /entrypoint.sh\nRUN chmod +x /entrypoint.sh\nENTRYPOINT [\"/entrypoint.sh\"]\nCMD [\"gunicorn\", \"myapp.wsgi:application\", \"--bind\", \"0.0.0.0:8000\"]\n\n# ─── GitHub Actions ───────────────────────────\n# In your CI workflow:\n- name: Run migrations\n  env:\n    DATABASE_URL: ${{ secrets.DATABASE_URL }}\n  run: |\n    python manage.py migrate --no-input\n    python manage.py check --deploy  # Check for production issues\n\n# ─── Rollback safety ──────────────────────────\n# ALWAYS write reversible migrations:\n# python manage.py migrate myapp 0005  # Roll back to migration 0005\n# \n# NEVER delete migration files that have been run in production!\n# NEVER edit a migration file after it's been applied!\n```\n\n### Managed Database Services\n\nNever run your own database server in production for small/medium apps.\nUse managed services — they handle backups, updates, failover.\n\nRENDER POSTGRESQL (Recommended for beginners):\n→ Free tier: 256MB RAM, 1GB storage\n→ Automatic backups\n→ DATABASE_URL auto-injected into your services\n→ Point-in-time recovery (paid plans)\n→ Located same region as your app (low latency)\nSetup: render.yaml → add databases section → done\n\nSUPABASE (PostgreSQL + extras):\n→ Generous free tier\n→ Auto-generated REST API on your DB (no Django needed for simple reads!)\n→ Built-in auth system\n→ Realtime subscriptions\n→ Storage (like S3)\n→ Great for full-stack devs who want less backend code\n\nRAILWAY:\n→ Simple dashboard\n→ Free trial, then pay per usage\n→ PostgreSQL, MySQL, MongoDB, Redis all available\n\nAWS RDS / Google Cloud SQL:\n→ For serious production workloads\n→ Multi-AZ (automatic failover)\n→ Read replicas for scaling\n→ More expensive but enterprise-grade\n→ Use when you need SLA guarantees\n\nNEON (Serverless PostgreSQL):\n→ Scales to zero when not in use (great for hobby projects)\n→ Branch your database like you branch git (amazing for PRs!)\n→ Free tier available\n\nCONNECTION POOLING:\nAt high traffic, too many DB connections kill performance.\nUse PgBouncer or Supabase's connection pooler.\nSet conn_max_age in Django to reuse connections.\n\n### Database Backups & Shell Access\n\n\n\n```bash\n# ═══════════════════════════════════\n# PostgreSQL shell & backup commands\n# ═══════════════════════════════════\n\n# Connect to PostgreSQL (local Docker)\ndocker exec -it myapp_db_1 psql -U myuser -d myapp_dev\n\n# Django shortcut\npython manage.py dbshell\n\n# ─── Inside psql ──────────────────────────────\n\\l           -- list all databases\n\\c myapp_dev -- connect to database\n\\dt          -- list all tables\n\\d users     -- describe users table structure\n\\q           -- quit\n\nSELECT count(*) FROM auth_user;\nSELECT * FROM auth_user LIMIT 5;\nEXPLAIN ANALYZE SELECT * FROM orders WHERE user_id = 1;  -- Query performance\n\n# ─── Backup & Restore ─────────────────────────\n# Backup (dump to SQL file)\npg_dump -h localhost -U myuser -d myapp_dev > backup_$(date +%Y%m%d).sql\n\n# Backup compressed (much smaller)\npg_dump -h localhost -U myuser -d myapp_dev | gzip > backup.sql.gz\n\n# Restore\npsql -h localhost -U myuser -d myapp_dev < backup.sql\n\n# Restore compressed\ngunzip -c backup.sql.gz | psql -h localhost -U myuser -d myapp_dev\n\n# ─── Render database backup ───────────────────\n# Dashboard → Database → Backups tab\n# OR connect via their provided connection string:\npg_dump \"postgres://user:pass@oregon-postgres.render.com/mydb\" > backup.sql\n\n# ─── Django fixtures (data export/import) ─────\n# Export data as JSON\npython manage.py dumpdata auth.User --indent 2 > users.json\n\n# Import data\npython manage.py loaddata users.json\n```",
        "phase": "Production",
        "order": 8
      },
      {
        "title": "Final Checklist & Build Project",
        "sub": "Finish here · prove you can use Render",
        "phase": "Mastery",
        "generated": true,
        "content": "## Final Checklist: Render\n\nUse this as the last section. If you can do these without copying blindly, you are ready to move forward.\n\n### Build project\n\nDeploy the Django API, React static frontend, PostgreSQL database, and run migrations on Render.\n\n### Knowledge checklist\n\n- I can explain and use: What is Render?.\n\n- I can explain and use: Deploy Django on Render.\n\n- I can explain and use: Deploy React on Render.\n\n- I can explain and use: Deploy to Render / Cloud.\n\n- I can explain and use: Database in Production.\n\n### Interview-ready explanation\n\nI can explain what Render is, why it exists, how it fits into a real full-stack project, and what mistakes beginners should avoid.\n\n### Move on when\n\n- You can build the project above.\n\n- You can debug one common failure without searching outside this site.\n\n- You can connect this topic to the next topic in the full-stack path.",
        "order": 9
      }
    ]
  },
  {
    "id": "vercel",
    "name": "Vercel",
    "icon": "▲",
    "category": "Deployment",
    "level": "beginner",
    "color": "#000000",
    "bgColor": "#f5f5f5",
    "desc": "Deploy React & Next.js in seconds",
    "sections": [
      {
        "title": "Start Here: Complete Roadmap",
        "sub": "Read this first · Vercel path",
        "phase": "Start",
        "generated": true,
        "content": "## Start Here: Vercel Complete Roadmap\n\nThis topic is arranged so a learner can start at the first lesson and keep going without leaving the website.\n\n### What you will master\n\n- Deploy React and Next-style frontend projects to Vercel.\n\n- Use preview deployments, environment variables, and serverless functions.\n\n- Connect frontend deployment to backend APIs safely.\n\n### Before you start\n\nReact project, GitHub repository, and environment variable basics.\n\n### Learning order\n\n1. What is Vercel? — The frontend cloud platform\n\n2. Deploy React to Vercel — CLI and GitHub methods\n\n3. Vercel Serverless Functions — Backend logic without a server\n\n4. Vercel — Deploy React & Next.js — DeploymentLearn archive · DEPLOY\n\n### How to study this topic\n\n1. Read each lesson in order.\n\n2. Type the commands and code examples yourself.\n\n3. After every Build or Production lesson, explain the concept back in your own words.\n\n4. Finish with the final project and checklist section.",
        "order": 1
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How Vercel Fits the Full Project\n\nThis website teaches a complete React + Django project, not isolated tricks. Here is where **Vercel** appears in the real workflow.\n\n### In local development\n\nYou use this topic while building and testing the project on your own machine. The goal is to understand the command, the folder it runs in, and the file it changes.\n\n### In production\n\nYou use this topic again when the app is pushed to GitHub, built by a hosting platform, and served to real users. Production usually changes URLs, secrets, databases, and build commands.\n\n### What to remember\n\n- Know which folder the command must run from.\n- Know whether the command is for development or production.\n- Know what output proves the command worked.\n- Know the next topic in the workflow so you can keep moving without guessing.",
        "order": 2
      },
      {
        "title": "What is Vercel?",
        "sub": "The frontend cloud platform",
        "content": "## What is Vercel?\n\nVercel is a cloud platform optimized for frontend apps, especially **React** and **Next.js** (Vercel created Next.js). It's famous for being incredibly fast to set up.\n\n### Key Features\n- ⚡ **Deploy in under 60 seconds**\n- 🔒 **Automatic HTTPS** — always secure\n- 🌍 **Global Edge Network** — fast for users worldwide\n- 👁️ **Preview Deployments** — every PR gets a live URL!\n- ⚡ **Serverless Functions** — backend logic without a server\n- 📊 **Analytics** — web vitals, real user data\n- 🔁 **Instant Rollbacks** — broken deploy? One click to revert\n\n### Free Tier (Hobby Plan)\n- ✅ Unlimited personal projects\n- ✅ 100GB bandwidth/month\n- ✅ Preview deployments for every branch\n- ✅ Serverless functions\n- ✅ Custom domains\n\n### Used By\n- GitHub, McDonald's, Washington Post, TikTok, Twitch\n\n### Vercel vs Render (for React)\n| | Vercel | Render |\n|---|---|---|\n| Best for | React, Next.js | Django, full-stack |\n| Preview deploys | ✅ Built-in | ✅ Built-in |\n| Free static | ✅ Yes | ✅ Yes |\n| Serverless | ✅ Excellent | ⚠️ Limited |",
        "phase": "Foundation",
        "order": 3
      },
      {
        "title": "Deploy React to Vercel",
        "sub": "CLI and GitHub methods",
        "content": "## Deploy React App to Vercel\n\n### Method 1: Vercel CLI (Fastest!)\n```bash\n# Install Vercel CLI globally\nnpm install -g vercel\n\n# Login to Vercel\nvercel login\n\n# Deploy from your project folder\ncd my-react-app\nvercel\n\n# Follow the prompts:\n# ? Set up and deploy \"my-react-app\"? [Y/n] y\n# ? Which scope? your-username\n# ? Link to existing project? [y/N] n\n# ? What's your project's name? my-react-app\n# ? In which directory is your code located? ./\n\n# Deploy to production\nvercel --prod\n```\n\n### Method 2: GitHub Integration (Best for teams)\n1. Push your React app to GitHub\n2. Go to **vercel.com** → Add New Project\n3. Import your GitHub repository\n4. Vercel auto-detects React settings:\n   - **Framework**: Create React App\n   - **Build Command**: `npm run build`\n   - **Output Directory**: `build`\n5. Click **Deploy** ✅\n\n**Every `git push` to main = automatic redeploy!**\n\n### Environment Variables\n```bash\n# In Vercel Dashboard → Settings → Environment Variables\nREACT_APP_API_URL=https://myapi.com\nREACT_APP_GOOGLE_MAPS_KEY=AIza...\n\n# Or via CLI\nvercel env add REACT_APP_API_URL\n```\n\n### Preview Deployments\nEvery branch and PR automatically gets a unique URL:\n```\nmain branch    → myapp.vercel.app\nfeature branch → myapp-git-feature-login.vercel.app\nPR #42         → myapp-git-pr-42.vercel.app\n```",
        "phase": "Foundation",
        "order": 4
      },
      {
        "title": "Vercel Serverless Functions",
        "sub": "Backend logic without a server",
        "content": "## Vercel Serverless Functions\n\nAdd backend logic to your React app without managing a server!\n\n### Create an API Route\n```\nmy-app/\n├── api/              ← Vercel auto-detects this!\n│   ├── hello.js\n│   └── users.js\n├── public/\n└── src/\n```\n\n### Example: api/hello.js\n```javascript\nexport default function handler(req, res) {\n  res.status(200).json({\n    message: 'Hello from Vercel serverless!',\n    time: new Date().toISOString()\n  });\n}\n// Available at: https://yourapp.vercel.app/api/hello\n```\n\n### Example: api/users.js (with database)\n```javascript\nimport { sql } from '@vercel/postgres';\n\nexport default async function handler(req, res) {\n  if (req.method === 'GET') {\n    const users = await sql`SELECT * FROM users LIMIT 10`;\n    res.json(users.rows);\n  }\n\n  if (req.method === 'POST') {\n    const { name, email } = req.body;\n    await sql`INSERT INTO users (name, email) VALUES (${name}, ${email})`;\n    res.json({ success: true });\n  }\n}\n```\n\n### Calling from React\n```javascript\n// In your React component\nconst response = await fetch('/api/users');\nconst users = await response.json();\n```",
        "phase": "Build",
        "order": 5
      },
      {
        "title": "Vercel Command Center",
        "sub": "Vercel commands and build settings",
        "phase": "Build",
        "generated": true,
        "content": "## Vercel Command Center\n\n### How to use these commands\n\nVercel mainly needs a frontend build command and output directory. Environment variables are injected during build, so update them before deploying production.\n\n### Deploy with GitHub\n\n1. Push project to GitHub\n2. Import project in Vercel\n3. Choose frontend root directory\n4. Add environment variables\n5. Deploy\n\n### Vite settings\n\n```text\nFramework preset: Vite\nBuild command: npm run build\nOutput directory: dist\n```\n\n### Create React App settings\n\n```text\nFramework preset: Create React App\nBuild command: npm run build\nOutput directory: build\n```\n\n### Vercel CLI\n\n```bash\nnpm install -g vercel\nvercel login\nvercel\nvercel --prod\n```\n\n### Environment variable\n\n```text\nVITE_API_URL=https://your-backend.onrender.com\n```\n\n### Pull Vercel env locally\n\n```bash\nvercel env pull .env.local\n```",
        "order": 6
      },
      {
        "title": "Vercel — Deploy React & Next.js",
        "sub": "DeploymentLearn archive · DEPLOY",
        "content": "## Vercel — Deploy React & Next.js\n\n### What is Vercel?\n\nVercel is a cloud platform built for frontend developers, created by the team behind Next.js.\n\nVERCEL IS BEST FOR:\n→ React (Vite, CRA) — static site hosting + CDN\n→ Next.js — full-stack with SSR, API routes, Edge Functions\n→ Vue, Svelte, Nuxt, Angular — any frontend framework\n→ Static sites and Jamstack architectures\n\nVERCEL IS NOT GREAT FOR:\n→ Long-running backend servers (Django, Express as primary backend)\n→ WebSockets that need persistent connections\n→ CPU-heavy tasks (use Railway or Render for backends)\n\nWHY VERCEL WINS FOR FRONTEND:\n→ Git push → deployed in ~30 seconds\n→ Every PR gets its own preview URL (share with designers!)\n→ Global CDN — your assets served from 100+ locations\n→ Free SSL automatically\n→ Edge Functions — run code at the CDN edge\n→ Analytics built in\n→ Free tier is genuinely generous\n\n### Deploy React (Vite) to Vercel\n\n\n\n```bash\n# ═══════════════════════════════════\n# Method 1: Vercel CLI (fastest)\n# ═══════════════════════════════════\n\n# Install Vercel CLI\nnpm install -g vercel\n\n# Login\nvercel login\n\n# Inside your React project directory\ncd my-react-app\n\n# First deploy (interactive — asks questions)\nvercel\n\n# It will ask:\n# → Set up and deploy? Yes\n# → Which scope? (your username)\n# → Link to existing project? No\n# → Project name: my-react-app\n# → Directory: ./\n# → Override settings? No\n\n# ✅ Your app is live at: https://my-react-app-abc123.vercel.app\n\n# Re-deploy to production\nvercel --prod\n\n# ─── Method 2: Connect GitHub (recommended) ───\n# 1. Push code to GitHub\n# 2. Go to vercel.com → New Project\n# 3. Import your GitHub repo\n# 4. Configure:\n#    - Framework: Vite (auto-detected)\n#    - Build command: npm run build\n#    - Output directory: dist\n#    - Install command: npm install\n# 5. Click Deploy\n# 6. Every git push auto-deploys ✨\n\n# ─── Method 3: vercel.json config ─────────────\n# Create vercel.json in project root:\n{\n  \"buildCommand\": \"npm run build\",\n  \"outputDirectory\": \"dist\",\n  \"devCommand\": \"npm run dev\",\n  \"installCommand\": \"npm install\",\n  \"framework\": \"vite\"\n}\n```\n\n### vercel.json — Advanced Config\n\n\n\n```bash\n// ═══════════════════════════════════\n// vercel.json — Full configuration\n// Place in project root\n// ═══════════════════════════════════\n{\n  \"version\": 2,\n  \"name\": \"my-react-app\",\n  \"buildCommand\": \"npm run build\",\n  \"outputDirectory\": \"dist\",\n\n  // ─── SPA Routing Fix ──────────────────────────\n  // Without this, refreshing on /about gives 404!\n  // Redirects all routes to index.html (React Router handles it)\n  \"rewrites\": [\n    { \"source\": \"/(.*)\", \"destination\": \"/index.html\" }\n  ],\n\n  // ─── Custom Headers ───────────────────────────\n  \"headers\": [\n    {\n      \"source\": \"/api/(.*)\",\n      \"headers\": [\n        { \"key\": \"Access-Control-Allow-Origin\", \"value\": \"*\" }\n      ]\n    },\n    {\n      \"source\": \"/(.*)\",\n      \"headers\": [\n        { \"key\": \"X-Content-Type-Options\", \"value\": \"nosniff\" },\n        { \"key\": \"X-Frame-Options\", \"value\": \"DENY\" }\n      ]\n    }\n  ],\n\n  // ─── Environment Variables ────────────────────\n  \"env\": {\n    \"NODE_ENV\": \"production\"\n  },\n\n  // ─── Redirects ────────────────────────────────\n  \"redirects\": [\n    {\n      \"source\": \"/old-page\",\n      \"destination\": \"/new-page\",\n      \"permanent\": true\n    }\n  ],\n\n  // ─── Region ───────────────────────────────────\n  \"regions\": [\"bom1\"]   // Mumbai — closest to India!\n  // Other regions: iad1 (US East), sfo1 (US West), lhr1 (London)\n}\n```\n\n### Vercel vs Render — When to Use Which\n\nThese two platforms are complementary, not competitors.\n\nVERCEL — Use for Frontend:\n✅ React, Next.js, Vue, Svelte\n✅ Preview URLs for every PR\n✅ Global CDN edge network (fastest static delivery)\n✅ Serverless functions (API routes in Next.js)\n✅ Zero config for supported frameworks\n❌ Not for Django/FastAPI/Express as primary backend\n❌ Serverless functions have 10s execution limit (free)\n❌ No persistent server — each function is stateless\n\nRENDER — Use for Backend:\n✅ Django, FastAPI, Express, any backend\n✅ PostgreSQL managed database\n✅ Background workers (Celery)\n✅ Docker containers\n✅ Cron jobs\n✅ Redis (as add-on)\n❌ Static sites not as fast (no global CDN like Vercel)\n❌ Free tier spins down after 15min inactivity (cold start)\n\nTYPICAL FULL-STACK SETUP:\nFrontend → Vercel (React/Vite)\nBackend  → Render (Django/FastAPI)\nDatabase → Render PostgreSQL\nCache    → Render Redis (or Upstash Redis free tier)\nFiles    → Cloudflare R2 / AWS S3\n\nThe frontend makes API calls to the Render backend URL.\nSet VITE_API_URL=https://myapp-backend.onrender.com in Vercel env vars.\n\n### Vercel Environment Variables Setup\n\n\n\n```bash\n# ═══════════════════════════════════\n# Setting env vars in Vercel\n# ═══════════════════════════════════\n\n# Method 1: Vercel CLI\nvercel env add VITE_API_URL\n# → Prompts: enter value, select environments\n\n# Pull current env vars to local .env.local\nvercel env pull .env.local\n\n# List all env vars\nvercel env ls\n\n# Remove an env var\nvercel env rm VITE_API_URL\n\n# ─── Method 2: Dashboard ──────────────────────\n# vercel.com → Project → Settings → Environment Variables\n# \n# Environments:\n# Production  → runs when deployed from main branch\n# Preview     → runs on PR preview deployments\n# Development → for local dev (use vercel env pull)\n\n# ─── Scoping env vars to git branches ────────\n# You can set different values per branch:\n# main branch → VITE_API_URL = https://api.myapp.com (prod)\n# staging     → VITE_API_URL = https://api-staging.myapp.com\n# feature/*   → VITE_API_URL = https://api-dev.myapp.com\n\n# ─── In your React code ───────────────────────\n// Vite automatically replaces at build time:\nconst API_URL = import.meta.env.VITE_API_URL;\n\nasync function fetchData() {\n  const res = await fetch(`${API_URL}/api/users/`);\n  return res.json();\n}\n\n// ─── Verify in browser ───────────────────────\n// Open DevTools → Sources → main.js\n// You'll see the URL hardcoded (Vite replaced the variable)\n```",
        "phase": "Production",
        "order": 7
      },
      {
        "title": "Final Checklist & Build Project",
        "sub": "Finish here · prove you can use Vercel",
        "phase": "Mastery",
        "generated": true,
        "content": "## Final Checklist: Vercel\n\nUse this as the last section. If you can do these without copying blindly, you are ready to move forward.\n\n### Build project\n\nDeploy the React frontend to Vercel with preview deployments and environment variables connected to the backend API.\n\n### Knowledge checklist\n\n- I can explain and use: What is Vercel?.\n\n- I can explain and use: Deploy React to Vercel.\n\n- I can explain and use: Vercel Serverless Functions.\n\n- I can explain and use: Vercel — Deploy React & Next.js.\n\n### Interview-ready explanation\n\nI can explain what Vercel is, why it exists, how it fits into a real full-stack project, and what mistakes beginners should avoid.\n\n### Move on when\n\n- You can build the project above.\n\n- You can debug one common failure without searching outside this site.\n\n- You can connect this topic to the next topic in the full-stack path.",
        "order": 8
      }
    ]
  },
  {
    "id": "redis",
    "name": "Redis",
    "icon": "🧠",
    "category": "Backend",
    "level": "advanced",
    "color": "#dc382d",
    "bgColor": "#260f0d",
    "desc": "Caching, queues, sessions, and production Redis patterns",
    "sections": [
      {
        "title": "Start Here: Complete Roadmap",
        "sub": "Read this first · Redis path",
        "phase": "Start",
        "generated": true,
        "content": "## Start Here: Redis Complete Roadmap\n\nThis topic is arranged so a learner can start at the first lesson and keep going without leaving the website.\n\n### What you will master\n\n- Use Redis for caching, queues, sessions, rate limiting, and performance improvements.\n\n- Understand how Redis fits into Django, deployment, and production architecture.\n\n- Know when Redis helps and when a database is the better tool.\n\n### Before you start\n\nBackend basics, database basics, and deployment context.\n\n### Learning order\n\n1. Redis — Caching & Queues — DeploymentLearn archive · DATABASE\n\n### How to study this topic\n\n1. Read each lesson in order.\n\n2. Type the commands and code examples yourself.\n\n3. After every Build or Production lesson, explain the concept back in your own words.\n\n4. Finish with the final project and checklist section.",
        "order": 1
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How Redis Fits the Full Project\n\nThis website teaches a complete React + Django project, not isolated tricks. Here is where **Redis** appears in the real workflow.\n\n### In local development\n\nYou use this topic while building and testing the project on your own machine. The goal is to understand the command, the folder it runs in, and the file it changes.\n\n### In production\n\nYou use this topic again when the app is pushed to GitHub, built by a hosting platform, and served to real users. Production usually changes URLs, secrets, databases, and build commands.\n\n### What to remember\n\n- Know which folder the command must run from.\n- Know whether the command is for development or production.\n- Know what output proves the command worked.\n- Know the next topic in the workflow so you can keep moving without guessing.",
        "order": 2
      },
      {
        "title": "Redis — Caching & Queues",
        "sub": "DeploymentLearn archive · DATABASE",
        "content": "## Redis — Caching & Queues\n\n### What is Redis?\n\nRedis is an in-memory data structure store — blazing fast because it lives in RAM, not on disk.\n\nWHAT REDIS IS USED FOR:\n1. CACHING — Store expensive query results in memory\n   → Database query takes 200ms → cache result → next request takes 1ms\n   → Used by Twitter, GitHub, Stack Overflow\n\n2. SESSION STORAGE — Store user sessions\n   → Django sessions in Redis (not the database)\n   → Scales across multiple server instances\n\n3. CELERY BROKER — Queue for background tasks\n   → User uploads image → put \"resize image\" task in Redis queue\n   → Celery worker picks it up and processes async\n\n4. RATE LIMITING — Track API call counts per user per minute\n\n5. REAL-TIME FEATURES — Pub/Sub messaging\n   → Chat applications, live notifications\n   → Broadcasting events to connected websocket clients\n\n6. LEADERBOARDS — Sorted sets for game/competition rankings\n\nREDIS VS POSTGRESQL:\nPostgreSQL: durable, relational, disk-based → truth of record\nRedis: fast, in-memory, optional persistence → speed layer\n\nThey work TOGETHER — Redis caches what PostgreSQL stores permanently.\n\n### Redis Setup — Docker & Django\n\n\n\n```yaml\n# ═══════════════════════════════════\n# Redis with Docker Compose\n# ═══════════════════════════════════\n\n# docker-compose.yml\nservices:\n  redis:\n    image: redis:7-alpine          # Alpine = tiny image\n    ports:\n      - \"6379:6379\"               # Redis default port\n    volumes:\n      - redis_data:/data          # Persist data\n    command: redis-server --appendonly yes  # Enable persistence\n\n  backend:\n    build: ./backend\n    environment:\n      REDIS_URL: redis://redis:6379/0   # 0 = database number (0-15)\n    depends_on:\n      - redis\n\nvolumes:\n  redis_data:\n\n# ─── Django Cache with Redis ───────────────────\n# pip install django-redis\n\n# settings.py\nCACHES = {\n    \"default\": {\n        \"BACKEND\": \"django_redis.cache.RedisCache\",\n        \"LOCATION\": os.environ.get(\"REDIS_URL\", \"redis://127.0.0.1:6379/0\"),\n        \"OPTIONS\": {\n            \"CLIENT_CLASS\": \"django_redis.client.DefaultClient\",\n        },\n        \"TIMEOUT\": 300,    # Default cache timeout: 5 minutes\n    }\n}\n\n# Use Redis for Django sessions too\nSESSION_ENGINE = \"django.contrib.sessions.backends.cache\"\nSESSION_CACHE_ALIAS = \"default\"\n\n# ─── Django REST Framework + Redis rate limiting ──\n# pip install djangorestframework\n\nREST_FRAMEWORK = {\n    \"DEFAULT_THROTTLE_CLASSES\": [\n        \"rest_framework.throttling.UserRateThrottle\",\n    ],\n    \"DEFAULT_THROTTLE_RATES\": {\n        \"user\": \"100/hour\",\n        \"anon\": \"20/hour\",\n    }\n}\n```\n\n### Caching in Views\n\n\n\n```\n# ═══════════════════════════════════\n# Using Redis cache in Django views\n# ═══════════════════════════════════\nfrom django.core.cache import cache\nfrom django.views.decorators.cache import cache_page\nfrom rest_framework.response import Response\nfrom rest_framework.views import APIView\n\n# ─── Method 1: @cache_page decorator (entire response) ───\n@cache_page(60 * 15)   # Cache for 15 minutes\ndef product_list(request):\n    products = Product.objects.all()\n    return render(request, \"products.html\", {\"products\": products})\n\n# ─── Method 2: Manual cache (fine-grained control) ───────\nclass ProductListView(APIView):\n    def get(self, request):\n        cache_key = \"product_list_all\"\n\n        # Try cache first\n        cached = cache.get(cache_key)\n        if cached:\n            return Response(cached)     # Returns in ~1ms from Redis\n\n        # Cache miss — hit the database\n        products = Product.objects.select_related(\"category\").all()\n        data = ProductSerializer(products, many=True).data\n\n        # Store in cache for 10 minutes\n        cache.set(cache_key, data, timeout=600)\n\n        return Response(data)\n\n    def post(self, request):\n        # Invalidate cache when data changes!\n        cache.delete(\"product_list_all\")\n        # ... create product logic\n\n# ─── Cache patterns ───────────────────────────────────────\n# Store any value\ncache.set(\"user_profile_42\", {\"name\": \"Alice\"}, timeout=3600)\n\n# Get with default\nuser = cache.get(\"user_profile_42\", default=None)\n\n# Delete\ncache.delete(\"user_profile_42\")\n\n# Delete by pattern (requires django-redis)\nfrom django_redis import get_redis_connection\nconn = get_redis_connection(\"default\")\nkeys = conn.keys(\"user_profile_*\")\nconn.delete(*keys)  # Delete all user profile caches\n\n# Increment counter (atomic — no race conditions)\ncache.set(\"page_views\", 0)\ncache.incr(\"page_views\")    # Thread-safe increment\n```\n\n### Celery + Redis — Background Tasks\n\n\n\n```yaml\n# ═══════════════════════════════════\n# Celery with Redis as message broker\n# ═══════════════════════════════════\n# pip install celery redis django-celery-results\n\n# ─── myapp/celery.py ──────────────────────────\nimport os\nfrom celery import Celery\n\nos.environ.setdefault(\"DJANGO_SETTINGS_MODULE\", \"myapp.settings\")\n\napp = Celery(\"myapp\")\napp.config_from_object(\"django.conf:settings\", namespace=\"CELERY\")\napp.autodiscover_tasks()\n\n# ─── settings.py ──────────────────────────────\nCELERY_BROKER_URL = os.environ.get(\"REDIS_URL\", \"redis://localhost:6379/0\")\nCELERY_RESULT_BACKEND = os.environ.get(\"REDIS_URL\", \"redis://localhost:6379/0\")\nCELERY_ACCEPT_CONTENT = [\"json\"]\nCELERY_TASK_SERIALIZER = \"json\"\n\n# ─── tasks.py ─────────────────────────────────\nfrom celery import shared_task\nfrom django.core.mail import send_mail\n\n@shared_task\ndef send_welcome_email(user_id):\n    \"\"\"Heavy task — runs in background, not blocking the request\"\"\"\n    from django.contrib.auth.models import User\n    user = User.objects.get(id=user_id)\n    send_mail(\n        subject=\"Welcome to MyApp!\",\n        message=f\"Hello {user.username}, welcome!\",\n        from_email=\"noreply@myapp.com\",\n        recipient_list=[user.email],\n    )\n    return f\"Email sent to {user.email}\"\n\n@shared_task\ndef process_uploaded_image(image_id):\n    # Resize, thumbnail, convert format — heavy work\n    # Done async so user doesn't wait\n    pass\n\n# ─── views.py — dispatch task ─────────────────\ndef register_user(request):\n    user = User.objects.create_user(...)\n    # .delay() sends task to Redis queue — returns immediately\n    send_welcome_email.delay(user.id)\n    # User gets response in <100ms, email sent in background\n    return JsonResponse({\"status\": \"registered\"})\n\n# ─── docker-compose.yml — Celery worker ───────\nservices:\n  celery_worker:\n    build: ./backend\n    command: celery -A myapp worker --loglevel=info\n    env_file: .env\n    depends_on:\n      - redis\n      - db\n```\n\n### Redis in Production — Managed Services\n\nDon't run your own Redis server in production.\n\nUPSTASH REDIS (Best for beginners):\n→ Serverless Redis — pay per request\n→ Generous free tier (10,000 requests/day)\n→ Zero maintenance\n→ Works with Vercel Edge Functions\n→ Perfect for rate limiting, session storage\n→ Connect: REDIS_URL=rediss://...upstash.io:6379\n\nRENDER REDIS:\n→ Add Redis as a service in render.yaml\n→ Auto-injects REDIS_URL into your services\n→ Free tier available\n→ Co-located with your Render backend (low latency)\nservices:\n  - type: redis\n    name: myapp-redis\n    plan: free\n\nRAILWAY REDIS:\n→ One-click add to your project\n→ Fair pricing by usage\n\nAWS ElastiCache:\n→ Enterprise-grade Redis on AWS\n→ Multi-AZ replication\n→ Use when you need serious scalability\n\nREDIS CLOUD (Redis Inc):\n→ Official managed Redis by Redis creators\n→ 30MB free forever tier\n\nPRODUCTION TIPS:\n→ Enable persistence (appendonly yes) if you need data to survive restarts\n→ Set maxmemory-policy allkeys-lru — evict old keys when memory full\n→ Monitor memory usage — Redis runs out of RAM fast if you cache large objects\n→ Use TTL (expiry) on all cached values — stale data is a real bug",
        "phase": "Foundation",
        "order": 3
      },
      {
        "title": "Redis Command Center",
        "sub": "Commands to run Redis locally and in Docker",
        "phase": "Build",
        "generated": true,
        "content": "## Redis Command Center\n\n### How to use these commands\n\nRedis is easiest to learn through Docker. Run it locally, confirm `PONG`, then connect Django or Celery using `REDIS_URL`.\n\n### Run Redis with Docker\n\n```bash\ndocker run --name redis-dev -p 6379:6379 -d redis:7\n```\n\n### Test Redis connection\n\n```bash\ndocker exec -it redis-dev redis-cli ping\n```\n\nExpected output:\n\n```text\nPONG\n```\n\n### Stop Redis\n\n```bash\ndocker stop redis-dev\ndocker rm redis-dev\n```\n\n### Django Redis packages\n\n```bash\npip install redis django-redis celery\npip freeze > requirements.txt\n```\n\n### Example Redis URL\n\n```text\nREDIS_URL=redis://localhost:6379/0\n```",
        "order": 4
      },
      {
        "title": "Final Checklist & Build Project",
        "sub": "Finish here · prove you can use Redis",
        "phase": "Mastery",
        "generated": true,
        "content": "## Final Checklist: Redis\n\nUse this as the last section. If you can do these without copying blindly, you are ready to move forward.\n\n### Build project\n\nAdd Redis caching or background queue behavior to a Django feature and document the performance win.\n\n### Knowledge checklist\n\n- I can explain and use: Redis — Caching & Queues.\n\n### Interview-ready explanation\n\nI can explain what Redis is, why it exists, how it fits into a real full-stack project, and what mistakes beginners should avoid.\n\n### Move on when\n\n- You can build the project above.\n\n- You can debug one common failure without searching outside this site.\n\n- You can connect this topic to the next topic in the full-stack path.",
        "order": 5
      }
    ]
  },
  {
    "id": "clerk",
    "name": "Clerk Auth",
    "icon": "🔐",
    "category": "Auth",
    "level": "intermediate",
    "color": "#6c47ff",
    "bgColor": "#17102e",
    "desc": "User authentication, protected routes, tokens, and production auth setup",
    "sections": [
      {
        "title": "Start Here: Complete Roadmap",
        "sub": "Read this first · Clerk Auth path",
        "phase": "Start",
        "generated": true,
        "content": "## Start Here: Clerk Auth Complete Roadmap\n\nThis topic is arranged so a learner can start at the first lesson and keep going without leaving the website.\n\n### What you will master\n\n- Understand modern hosted authentication and user management.\n\n- Protect frontend routes and backend APIs with real auth tokens.\n\n- Connect Clerk-style authentication to production deployment.\n\n### Before you start\n\nReact basics, backend API basics, and authentication vocabulary.\n\n### Learning order\n\n1. Clerk — Authentication & Users — DeploymentLearn archive · AUTH\n\n### How to study this topic\n\n1. Read each lesson in order.\n\n2. Type the commands and code examples yourself.\n\n3. After every Build or Production lesson, explain the concept back in your own words.\n\n4. Finish with the final project and checklist section.",
        "order": 1
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How Clerk Auth Fits the Full Project\n\nThis website teaches a complete React + Django project, not isolated tricks. Here is where **Clerk Auth** appears in the real workflow.\n\n### In local development\n\nYou use this topic while building and testing the project on your own machine. The goal is to understand the command, the folder it runs in, and the file it changes.\n\n### In production\n\nYou use this topic again when the app is pushed to GitHub, built by a hosting platform, and served to real users. Production usually changes URLs, secrets, databases, and build commands.\n\n### What to remember\n\n- Know which folder the command must run from.\n- Know whether the command is for development or production.\n- Know what output proves the command worked.\n- Know the next topic in the workflow so you can keep moving without guessing.",
        "order": 2
      },
      {
        "title": "Clerk — Authentication & Users",
        "sub": "DeploymentLearn archive · AUTH",
        "content": "## Clerk — Authentication & Users\n\n### What is Clerk?\n\nClerk is a complete authentication and user management service for modern web apps.\n\nWHAT CLERK HANDLES FOR YOU:\n→ Sign up / Sign in UI (pre-built components)\n→ Email/password authentication\n→ Social logins (Google, GitHub, Apple, Discord, etc.)\n→ Magic link (passwordless) email login\n→ SMS OTP / phone verification\n→ Multi-factor authentication (2FA)\n→ User profile management\n→ Session management (JWTs)\n→ Organization / team management\n→ Role-based access control (RBAC)\n\nWHY USE CLERK INSTEAD OF DJANGO'S AUTH?\nDjango's built-in auth is great but:\n→ No social login out of the box\n→ No 2FA without extra packages\n→ You manage sessions, password resets, email verification\n→ Building a UI takes time\n\nClerk gives you all of this with 10 lines of code.\nYou focus on your app — Clerk handles who's using it.\n\nWHEN TO USE CLERK:\n→ React/Next.js frontends\n→ You want to ship auth in hours, not weeks\n→ You need social login and MFA\n→ Your team uses multiple authentication providers\n\nFREE TIER:\n→ Up to 10,000 monthly active users\n→ All features included (social, MFA, etc.)\n→ More than enough for most projects\n\n### Clerk Setup — React + Vite\n\n\n\n```bash\n# ═══════════════════════════════════\n# Clerk in React (Vite)\n# ═══════════════════════════════════\n\n# 1. Install Clerk\nnpm install @clerk/clerk-react\n\n# 2. Get your keys from clerk.com dashboard:\n#    Publishable Key: pk_test_...   (safe for frontend)\n#    Secret Key: sk_test_...        (NEVER expose in frontend!)\n\n# 3. Add to .env:\n# VITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxx\n\n# ─── main.jsx ─────────────────────────────────\nimport React from \"react\";\nimport ReactDOM from \"react-dom/client\";\nimport { ClerkProvider } from \"@clerk/clerk-react\";\nimport App from \"./App\";\n\nconst PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;\n\nReactDOM.createRoot(document.getElementById(\"root\")).render(\n  <React.StrictMode>\n    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>\n      <App />\n    </ClerkProvider>\n  </React.StrictMode>\n);\n\n# ─── App.jsx — protect routes ─────────────────\nimport { SignedIn, SignedOut, SignInButton, UserButton } from \"@clerk/clerk-react\";\n\nexport default function App() {\n  return (\n    <div>\n      <nav>\n        <SignedOut>\n          {/* Shown when NOT logged in */}\n          <SignInButton />   {/* Clerk's pre-built sign-in button */}\n        </SignedOut>\n        <SignedIn>\n          {/* Shown when logged in */}\n          <UserButton />    {/* Avatar + dropdown: profile, sign out */}\n        </SignedIn>\n      </nav>\n\n      <SignedIn>\n        <Dashboard />       {/* Only authenticated users see this */}\n      </SignedIn>\n      <SignedOut>\n        <LandingPage />\n      </SignedOut>\n    </div>\n  );\n}\n```\n\n### Clerk Hooks & Getting User Data\n\n\n\n```javascript\n// ═══════════════════════════════════\n// Clerk hooks for user data & auth state\n// ═══════════════════════════════════\nimport {\n  useUser,\n  useAuth,\n  useClerk,\n  SignIn,\n  SignUp,\n  SignOutButton\n} from \"@clerk/clerk-react\";\n\n// ─── useUser — access current user ────────────\nfunction Profile() {\n  const { isLoaded, isSignedIn, user } = useUser();\n\n  if (!isLoaded) return <div>Loading...</div>;\n  if (!isSignedIn) return <div>Please sign in</div>;\n\n  return (\n    <div>\n      <h1>Hello, {user.firstName}!</h1>\n      <p>Email: {user.primaryEmailAddress.emailAddress}</p>\n      <img src={user.imageUrl} alt=\"Profile\" />\n      <p>Created: {user.createdAt.toLocaleDateString()}</p>\n    </div>\n  );\n}\n\n// ─── useAuth — get auth token for API calls ───\nfunction ApiCallExample() {\n  const { getToken, userId } = useAuth();\n\n  async function fetchMyData() {\n    // Get JWT token to authenticate with your backend\n    const token = await getToken();\n\n    const response = await fetch(\"https://api.myapp.com/data/\", {\n      headers: {\n        \"Authorization\": `Bearer ${token}`,\n      },\n    });\n    return response.json();\n  }\n\n  return <button onClick={fetchMyData}>Fetch My Data</button>;\n}\n\n// ─── Embedded sign-in form ────────────────────\nfunction LoginPage() {\n  return (\n    <div style={{ display: \"flex\", justifyContent: \"center\" }}>\n      <SignIn\n        appearance={{\n          elements: {\n            formButtonPrimary: { backgroundColor: \"#6c47ff\" },\n          }\n        }}\n        redirectUrl=\"/dashboard\"\n      />\n    </div>\n  );\n}\n```\n\n### Clerk + Django Backend — Verify JWTs\n\n\n\n```bash\n# ═══════════════════════════════════\n# Verify Clerk JWTs in Django\n# ═══════════════════════════════════\n# pip install clerk-backend-api PyJWT\n\n# ─── authentication.py ────────────────────────\nimport jwt\nimport requests\nfrom rest_framework.authentication import BaseAuthentication\nfrom rest_framework.exceptions import AuthenticationFailed\n\nCLERK_JWKS_URL = \"https://api.clerk.com/v1/jwks\"\n\ndef get_clerk_public_key():\n    \"\"\"Fetch Clerk's public keys for JWT verification\"\"\"\n    response = requests.get(CLERK_JWKS_URL)\n    return response.json()\n\nclass ClerkAuthentication(BaseAuthentication):\n    def authenticate(self, request):\n        auth_header = request.headers.get(\"Authorization\", \"\")\n        if not auth_header.startswith(\"Bearer \"):\n            return None\n\n        token = auth_header.split(\" \")[1]\n\n        try:\n            # Decode and verify JWT using Clerk's public key\n            header = jwt.get_unverified_header(token)\n            jwks = get_clerk_public_key()\n\n            # Find the right key\n            public_key = None\n            for key in jwks[\"keys\"]:\n                if key[\"kid\"] == header[\"kid\"]:\n                    public_key = jwt.algorithms.RSAAlgorithm.from_jwk(key)\n                    break\n\n            payload = jwt.decode(\n                token,\n                public_key,\n                algorithms=[\"RS256\"],\n                options={\"verify_exp\": True}\n            )\n\n            clerk_user_id = payload[\"sub\"]  # e.g., \"user_2abc123...\"\n\n            # Get or create user in your DB\n            user, created = User.objects.get_or_create(\n                username=clerk_user_id,\n                defaults={\"email\": payload.get(\"email\", \"\")}\n            )\n            return (user, token)\n\n        except jwt.ExpiredSignatureError:\n            raise AuthenticationFailed(\"Token has expired\")\n        except jwt.InvalidTokenError:\n            raise AuthenticationFailed(\"Invalid token\")\n\n# ─── settings.py ──────────────────────────────\nREST_FRAMEWORK = {\n    \"DEFAULT_AUTHENTICATION_CLASSES\": [\n        \"myapp.authentication.ClerkAuthentication\",\n    ],\n    \"DEFAULT_PERMISSION_CLASSES\": [\n        \"rest_framework.permissions.IsAuthenticated\",\n    ],\n}\n```\n\n### Clerk Environment Variables & Deployment\n\nClerk uses different keys for development vs production.\n\nKEY TYPES:\npk_test_... = Publishable Key (test/development)\nsk_test_... = Secret Key (test/development)\npk_live_... = Publishable Key (production)\nsk_live_... = Secret Key (production)\n\nPUBLISHABLE KEY (safe for frontend):\n→ Can be in .env and committed to git (it's meant to be public)\n→ Goes in React code via import.meta.env.VITE_CLERK_PUBLISHABLE_KEY\n→ Identifies your Clerk application\n\nSECRET KEY (NEVER expose):\n→ Server-side only (Django, Next.js API routes)\n→ Never in frontend code\n→ Add to Render/Vercel environment variables\n→ Used to verify JWTs, manage users via API\n\nDEPLOYMENT ENV VARS:\n# Vercel (frontend)\nVITE_CLERK_PUBLISHABLE_KEY=pk_live_xxx\n\n# Render (backend)\nCLERK_SECRET_KEY=sk_live_xxx\n\nCLERK DASHBOARD SETTINGS FOR PRODUCTION:\n→ Set allowed origins (your Vercel URL)\n→ Configure redirect URLs (sign-in/sign-out redirects)\n→ Enable/disable auth methods (email, Google, etc.)\n→ Set session duration\n→ Webhook endpoints for user events (user.created, user.deleted)\n\nWEBHOOKS:\nClerk can call your backend when user events happen:\n→ User signs up → create user record in your DB\n→ User deletes account → cleanup their data\n→ Email verified → unlock certain features\nSet webhook URL in Clerk dashboard → add to your Django URL patterns",
        "phase": "Foundation",
        "order": 3
      },
      {
        "title": "Clerk Command Center",
        "sub": "Commands to add Clerk auth to React and connect backend",
        "phase": "Build",
        "generated": true,
        "content": "## Clerk Command Center\n\n### How to use these commands\n\nClerk has frontend public keys and backend secret keys. Public keys can appear in React builds; secret keys must only live in backend or deployment environment variables.\n\n### Install Clerk in React\n\n```bash\nnpm install @clerk/clerk-react\n```\n\n### Vite environment variable\n\n```text\nVITE_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxx\n```\n\n### Production frontend variable\n\n```text\nVITE_CLERK_PUBLISHABLE_KEY=pk_live_xxxxxxxxx\n```\n\n### Django backend packages for token verification\n\n```bash\npip install PyJWT requests\npip freeze > requirements.txt\n```\n\n### Backend secret variable\n\n```text\nCLERK_SECRET_KEY=sk_live_xxxxxxxxx\n```\n\n### Deploy checklist\n\n```text\nFrontend: add VITE_CLERK_PUBLISHABLE_KEY\nBackend: add CLERK_SECRET_KEY\nClerk dashboard: add allowed origins\nClerk dashboard: add redirect URLs\n```",
        "order": 4
      },
      {
        "title": "Final Checklist & Build Project",
        "sub": "Finish here · prove you can use Clerk Auth",
        "phase": "Mastery",
        "generated": true,
        "content": "## Final Checklist: Clerk Auth\n\nUse this as the last section. If you can do these without copying blindly, you are ready to move forward.\n\n### Build project\n\nAdd sign-in, sign-out, protected pages, and API token validation to the deployed app.\n\n### Knowledge checklist\n\n- I can explain and use: Clerk — Authentication & Users.\n\n### Interview-ready explanation\n\nI can explain what Clerk Auth is, why it exists, how it fits into a real full-stack project, and what mistakes beginners should avoid.\n\n### Move on when\n\n- You can build the project above.\n\n- You can debug one common failure without searching outside this site.\n\n- You can connect this topic to the next topic in the full-stack path.",
        "order": 5
      }
    ]
  },
  {
    "id": "dsa-mining",
    "name": "DSAMining",
    "icon": "⛏️",
    "category": "DSA",
    "level": "intermediate",
    "color": "#facc15",
    "bgColor": "#241f0b",
    "desc": "Mine data structure and algorithm patterns from problems, then turn them into reusable solutions",
    "sections": [
      {
        "title": "Start Here: DSAMining Roadmap",
        "sub": "Read this first · DSA pattern path",
        "phase": "Start",
        "generated": true,
        "content": "## DSAMining Roadmap\n\nDSAMining teaches data structures and algorithms by extracting repeatable patterns from problems.\n\nBy the end, you should be able to:\n\n- Read a problem and identify its core pattern.\n- Choose the right data structure before writing code.\n- Explain time and space complexity clearly.\n- Practice with intent instead of solving random problems blindly.\n\n### Complete order\n\n1. Understand the DSAMining workflow\n2. Learn how DSAMining fits real development and interviews\n3. Learn the structure of core data structures\n4. Learn the structure of an algorithm\n5. Learn the structure of DAA\n6. Learn the complete structure of DSA\n\n### What to remember\n\nDSA is not about memorizing hundreds of answers. It is about recognizing shapes: search, grouping, ordering, recursion, state, graph movement, and optimization.",
        "order": 1
      },
      {
        "title": "How This Topic Fits the Full Project",
        "sub": "Bridge lesson · where this skill is used",
        "phase": "Foundation",
        "generated": true,
        "content": "## How DSAMining Fits the Full Project\n\nDSAMining strengthens the problem-solving side of development. You use it when a feature needs fast lookup, sorted data, pathfinding, scheduling, validation, ranking, caching decisions, or clean backend logic.\n\n### In local development\n\nYou use DSA while writing functions, reducers, API transforms, validation logic, and database-adjacent code. The goal is to pick the right structure before the implementation becomes messy.\n\n### In interviews\n\nYou use DSAMining to explain your reasoning. Interviewers want to see that you can identify the pattern, discuss tradeoffs, and test edge cases.\n\n### In production\n\nYou use DSA thinking to avoid slow endpoints, repeated loops, unnecessary database calls, and fragile state transformations.\n\n### What to remember\n\n- Arrays are useful for ordered traversal.\n- Hash maps are useful for fast lookup and counting.\n- Stacks and queues are useful for controlled processing order.\n- Trees and graphs are useful for relationships.\n- Dynamic programming is useful for repeated subproblems.",
        "order": 2
      },
      {
        "title": "Structure of DS",
        "sub": "How data structures store and organize data",
        "phase": "Foundation",
        "content": "## Structure of DS\n\nA data structure is the internal arrangement of data and the operations allowed on that data. Before choosing an algorithm, first understand how the data is stored, accessed, updated, and connected.\n\n### Complete hierarchy diagram\n\n```text\n" + DS_STRUCTURE_DIAGRAM + "\n```\n\n### Basic structure map\n\n| Data structure | Internal idea | Best for |\n|---|---|---|\n| Array | Contiguous indexed items | Fast index access and ordered traversal |\n| String | Array-like sequence of characters | Text problems, scanning, matching |\n| Linked list | Nodes connected by pointers | Frequent insert/delete when the node is known |\n| Stack | Last in, first out | Undo, recursion, parentheses, backtracking |\n| Queue | First in, first out | BFS, scheduling, level-order processing |\n| Hash map | Key-value storage using hashing | Fast lookup, counting, grouping |\n| Set | Unique values using hashing | Duplicate detection and membership checks |\n| Tree | Parent-child hierarchy | Search trees, file systems, nested data |\n| Graph | Nodes connected by edges | Networks, routes, dependencies, relationships |\n| Heap | Tree-like priority structure | Minimum/maximum priority retrieval |\n\n### How to study any data structure\n\nFor each data structure, ask:\n\n1. How is data stored?\n2. How do I add data?\n3. How do I remove data?\n4. How do I search data?\n5. What is the time complexity?\n6. Which problems naturally fit this structure?\n\n### Operation checklist\n\n```text\nAccess   -> Can I reach an item directly?\nSearch   -> How fast can I find a value?\nInsert   -> Where can I add new data?\nDelete   -> What shifts or reconnects after removal?\nTraverse -> In what order do I visit items?\n```\n\n### Simple rule\n\nChoose the structure that makes the most important operation cheap. If the problem needs fast lookup, think hash map or set. If the problem needs order, think array, stack, queue, heap, tree, or graph depending on the relationship.",
        "order": 3
      },
      {
        "title": "Structure of Algorithm",
        "sub": "Input, logic, correctness, and complexity",
        "phase": "Foundation",
        "content": "## Structure of Algorithm\n\nAn algorithm is a step-by-step method for transforming input into the required output. A good algorithm is clear, finite, correct, and efficient.\n\n### Complete hierarchy diagram\n\n```text\n" + ALGORITHM_STRUCTURE_DIAGRAM + "\n```\n\n### Algorithm anatomy\n\n```text\nProblem statement\n↓\nInput\n↓\nConstraints\n↓\nExpected output\n↓\nChosen data structure\n↓\nCore logic / pattern\n↓\nStep-by-step process\n↓\nEdge cases\n↓\nCorrectness check\n↓\nTime and space complexity\n```\n\n### Main parts of an algorithm\n\n| Part | Meaning | Question to ask |\n|---|---|---|\n| Input | Data given to the algorithm | What am I receiving? |\n| Output | Result the algorithm must return | What should I produce? |\n| Constraints | Limits on input size and values | What complexity is acceptable? |\n| Data structure | Storage used during the solution | Which structure makes operations cheap? |\n| Control flow | Sequence, condition, loop, or recursion | How does the logic move? |\n| Termination | The point where the algorithm stops | What prevents infinite work? |\n| Correctness | Proof that the result is right | Why does this always work? |\n| Complexity | Cost of the algorithm | How much time and memory are used? |\n\n### Basic algorithm flow\n\n```text\nSTART\n↓\nRead input\n↓\nHandle edge cases\n↓\nInitialize variables / data structures\n↓\nRun the main loop or recursion\n↓\nUpdate state carefully\n↓\nReturn the final answer\n↓\nEND\n```\n\n### Common control structures\n\n- Sequence: steps run one after another.\n- Selection: `if / else` decides which path runs.\n- Iteration: loops repeat work.\n- Recursion: a function solves smaller versions of the same problem.\n\n### Pseudocode template\n\n```text\nAlgorithm Name(input):\n  validate input\n  initialize answer/state\n\n  for each item or while condition is true:\n    process current state\n    update answer/state\n\n  return answer\n```\n\n### Example: find the maximum number\n\n```text\nAlgorithm FindMax(nums):\n  if nums is empty:\n    return null\n\n  maxValue = nums[0]\n\n  for each number in nums:\n    if number > maxValue:\n      maxValue = number\n\n  return maxValue\n```\n\n### Complexity check\n\nFor every algorithm, write:\n\n```text\nTime complexity: O(...)\nSpace complexity: O(...)\nReason: ...\n```\n\n### Simple rule\n\nA data structure decides how data is organized. An algorithm decides how that organized data is processed to produce the answer.",
        "order": 4
      },
      {
        "title": "Structure of DAA",
        "sub": "Design methods, correctness, and complexity analysis",
        "phase": "Foundation",
        "content": "## Structure of DAA\n\nDAA means **Design and Analysis of Algorithms**. It teaches two connected skills: how to create an algorithm for a problem, and how to measure whether that algorithm is correct and efficient.\n\n### Complete DAA hierarchy\n\n```text\n" + DAA_STRUCTURE_DIAGRAM + "\n```\n\n### What DAA studies\n\n| Area | Meaning | Main question |\n|---|---|---|\n| Design | Creating a solution strategy | How should I solve this problem? |\n| Analysis | Measuring cost and correctness | How effective is this solution? |\n| Complexity | Time and memory growth | What happens when input grows? |\n| Correctness | Proof that the answer is valid | Why does this always work? |\n| Optimization | Improving a solution | Can I make it faster or smaller? |\n\n### DAA workflow\n\n```text\nUnderstand the problem\n↓\nIdentify input, output, and constraints\n↓\nChoose a design technique\n↓\nSelect useful data structures\n↓\nWrite pseudocode\n↓\nProve correctness\n↓\nAnalyze time complexity\n↓\nAnalyze space complexity\n↓\nTest edge cases\n↓\nCompare with alternative approaches\n```\n\n### Common algorithm design techniques\n\n| Technique | Core idea | Example problems |\n|---|---|---|\n| Brute force | Try every possibility | Linear search, all pairs |\n| Divide and conquer | Split, solve, combine | Merge sort, binary search |\n| Greedy | Pick the best local choice | Activity selection, intervals |\n| Dynamic programming | Reuse repeated subproblems | Knapsack, LIS, LCS |\n| Backtracking | Build choices and undo invalid paths | N Queens, Sudoku |\n| Graph traversal | Move through relationships | BFS, DFS, components |\n| Transform and conquer | Change the problem form | Sorting before two pointers |\n| Randomized | Use probability to simplify | Randomized quicksort |\n\n### Analysis vocabulary\n\n- Best case: the cheapest possible input case.\n- Average case: the expected cost over typical inputs.\n- Worst case: the most expensive valid input case.\n- Time complexity: how runtime grows with input size.\n- Space complexity: how extra memory grows with input size.\n- In-place algorithm: an algorithm that uses very little extra memory.\n- Stable algorithm: an algorithm that keeps equal items in their original relative order.\n\n### Big-O family\n\n| Notation | Meaning | Example |\n|---|---|---|\n| O(1) | Constant time | Array index access |\n| O(log n) | Logarithmic time | Binary search |\n| O(n) | Linear time | One loop over input |\n| O(n log n) | Linearithmic time | Merge sort |\n| O(n²) | Quadratic time | Nested loops over pairs |\n| O(2ⁿ) | Exponential time | Subset recursion |\n| O(n!) | Factorial time | All permutations |\n\n### Recurrence analysis\n\nRecursive algorithms are often described with recurrence relations.\n\n```text\nBinary search: T(n) = T(n/2) + O(1)  -> O(log n)\nMerge sort:    T(n) = 2T(n/2) + O(n) -> O(n log n)\n```\n\n### Correctness proof structure\n\n```text\nClaim: State what the algorithm guarantees.\nInvariant: State what remains true during the algorithm.\nInitialization: Prove it is true before the loop or recursion starts.\nMaintenance: Prove each step keeps it true.\nTermination: Prove the final state gives the correct answer.\n```\n\n### How to compare two algorithms\n\nAsk:\n\n1. Which one is easier to prove correct?\n2. Which one has better worst-case time?\n3. Which one uses less extra memory?\n4. Which one handles edge cases more cleanly?\n5. Which one fits the input constraints?\n\n### Simple rule\n\nAlgorithm design answers: **How do I solve it?** Algorithm analysis answers: **How effective is my solution?** DAA teaches you to do both before trusting your code.",
        "order": 5
      },
      {
        "title": "Structure of DSA",
        "sub": "How data structures, algorithms, and analysis connect",
        "phase": "Foundation",
        "content": "## Structure of DSA\n\nDSA means **Data Structures and Algorithms**. It combines two core ideas: how data is organized, and how that organized data is processed to solve a problem efficiently.\n\n### Complete DSA structure\n\n```text\nDSA\n│\n├── 1. DATA STRUCTURES\n│   │\n│   ├── Primitive DS\n│   │   ├── int\n│   │   ├── char\n│   │   ├── float\n│   │   ├── double\n│   │   └── boolean\n│   │\n│   └── Non-Primitive DS\n│       │\n│       ├── Linear DS\n│       │   ├── Array\n│       │   ├── String\n│       │   ├── Linked List\n│       │   ├── Stack\n│       │   ├── Queue\n│       │   └── Deque\n│       │\n│       └── Non-Linear DS\n│           ├── Tree\n│           ├── Graph\n│           ├── Heap\n│           ├── Hash Table\n│           └── Disjoint Set\n│\n├── 2. ALGORITHMS\n│   │\n│   ├── Searching\n│   ├── Sorting\n│   ├── Recursion\n│   ├── Backtracking\n│   ├── Divide and Conquer\n│   ├── Greedy\n│   ├── Dynamic Programming\n│   ├── Graph Algorithms\n│   ├── String Algorithms\n│   └── Mathematical Algorithms\n│\n└── 3. DESIGN AND ANALYSIS\n    │\n    ├── Correctness\n    ├── Time Complexity\n    ├── Space Complexity\n    ├── Big-O / Omega / Theta\n    ├── Recurrence Relations\n    ├── Trade-off Analysis\n    └── Optimization\n```\n\n### DSA learning flow\n\n```text\n" + DSA_LEARNING_FLOW_DIAGRAM + "\n```\n\n### How the three parts work together\n\n| Part | Role | Example question |\n|---|---|---|\n| Data structure | Stores and organizes data | Should I use an array, hash map, tree, or graph? |\n| Algorithm | Processes the data | Should I search, sort, traverse, recurse, or optimize? |\n| Analysis | Measures the solution | Is it correct, efficient, and memory-conscious? |\n\n### DSA solving flow\n\n```text\nRead problem\n↓\nIdentify input and output\n↓\nUnderstand constraints\n↓\nChoose data structure\n↓\nChoose algorithm pattern\n↓\nWrite solution\n↓\nTest edge cases\n↓\nAnalyze time and space\n↓\nImprove if needed\n```\n\n### Pattern connection map\n\n| Problem type | Useful DS | Common algorithm pattern |\n|---|---|---|\n| Pair or subarray | Array, hash map | Two pointers, sliding window |\n| Fast lookup | Hash map, set | Counting, grouping, complement search |\n| Nested choices | Stack, recursion state | Backtracking, DFS |\n| Hierarchy | Tree | DFS, BFS, recursion |\n| Relationships | Graph | BFS, DFS, shortest path, topological sort |\n| Optimization with repeats | Array/table/map | Dynamic programming |\n| Minimum or maximum priority | Heap | Priority queue, greedy |\n\n### Simple rule\n\nDSA is the complete problem-solving system: **a data structure stores the information, an algorithm transforms it, and analysis proves the solution is reliable and efficient.**",
        "order": 6
      },
      {
        "title": "Why How",
        "sub": "Understanding the rationale and practical application",
        "phase": "Foundation",
        "content": "## Why How\n\nThis section bridges the gap between knowing DSA concepts and understanding why they matter and how to apply them effectively in real-world scenarios.\n\n### Why DSA matters\n\n#### In Development\n- **Performance**: Choosing the right data structure can mean the difference between a responsive app and a slow one.\n- **Scalability**: Inefficient algorithms fail when data grows. DSA teaches you to plan for scale.\n- **Code quality**: Knowing DSA patterns makes your code clearer and more maintainable.\n- **Problem solving**: DSA trains your brain to recognize patterns and decompose complex problems.\n\n#### In Interviews\n- **Communication**: DSA questions let you demonstrate clear thinking and reasoning.\n- **Trade-offs**: Interviewers want to see you understand when to choose one approach over another.\n- **Confidence**: Knowing DSA patterns gives you confidence to approach unfamiliar problems.\n\n#### In Production\n- **Cost**: Slow algorithms mean more servers, more power, more money.\n- **User experience**: Fast algorithms mean responsive features, better retention.\n- **Reliability**: Correct algorithms mean fewer bugs in critical systems.\n\n### How to apply DSA\n\n#### Step 1: Read the problem carefully\n- What is the input and output?\n- What are the constraints?\n- What is the worst case size?\n- Do you need exact answers or approximations?\n\n#### Step 2: Identify the core pattern\n- Is this a search problem? (arrays, hash maps, binary search)\n- Is this an ordering problem? (sorting, heaps, priority queues)\n- Is this a relationship problem? (graphs, trees, union-find)\n- Is this a dynamic problem? (recursion, memoization, dynamic programming)\n- Is this a counting/grouping problem? (hash maps, sets)\n\n#### Step 3: Choose your data structure\nAsk: Which operation is most important?\n- If you need fast lookup → Hash map or set\n- If you need order → Array, linked list, or tree\n- If you need hierarchy → Tree\n- If you need relationships → Graph\n- If you need best/worst quickly → Heap\n\n#### Step 4: Sketch the algorithm\n- Write pseudocode first, not code\n- Identify edge cases\n- Trace through an example by hand\n- Check time and space complexity\n\n#### Step 5: Implement and test\n- Translate pseudocode to code\n- Test with small examples\n- Test with edge cases (empty, single item, duplicates, negative, zero)\n- Test with large inputs if complexity allows\n\n### How to practice effectively\n\n1. **Understand before memorizing**: Never memorize solutions. Understand the pattern.\n2. **Practice with intent**: Solve problems grouped by pattern, not randomly.\n3. **Explain your approach**: Before coding, explain your thinking aloud or on paper.\n4. **Analyze every solution**: After solving, ask: Can I do better? Is there a cleaner pattern?\n5. **Review failed attempts**: The problems you get wrong teach you the most.\n6. **Connect to real code**: See how DSA patterns appear in actual frameworks and libraries.\n\n### Common mistakes to avoid\n\n- **Choosing complexity over clarity**: A simple solution beats a complex one.\n- **Not testing edge cases**: Off-by-one errors and empty inputs catch most bugs.\n- **Ignoring constraints**: A solution that works for small inputs might timeout on large ones.\n- **Copying without understanding**: Copying code without understanding it wastes your time.\n- **Solving in isolation**: Real DSA happens in context, not in a vacuum.\n\n### How DSA connects to other topics\n\n| Topic | How DSA helps |\n|---|---|\n| Web development | Efficient state management, fast API responses, smart caching |\n| Databases | Indexing strategies, query optimization, transaction design |\n| Machine learning | Training algorithms, feature extraction, search techniques |\n| DevOps | Load balancing, deployment scheduling, network routing |\n| Graphics | Spatial indexing, pathfinding, rendering optimization |\n\n### What to remember\n\n- DSA is a toolbox, not a rulebook. Pick the right tool for the job.\n- The best algorithm is the simplest one that solves your problem correctly.\n- Premature optimization is the root of evil. Understand the problem first.\n- Practice compounds. Small daily practice beats cramming.\n- Explain your thinking. The ability to communicate matters as much as the code.",
        "order": 7
      },
      {
        "title": "A5 — How Problems Create Algorithms",
        "sub": "Understanding the birth of algorithms from real problems",
        "phase": "Advanced",
        "content": "## How Problems Create Algorithms\n\nAfter understanding why Data Structures were created, I asked a similar question:\n\nWhy were algorithms created?\n\nMost algorithms were born because older approaches became too slow.\n\n### The Evolution of Solving Problems\n\n```text\nNeed to find an item?\n↓\nLinear Search\n\nNeed faster searching?\n↓\nBinary Search\n\nNeed organized data?\n↓\nSorting Algorithms\n\nNeed faster sorting?\n↓\nMerge Sort & Quick Sort\n\nNeed optimization?\n↓\nGreedy Algorithms\n\nNeed optimal solutions?\n↓\nDynamic Programming\n\nNeed relationship analysis?\n↓\nGraph Algorithms\n\nNeed internet-scale systems?\n↓\nDistributed Algorithms\n\nNeed intelligent systems?\n↓\nAI Algorithms\n```\n\n### Historical Context\n\nThe history of algorithms is actually the history of humans trying to solve bigger and bigger problems efficiently.\n\nEvery algorithm exists because brute force eventually became too expensive.\n\n### Key Insight\n\nWhen you understand this pattern, you stop memorizing algorithms and start understanding why they exist.\n\nLess memorization.\nMore understanding.",
        "order": 8
      },
      {
        "title": "A6 — Evolution of Complexity",
        "sub": "How data size changes everything",
        "phase": "Advanced",
        "content": "## Evolution of Complexity\n\nWhile studying algorithms, I realized:\n\nThe real enemy is not coding.\n\nIt is complexity.\n\n### The Problem with Scale\n\nA problem that takes:\n\n- **10 operations** → Easy\n- **100 operations** → Manageable\n- **1,000,000,000 operations** → Can become impossible\n\nThis is why complexity theory exists.\n\n### Complexity Hierarchy\n\n```text\nO(1)\n↓\nO(log n)\n↓\nO(n)\n↓\nO(n log n)\n↓\nO(n²)\n↓\nO(2ⁿ)\n↓\nO(n!)\n```\n\n### Why It Matters\n\nAs data grows, small differences become massive.\n\n**This is why:**\n- Binary Search beats Linear Search\n- Merge Sort beats Bubble Sort\n- Algorithm design matters more than code length\n\n### The Harsh Truth\n\nComputers become faster.\n\nBad complexity becomes expensive forever.\n\n### The Bridge Between Theory and Practice\n\nComplexity is where mathematics meets software engineering.\n\nUnderstanding complexity means understanding scalability.",
        "order": 9
      },
      {
        "title": "A7 — How Real Systems Use DSA",
        "sub": "DSA is not just for interviews",
        "phase": "Advanced",
        "content": "## How Real Systems Use DSA\n\nMany students think DSA exists only for interviews.\n\nBut real systems run on DSA.\n\n### Real-World Examples\n\n| System | DSA Foundation |\n|---|---|\n| **Google Search** | Graphs + Ranking Algorithms |\n| **Instagram Feed** | Priority Queues + Recommendation Algorithms |\n| **Uber** | Graphs + Shortest Path |\n| **Netflix** | Recommendation Systems |\n| **Operating Systems** | Queues + Scheduling Algorithms |\n| **Databases** | Trees + Hashing |\n| **AI Systems** | Vector Structures + Search Algorithms |\n\n### The Reality\n\nThe deeper I study DSA,\nthe more I realize:\n\nDSA is not an interview subject.\n\nIt is the invisible architecture behind modern software.\n\nEvery large-scale system is built on computational thinking.\n\n### The Fundamental Truth\n\nWhen you understand this, you stop seeing DSA as a hurdle to overcome.\n\nYou start seeing it as the foundation of engineering excellence.",
        "order": 10
      },
      {
        "title": "A8 — DSA Inside Databases",
        "sub": "How databases achieve lightning-fast lookups",
        "phase": "Advanced",
        "content": "## DSA Inside Databases\n\nOne question kept coming to my mind:\n\nHow do databases find information so quickly?\n\nThe answer is DSA.\n\n### Indexing Evolution\n\n```text\nSmall systems:\n→ Arrays\n\nGrowing systems:\n→ Hash Tables\n\nDatabase Indexing:\n→ B Trees\n\nLarge Scale Databases:\n→ B+ Trees\n\nSearch Systems:\n→ Inverted Indexes\n\nModern AI Retrieval:\n→ Vector Index Structures\n```\n\n### Why It Matters\n\nWithout Data Structures,\ndatabases would scan every record one by one.\n\nImagine searching millions of records manually.\n\nThat is exactly what DSA prevents.\n\n### The Database Principle\n\nEvery database query you run at scale depends on these structures.\n\nEvery microsecond saved at scale means millions of dollars saved in infrastructure.\n\n### Real Impact\n\nThe database world is one of the best examples of computational optimization in action.\n\nWhen you understand database indexing, you understand why DSA matters in production.",
        "order": 11
      },
      {
        "title": "A9 — DSA Inside Operating Systems",
        "sub": "The invisible foundation beneath every application",
        "phase": "Advanced",
        "content": "## DSA Inside Operating Systems\n\nEvery operating system constantly manages:\n\n- processes\n- memory\n- files\n- CPU time\n\nAnd all of this relies on DSA.\n\n### OS Components and Their Structures\n\n| OS Component | Data Structure/Algorithm |\n|---|---|\n| **Process Scheduling** | Queues |\n| **Call Stack** | Stack |\n| **Memory Management** | Trees + Tables |\n| **File Systems** | Trees |\n| **Disk Scheduling** | Algorithms |\n| **Caching** | Hash Maps + Linked Lists |\n\n### Every Interaction Uses DSA\n\nEvery click, every application launch, every file access depends on these structures.\n\nThe operating system is essentially a giant collection of algorithms and data structures working together.\n\n### The Profound Realization\n\nThe more I learn,\nthe more I realize:\n\nDSA is happening every second, even when we don't notice it.\n\nEvery program you run is built on top of decades of DSA optimization.\n\n### Why This Matters for Developers\n\nUnderstanding how operating systems work means understanding why efficient code matters.\n\nYou are not just writing code.\n\nYou are contributing to a system that runs on computational principles.",
        "order": 12
      },
      {
        "title": "A10 — DSA Inside AI Systems",
        "sub": "The foundation beneath modern artificial intelligence",
        "phase": "Advanced",
        "content": "## DSA Inside AI Systems\n\nToday AI is everywhere.\n\nBut AI also stands on Data Structures and Algorithms.\n\n### AI Components and Their Foundations\n\n| AI Component | DSA Foundation |\n|---|---|\n| **Training Models** | Optimization Algorithms |\n| **Neural Networks** | Graph-Based Computation |\n| **Search Systems** | Graph Traversal |\n| **Embeddings** | Vector Structures |\n| **Vector Databases** | Specialized Indexes |\n| **Retrieval Systems** | Approximate Nearest Neighbor Algorithms |\n| **Recommendation Systems** | Graphs + Ranking Algorithms |\n\n### The Critical Insight\n\nModern AI is not replacing DSA.\n\nIt is built on top of DSA.\n\nThe more advanced AI becomes,\nthe more important efficient computation becomes.\n\n### The Foundation\n\nUnderstanding DSA means understanding the foundation beneath modern AI.\n\nAnd that foundation is still evolving.\n\n### Why This Matters Now\n\nAs AI becomes more integrated into every aspect of software:\n\n- Efficient vector search becomes critical\n- Graph-based models require understanding of graph algorithms\n- Recommendation systems depend on ranking algorithms\n- Training at scale requires optimization algorithm expertise\n\nThe engineers who understand both AI and DSA will shape the future of technology.\n\nDSA is not legacy knowledge.\n\nIt is the bridge to the future.",
        "order": 13
      }
    ]
  }
];

export const categories = ["All", ...new Set(topics.map((t) => t.category))];
