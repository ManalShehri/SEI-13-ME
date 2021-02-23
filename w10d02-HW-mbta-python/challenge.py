Roads = {
    "red_line" : ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
    "green_line" : ["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
    "orange_line" : ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
}

# have the list as a single string 
def format_list(lst):
    return ', '.join(lst)
    
# travel function, this function return the way as a list
def travelRout(frm,to,arr): 
    difference = arr.index(to) - arr.index(frm)
    # backward
    if difference <= 0: 
        if arr.index(to) == 0:
            route = arr[arr.index(frm)::-1]
        else: 
            route = arr[arr.index(frm):arr.index(to)-1:-1]
    # forward
    else:
        route = arr[arr.index(frm):arr.index(to)+1]
    return route

# new trip function to print all the trip info 
def newTrip(fromLine,fromStation,toLine,toStation):
    # single line trip 
    if fromLine == toLine:
        route = travelRout(fromStation,toStation,Roads[fromLine])
        return f"You must travel through the following stops on {fromLine} : {format_list(route)} \n{len(route)-1} stops in total."
    # double lines trip
    else:
        firstRoute = travelRout(fromStation,'park st',Roads[fromLine])
        secondRoute = travelRout('park st',toStation,Roads[toLine])
        secondRoute.pop(0)
        return f"You must travel through the following stops on {fromLine}: {format_list(firstRoute)} \nChange at park st. \nYour journey continues through the following stops: {format_list(secondRoute)} \n{len(firstRoute) + len(secondRoute)} stops in total."

# take entries from the user 
def reserve():
    print('please choose the station and line you want to go from')
    user_from_line = input('from Line (Red, Green,Orange), please type R or G or O ')
    if user_from_line == 'R':
        from_line = 'red_line'
        count = 1
        for i in Roads['red_line']:
            print(f'{count}. {i}')
            count += 1
        user_from_station = input('choose the station by entering the number:')
        from_station = Roads['red_line'][int(user_from_station) - 1]

    elif user_from_line == 'G':
        from_line = 'green_line'
        count = 1
        for i in Roads['green_line']:
            print(f'{count}. {i}')
            count += 1
        user_from_station = input('choose the station by entering the number:')
        from_station = Roads['green_line'][int(user_from_station) - 1]

    elif user_from_line == 'O':
        from_line = 'orange_line'
        count = 1
        for i in Roads['orange_line']:
            print(f'{count}. {i}')
            count += 1
        user_from_station = input('choose the station by entering the number:')
        from_station = Roads['orange_line'][int(user_from_station) - 1]
    else:
        print('plese choose R, G, O')

    user_to_line = input('To Line (Red, Green,Orange), please type R or G or O ')
    if user_to_line == 'R':
        to_line = 'red_line'
        count = 1
        for i in Roads['red_line']:
            print(f'{count}. {i}')
            count += 1
        user_to_station = input('choose the station by entering the number:')
        to_station = Roads['red_line'][int(user_to_station) - 1]

    elif user_to_line == 'G':
        to_line = 'green_line'
        count = 1
        for i in Roads['green_line']:
            print(f'{count}. {i}')
            count += 1
        user_to_station = input('choose the station by entering the number:')
        to_station = Roads['green_line'][int(user_to_station) - 1]

    elif user_to_line == 'O':
        to_line = 'orange_line'
        count = 1
        for i in Roads['orange_line']:
            print(f'{count}. {i}')
            count += 1
        user_to_station = input('choose the station by entering the number:')
        to_station = Roads['orange_line'][int(user_to_station) - 1]
    else:
        print('plese choose R, G, O')

    print(newTrip(from_line, from_station, to_line, to_station))

print('Welcome to MBTA subway system:')
reserve()
