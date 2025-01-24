package com.myapp

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class MyCustomModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String {
        return "MyCustomModule"
    }

    @ReactMethod
    fun greetUser(name: String, promise: Promise) {
        try {
            val greeting = "Hello, $name! Welcome to React Native."
            promise.resolve(greeting)
        } catch (e: Exception) {
            promise.reject("Error", e)
        }
    }
}
