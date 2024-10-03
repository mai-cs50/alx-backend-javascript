def pascal_triangle(n):
    if n <= 0:
        return []

    triangle = []
    
    for i in range(n):  # Loop from 0 to n-1 to generate n rows
        row = [1]  # Start each row with the first element as 1
        
        if i > 0:  # For rows beyond the first
            for j in range(1, i):  # Calculate the inner elements
                row.append(triangle[i - 1][j - 1] + triangle[i - 1][j])
            row.append(1)  # Append the last element as 1
        
        triangle.append(row)  # Add the constructed row to the triangle

    return triangle