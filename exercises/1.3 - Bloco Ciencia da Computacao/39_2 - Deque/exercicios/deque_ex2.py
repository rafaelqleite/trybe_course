class Deque:
    FIRST_ELEMENT = 0

    def __init__(self, capacity=0):
        self._data = []
        self._capacity = capacity

    def __len__(self):
        return len(self._data)

    def __str__(self):
        return "Deque(" + ", ".join(str(x) for x in self._data) + ")"

    def is_empty(self):
        return not len(self)

    def is_full(self):
        return len(self) == self._capacity

    def push_front(self, value):
        if self.is_full():
            raise Exception("Overflow")
        self._data.insert(self.FIRST_ELEMENT, value)

    def push_back(self, value):
        if self.is_full():
            raise Exception("Overflow")
        self._data.append(value)

    def pop_front(self):
        if self.is_empty():
            raise Exception("Underflow")
        return self._data.pop(self.FIRST_ELEMENT)

    def pop_back(self):
        if self.is_empty():
            raise Exception("Underflow")
        return self._data.pop()

    def clear(self):
        self._data.clear()
