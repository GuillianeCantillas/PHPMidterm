
    #Program: Computation of Grades using Function
    #Programmer: Guilliane Lee 
    #Section: AN22
    #Start Date: June 2, 2023
    #End Date: June 2, 2023


from tabulate import tabulate

def Ofgrade(class_participation, summative_grade, final_exam):
    grade = (class_participation * 0.3) + (summative_grade * 0.3) + (final_exam * 0.4)
    return grade

def letter_grades(grade):
    if grade >= 90:
        return 'A'
    elif grade >= 80:
        return 'B'
    elif grade >= 70:
        return 'C'
    elif grade >= 60:
        return 'D'
    else:
        return 'F'

students = []
for i in range(5):
    student_name = input(f"Enter name of student {i+1}: ")
    class_participation = sum([float(input(f"Enter  {j+1}: ")) for j in range(5)]) / 5
    summative_grade = sum([float(input(f"Enter Summative Assessment grades {j+1}: ")) for j in range(3)]) / 3
    final_exam = float(input("Enter the Final Examination grade: "))

    total_grade = calculate_grade(class_participation, summative_grade, final_exam)
    letter_grade = calculate_letter_grade(total_grade)

    students.append([student_name, class_participation, summative_grade, total_grade, letter_grade])

table = ["Student Name", "Class Participation", "Summative Grade", "Grade", "Letter Grade"]
print(tabulate(students, headers=table))
