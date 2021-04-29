from deque import Deque


class LongestPrefix:

    def __init__(self):
        self._data = list()

    def add_word(self, word):
        deque = Deque()
        [deque.push_back(letra) for letra in word]
        self._data.append(deque)

    def analyse(self):
        longest_prefix = ""
        first_word = self._data[0]
        is_equal = True
        while is_equal or self._data:
            for last_words in self._data[1:]:
                if first_word.peek_front() != last_words.pop_front():
                    is_equal = False
            if is_equal and first_word.peek_front() is not None:
                longest_prefix += first_word.pop_front()
            else:
                return longest_prefix
        return longest_prefix


if __name__ == '__main__':
    lp = LongestPrefix()
    lp.add_word("flower")
    lp.add_word("flow")
    lp.add_word("floight")
    print(lp.analyse())
