def pascal_triangle(n):
    if n <= 0:
        return []

    triangle = []
    for i in range(1, n):
        row = 
        for j in range(1, i):
            row.append(triangle[i-1][j-1] + triangle[i-1][j])
        row.append(1)
        triangle.append(row)

    return triangle