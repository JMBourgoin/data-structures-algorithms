 
let b = new ListNode(2);
let a = new ListNode(4, b);
let head1 = new ListNode(3, a);

let bb = new ListNode(5);
let aa = new ListNode(6, bb);
let head2 = new ListNode(4, aa);



var addTwoNumbers = function (l1, l2) {
    let dummyHead = new ListNode(0);
    let current = dummyHead;
    let carry = 0;
    let x = l1;
    let y = l2;
    
    while(x !== null || y!== null){
        xval = (x != null) ? x.val : 0;
        yval = (y != null) ? y.val : 0;

        let sum = xval + yval + carry;
        carry = Math.floor(sum / 10);
        let mod = sum % 10;
        current.next = new ListNode(mod);
        current = current.next;
        
        if(x != null) x = x.next;
        if(y != null) y = y.next;
    }
    
    if(carry > 0){
        current.next = new ListNode(carry);
    }
    
    return dummyHead.next;
};

