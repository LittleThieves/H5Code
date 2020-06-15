//
//  ViewController.m
//  backgroundTasks
//
//  Created by it on 2020/6/12.
//  Copyright © 2020 房趣科技. All rights reserved.
//

#import "ViewController.h"
#import "LGPerson.h"

@interface ViewController ()

@property (weak, nonatomic) IBOutlet UIButton *backBtn1;

@property (nonatomic, assign) UIBackgroundTaskIdentifier bTask;


@end

@implementation ViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    // Do any additional setup after loading the view.
    
    NSString *tem = @"KC";
    /**
     条件1: LGPerson 没有任何属性
     条件2:
     - (void)saySomething{
         NSLog(@"NB %s - %@",__func__,self.subject);
     }
     */
    id pcls = [LGPerson class];
    void *pp= &pcls;
    [(__bridge id)pp saySomething];

    LGPerson *p = [LGPerson alloc];
    [p saySomething];

    NSLog(@"面试题");
    
}

- (IBAction)startBackgroundTaskTouched:(UIButton *)sender {
    
    UIDevice *device = [UIDevice currentDevice];
    
    if (![device isMultitaskingSupported]) {
        NSLog(@"该设备不支持运行多任务");
        return;
    }
    
    [sender setEnabled:NO];
    
    NSString *buttonTitle = @"后台任务开始";
    
    [sender setTitle:buttonTitle forState:UIControlStateNormal];
    
    dispatch_queue_t background = dispatch_get_global_queue(DISPATCH_QUEUE_PRIORITY_DEFAULT, 0);
    
    dispatch_async(background, ^{
        [self performBackgroundTask];
    });
}

- (void)performBackgroundTask {
    self.bTask = [[UIApplication sharedApplication] beginBackgroundTaskWithExpirationHandler:^{
        
    }];
    
    int i = 0;
    while (i < 60) {
        [NSThread sleepForTimeInterval:1.0f];
        NSLog(@"当前任务 %d",i);
        i ++;
    }
    
    dispatch_sync(dispatch_get_main_queue(), ^{
        [self.backBtn1 setEnabled:YES];
        [self.backBtn1 setTitle:@"后台下载任务" forState:UIControlStateNormal];
        [[UIApplication sharedApplication] endBackgroundTask:self.bTask];
        self.bTask = UIBackgroundTaskInvalid;
    });
}


@end
