package com.myapp;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

class MyCustomModule extends ReactContextBaseJavaModule {

    public MyCustomModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "MyCustomModule";
    }

    @ReactMethod
    public void greetUser(String name, Promise promise) {
        try {
            System.out.println("test");
            String greeting = "Hello, " + name + "! Welcome to React Native.";
            promise.resolve(greeting);
        } catch (Exception e) {
            promise.reject("Error", e);
        }
    }
}
