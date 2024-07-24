function addMember(memberData) {
    const memberId = database.ref().child('members').push().key;
    database.ref('members/' + memberId).set(memberData, function(error) {
        if (error) {
            console.error('Error adding member:', error);
        } else {
            console.log('Member added successfully');
        }
    });
}
function trackAttendance(memberId) {
    const attendanceRef = database.ref('attendance/' + memberId);
    const newAttendanceKey = attendanceRef.push().key;
    attendanceRef.child(newAttendanceKey).set({
        date: new Date().toISOString()
    }, function(error) {
        if (error) {
            console.error('Error tracking attendance:', error);
        } else {
            console.log('Attendance tracked successfully');
        }
    });
}

