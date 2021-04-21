# Receba uma lista de números que representam várias jogadas de um dados de 6
# lados.
# Sua missão é combinar as jogadas que somam 7. ou seja, descubra todas as
# duplas que é possível formar que somam 7.and
# Cada  jogada só pode ser combinada uma única vez com outra dupla
def get_sevens(faces):
    seen_before = set()
    answer = []

    for face in faces:
        if (7-face) in seen_before:
            answer.append(((7-face), face))
            seen_before.discard((7-face))
        else:
            seen_before.add(face)
    return answer


if __name__ == "__main__":
    faces = [1, 5, 3, 2, 7, 1, 4, 2, 6, 3, 1, 1]
    print(get_sevens(faces))
