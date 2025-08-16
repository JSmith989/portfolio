---
title: The Joy of Building Side Projects
date: 2025-08-16
excerpt: Why side projects matter, what they teach, and how to start small.
---

# The Joy of Building Side Projects

_Published: August 16, 2025_  
_By: Jordan Smith_

> “The best way to learn is by doing.”

## Why Side Projects Matter

Working on side projects has been one of the most rewarding parts of my career.
They let me experiment with **new technologies** and learn safely.

## A Simple Example

```tsx
import { useState } from 'react';

export default function TodoApp() {
  const [todos, setTodos] = useState<string[]>([]);
  return (
    <ul>
      {todos.map((t, i) => (
        <li key={i}>{t}</li>
      ))}
    </ul>
  );
}
```
